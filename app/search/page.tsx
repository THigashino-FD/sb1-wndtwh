"use client";

import { useState } from "react";
import { Search as SearchIcon, Filter, FileText, MessageSquare, Users, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchFilter } from "@/components/search/search-filter";
import { SearchResults } from "@/components/search/search-results";
import { SearchSuggestions } from "@/components/search/search-suggestions";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuggestions(false);
    // 検索処理
  };

  return (
    <div className="space-y-6">
      <div className="mx-auto max-w-2xl space-y-4">
        <h1 className="text-center text-3xl font-bold">プロジェクト内を検索</h1>
        <p className="text-center text-sm text-muted-foreground">
          ドキュメント、タスク、メンバー情報などを横断的に検索できます
        </p>
        <form onSubmit={handleSearch} className="relative">
          <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="キーワードを入力..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowSuggestions(true);
            }}
            className="h-12 pl-10 pr-4"
          />
          {showSuggestions && query && (
            <SearchSuggestions query={query} onSelect={(value) => {
              setQuery(value);
              setShowSuggestions(false);
            }} />
          )}
        </form>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <SearchFilter />
        </div>
        <div className="lg:col-span-3">
          <SearchResults query={query} />
        </div>
      </div>
    </div>
  );
}