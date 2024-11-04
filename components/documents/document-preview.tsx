"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, ZoomIn, ZoomOut, Copy } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import mermaid from "mermaid";
import { cn } from "@/lib/utils";

interface DocumentPreviewProps {
  documentId: string | null;
  category: "code" | "service";
}

const sampleServiceDiagram = `
sequenceDiagram
    participant User
    participant Frontend
    participant Backend
    participant Database
    
    User->>Frontend: アクセス要求
    Frontend->>Backend: API呼び出し
    Backend->>Database: データ取得
    Database-->>Backend: 結果返却
    Backend-->>Frontend: レスポンス
    Frontend-->>User: 画面表示
`;

const sampleCodeDiagram = `
classDiagram
    class Main {
        +start()
        +initialize()
    }
    class Utils {
        +formatDate()
        +validateInput()
    }
    class Database {
        +connect()
        +query()
    }
    Main --> Utils
    Main --> Database
`;

export function DocumentPreview({ documentId, category }: DocumentPreviewProps) {
  const diagramRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (typeof window !== "undefined" && diagramRef.current) {
      mermaid.initialize({
        startOnLoad: true,
        theme: "neutral",
      });
      
      const renderDiagram = async () => {
        try {
          const diagram = category === "code" ? sampleCodeDiagram : sampleServiceDiagram;
          const { svg } = await mermaid.render("diagram", diagram);
          if (diagramRef.current) {
            diagramRef.current.innerHTML = svg;
          }
        } catch (error) {
          console.error("Failed to render mermaid diagram:", error);
        }
      };

      renderDiagram();
    }
  }, [documentId, category]);

  if (!documentId) {
    return (
      <Card className="h-[calc(100vh-15rem)]">
        <CardContent className="flex h-full items-center justify-center text-muted-foreground">
          プレビューするドキュメントを選択してください
        </CardContent>
      </Card>
    );
  }

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.1, 2));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.1, 0.5));

  return (
    <Card className="h-[calc(100vh-15rem)]">
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <div className="space-y-1">
          <h3 className="font-semibold">
            {category === "code" ? "main.py ドキュメント" : "システム要件定義書 v1.0"}
          </h3>
          <p className="text-sm text-muted-foreground">
            最終更新: 2024年1月15日
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={handleZoomOut}>
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={handleZoomIn}>
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Copy className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ExternalLink className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[calc(100%-5rem)]">
          <div 
            className={cn(
              "prose prose-sm max-w-none dark:prose-invert",
              "transition-transform duration-200"
            )}
            style={{ transform: `scale(${zoom})`, transformOrigin: "0 0" }}
          >
            {category === "code" ? (
              <>
                <h2>ファイル概要</h2>
                <p>
                  このファイルはアプリケーションのメインエントリーポイントです。
                  主要な初期化処理とルーティングの設定を行います。
                </p>

                <h3>主要機能</h3>
                <ul>
                  <li>アプリケーションの初期化</li>
                  <li>データベース接続の確立</li>
                  <li>ミドルウェアの設定</li>
                  <li>ルーティングの定義</li>
                </ul>

                <h3>クラス構造</h3>
                <div ref={diagramRef} className="my-4" />

                <h3>使用例</h3>
                <pre>
                  <code className="language-python">
                    {`from app import create_app

app = create_app()
app.run(host='0.0.0.0', port=8000)`}
                  </code>
                </pre>
              </>
            ) : (
              <>
                <h2>1. システム概要</h2>
                <p>
                  本システムは、プロジェクトの効率的な管理を実現するための
                  Webアプリケーションです。
                </p>

                <h3>1.1 システムアーキテクチャ</h3>
                <div ref={diagramRef} className="my-4" />

                <h2>2. 機能要件</h2>
                <p>
                  システムは以下の主要機能を提供します：
                </p>
                <ul>
                  <li>プロジェクト管理機能</li>
                  <li>タスク管理機能</li>
                  <li>ドキュメント管理機能</li>
                  <li>コミュニケーション機能</li>
                </ul>
              </>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}