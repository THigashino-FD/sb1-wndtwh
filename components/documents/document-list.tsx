import { FileText, FileCode, FileSpreadsheet, FolderGit } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Document {
  id: string;
  title: string;
  type: "pdf" | "doc" | "sheet" | "code";
  date: string;
  category: "code" | "service";
  description: string;
  path?: string;
}

const documents: Document[] = [
  // コードファイル別ドキュメント
  {
    id: "1",
    title: "main.py",
    type: "code",
    date: "2024-01-15",
    category: "code",
    description: "メインアプリケーションのエントリーポイント",
    path: "/src/main.py"
  },
  {
    id: "2",
    title: "utils.js",
    type: "code",
    date: "2024-01-14",
    category: "code",
    description: "共通ユーティリティ関数",
    path: "/src/utils.js"
  },
  {
    id: "3",
    title: "database.sql",
    type: "code",
    date: "2024-01-13",
    category: "code",
    description: "データベーススキーマ定義",
    path: "/db/database.sql"
  },
  
  // サービス全体ドキュメント
  {
    id: "4",
    title: "システム要件定義書",
    type: "pdf",
    date: "2024-01-15",
    category: "service",
    description: "システム全体の要件定義と機能仕様"
  },
  {
    id: "5",
    title: "アーキテクチャ設計書",
    type: "doc",
    date: "2024-01-14",
    category: "service",
    description: "システムアーキテクチャの詳細設計"
  },
  {
    id: "6",
    title: "開発ロードマップ",
    type: "sheet",
    date: "2024-01-13",
    category: "service",
    description: "開発スケジュールと工程表"
  }
];

const getIcon = (type: Document["type"]) => {
  switch (type) {
    case "pdf":
      return FileText;
    case "doc":
      return FileCode;
    case "sheet":
      return FileSpreadsheet;
    case "code":
      return FolderGit;
  }
};

interface DocumentListProps {
  category: "code" | "service";
  onSelect: (id: string) => void;
  searchQuery: string;
}

export function DocumentList({
  category,
  onSelect,
  searchQuery,
}: DocumentListProps) {
  const filteredDocs = documents.filter(
    (doc) =>
      doc.category === category &&
      (doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       doc.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <ScrollArea className="h-[calc(100vh-15rem)]">
      <div className="space-y-1 p-2">
        {filteredDocs.map((doc) => {
          const Icon = getIcon(doc.type);
          return (
            <button
              key={doc.id}
              onClick={() => onSelect(doc.id)}
              className={cn(
                "flex w-full items-start gap-3 rounded-lg px-3 py-2 text-sm hover:bg-accent",
                "focus:bg-accent focus:outline-none"
              )}
            >
              <Icon className="mt-0.5 h-4 w-4 text-muted-foreground" />
              <div className="flex flex-1 flex-col items-start">
                <span className="font-medium">{doc.title}</span>
                <span className="text-xs text-muted-foreground">
                  {doc.description}
                </span>
                {doc.path && (
                  <span className="mt-1 text-xs text-muted-foreground">
                    {doc.path}
                  </span>
                )}
                <span className="mt-1 text-xs text-muted-foreground">
                  更新: {doc.date}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </ScrollArea>
  );
}