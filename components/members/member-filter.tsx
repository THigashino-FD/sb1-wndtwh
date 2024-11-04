import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function MemberFilter() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">絞り込み</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>役割</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="役割を選択" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">すべて</SelectItem>
                <SelectItem value="pm">プロジェクトマネージャー</SelectItem>
                <SelectItem value="frontend">フロントエンドエンジニア</SelectItem>
                <SelectItem value="backend">バックエンドエンジニア</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>スキル</Label>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="react" />
                <label
                  htmlFor="react"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  React
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="typescript" />
                <label
                  htmlFor="typescript"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  TypeScript
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="python" />
                <label
                  htmlFor="python"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Python
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="django" />
                <label
                  htmlFor="django"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Django
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>プロジェクト</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="プロジェクトを選択" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">すべて</SelectItem>
                <SelectItem value="ec">ECサイトリニューアル</SelectItem>
                <SelectItem value="mobile">モバイルアプリ開発</SelectItem>
                <SelectItem value="internal">社内システム刷新</SelectItem>
              </SelectContent>
            </Select>
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