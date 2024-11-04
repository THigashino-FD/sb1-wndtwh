import { FileText, MessageSquare, Users, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SearchResult {
  id: string;
  type: "document" | "task" | "member";
  title: string;
  description: string;
  category: string;
  date: string;
}

const results: SearchResult[] = [
  {
    id: "1",
    type: "document",
    title: "システム要件定義書",
    description: "プロジェクトの要件定義と機能仕様について記載したドキュメント",
    category: "仕様書",
    date: "2024-01-15",
  },
  {
    id: "2",
    type: "task",
    title: "フロントエンド実装",
    description: "ユーザーインターフェースの実装とレスポンシブ対応",
    category: "開発",
    date: "2024-01-14",
  },
  {
    id: "3",
    type: "member",
    title: "山田 太郎",
    description: "プロジェクトマネージャー / フロントエンドエンジニア",
    category: "メンバー",
    date: "2024-01-13",
  },
];

const getIcon = (type: SearchResult["type"]) => {
  switch (type) {
    case "document":
      return FileText;
    case "task":
      return MessageSquare;
    case "member":
      return Users;
    default:
      return FileText;
  }
};

interface SearchResultsProps {
  query: string;
}

export function SearchResults({ query }: SearchResultsProps) {
  if (!query) {
    return (
      <Card className="p-8 text-center text-muted-foreground">
        検索キーワードを入力してください
      </Card>
    );
  }

  return (
    <ScrollArea className="h-[calc(100vh-16rem)]">
      <div className="space-y-4">
        {results.map((result) => {
          const Icon = getIcon(result.type);
          return (
            <Card key={result.id} className="p-4">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-muted p-2">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{result.title}</h3>
                    <Badge variant="secondary">{result.category}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {result.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{result.date}</span>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </ScrollArea>
  );
}