"use client";

import { useState } from "react";
import { Search, Filter, Download, Eye, ZoomIn, ZoomOut, Code, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DocumentList } from "@/components/documents/document-list";
import { DocumentPreview } from "@/components/documents/document-preview";
import { DocumentFilter } from "@/components/documents/document-filter";
import { DependencyGraph } from "@/components/documents/dependency-graph";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { cn } from "@/lib/utils";

export default function DocumentsPage() {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDependencies, setShowDependencies] = useState(true);
  const [activeCategory, setActiveCategory] = useState<"code" | "service">("code");

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">ドキュメント</h1>
          <p className="text-sm text-muted-foreground">
            プロジェクトの全ドキュメントを管理・閲覧できます
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="ドキュメントを検索"
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <DocumentFilter />
          <Button
            variant="outline"
            onClick={() => setShowDependencies(!showDependencies)}
          >
            依存関係グラフ
          </Button>
        </div>
      </div>

      <Tabs 
        defaultValue="code" 
        className="space-y-4"
        onValueChange={(value) => setActiveCategory(value as "code" | "service")}
      >
        <TabsList>
          <TabsTrigger value="code" className="flex items-center gap-2">
            <Code className="h-4 w-4" />
            コードファイル別
          </TabsTrigger>
          <TabsTrigger value="service" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            サービス全体
          </TabsTrigger>
        </TabsList>

        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={25} minSize={20}>
            <TabsContent value="code" className="m-0">
              <DocumentList
                category="code"
                onSelect={setSelectedDoc}
                searchQuery={searchQuery}
              />
            </TabsContent>
            <TabsContent value="service" className="m-0">
              <DocumentList
                category="service"
                onSelect={setSelectedDoc}
                searchQuery={searchQuery}
              />
            </TabsContent>
          </ResizablePanel>

          <ResizableHandle />

          <ResizablePanel defaultSize={50} minSize={30}>
            <DocumentPreview 
              documentId={selectedDoc} 
              category={activeCategory}
            />
          </ResizablePanel>

          {showDependencies && (
            <>
              <ResizableHandle />
              <ResizablePanel defaultSize={25} minSize={20}>
                <DependencyGraph 
                  documentId={selectedDoc}
                  category={activeCategory}
                />
              </ResizablePanel>
            </>
          )}
        </ResizablePanelGroup>
      </Tabs>
    </div>
  );
}