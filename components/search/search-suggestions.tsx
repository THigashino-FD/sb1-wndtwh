import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { FileText, MessageSquare, Users } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const suggestions = [
  {
    type: "document",
    items: [
      "システム要件定義",
      "プロジェクト計画書",
      "API仕様書",
    ],
  },
  {
    type: "task",
    items: [
      "フロントエンド実装",
      "バックエンド開発",
      "デザインレビュー",
    ],
  },
  {
    type: "member",
    items: [
      "山田太郎",
      "佐藤花子",
      "鈴木一郎",
    ],
  },
];

interface SearchSuggestionsProps {
  query: string;
  onSelect: (value: string) => void;
}

export function SearchSuggestions({ query, onSelect }: SearchSuggestionsProps) {
  return (
    <Command className="absolute top-full z-50 mt-2 w-full rounded-lg border shadow-md">
      <VisuallyHidden>
        <h2>検索候補</h2>
      </VisuallyHidden>
      <CommandInput placeholder="検索..." value={query} />
      <CommandList>
        <CommandEmpty>見つかりませんでした</CommandEmpty>
        {suggestions.map((group) => (
          <CommandGroup key={group.type} heading={group.type}>
            {group.items
              .filter((item) =>
                item.toLowerCase().includes(query.toLowerCase())
              )
              .map((item) => (
                <CommandItem
                  key={item}
                  onSelect={() => onSelect(item)}
                  className="flex items-center gap-2"
                >
                  {group.type === "document" && <FileText className="h-4 w-4" />}
                  {group.type === "task" && <MessageSquare className="h-4 w-4" />}
                  {group.type === "member" && <Users className="h-4 w-4" />}
                  {item}
                </CommandItem>
              ))}
          </CommandGroup>
        ))}
      </CommandList>
    </Command>
  );
}