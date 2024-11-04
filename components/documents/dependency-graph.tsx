"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ZoomIn, ZoomOut, Maximize2, Minimize2 } from "lucide-react";
import mermaid from "mermaid";

interface DependencyGraphProps {
  documentId: string | null;
  category: "code" | "service";
}

const getGraphDefinition = (category: "code" | "service") => {
  if (category === "code") {
    return `
      graph TD
        A[main.py] --> B[utils.js]
        A --> C[database.sql]
        B --> D[helpers.js]
        C --> E[schema.sql]
        B --> F[api.js]
        F --> G[types.ts]
    `;
  }
  return `
    graph TD
      A[要件定義書] --> B[システム設計書]
      B --> C[API仕様書]
      B --> D[データベース設計書]
      C --> E[フロントエンド実装仕様]
      C --> F[バックエンド実装仕様]
      D --> F
      E --> G[UIコンポーネント設計]
      F --> H[インフラ構成図]
  `;
};

export function DependencyGraph({ documentId, category }: DependencyGraphProps) {
  const graphRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && graphRef.current) {
      mermaid.initialize({
        startOnLoad: true,
        theme: "neutral",
        flowchart: {
          curve: "basis",
          padding: 20,
        },
      });
      
      const renderGraph = async () => {
        try {
          const graphDefinition = getGraphDefinition(category);
          const { svg } = await mermaid.render("graph", graphDefinition);
          if (graphRef.current) {
            graphRef.current.innerHTML = svg;
          }
        } catch (error) {
          console.error("Failed to render mermaid graph:", error);
        }
      };

      renderGraph();
    }
  }, [documentId, category]);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.1, 2));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.1, 0.5));
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <Card className={`h-[calc(100vh-15rem)] ${isFullscreen ? "fixed inset-4 z-50" : ""}`}>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium">
          {category === "code" ? "コード依存関係" : "ドキュメント依存関係"}
        </CardTitle>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={handleZoomOut}>
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleZoomIn}>
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleFullscreen}>
            {isFullscreen ? (
              <Minimize2 className="h-4 w-4" />
            ) : (
              <Maximize2 className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div
          className="h-full overflow-auto"
          style={{
            transform: `scale(${zoom})`,
            transformOrigin: "0 0",
          }}
        >
          <div ref={graphRef} className="min-h-[500px]" />
        </div>
      </CardContent>
    </Card>
  );
}