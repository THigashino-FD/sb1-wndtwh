import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar as CalendarIcon } from "lucide-react";

export function DocumentFilter() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">絞り込み</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>ドキュメントタイプ</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="タイプを選択" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pdf">PDF</SelectItem>
                <SelectItem value="doc">Word文書</SelectItem>
                <SelectItem value="sheet">スプレッドシート</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>作成者</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="作成者を選択" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">すべて</SelectItem>
                <SelectItem value="me">自分</SelectItem>
                <SelectItem value="team">チーム</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>日付</Label>
            <div className="flex gap-2">
              <Button variant="outline" className="w-full justify-start text-left font-normal">
                <CalendarIcon className="mr-2 h-4 w-4" />
                日付を選択
              </Button>
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline">リセット</Button>
            <Button>適用</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}