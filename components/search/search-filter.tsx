import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SearchFilter() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>絞り込み</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>カテゴリ</Label>
            <RadioGroup defaultValue="all">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="all" />
                <Label htmlFor="all">すべて</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="documents" id="documents" />
                <Label htmlFor="documents">ドキュメント</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="tasks" id="tasks" />
                <Label htmlFor="tasks">タスク</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="members" id="members" />
                <Label htmlFor="members">メンバー</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>日付</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="期間を選択" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1week">1週間以内</SelectItem>
                <SelectItem value="1month">1ヶ月以内</SelectItem>
                <SelectItem value="3months">3ヶ月以内</SelectItem>
                <SelectItem value="1year">1年以内</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>プロジェクト</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="project1" />
                <label
                  htmlFor="project1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  プロジェクトA
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="project2" />
                <label
                  htmlFor="project2"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  プロジェクトB
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="project3" />
                <label
                  htmlFor="project3"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  プロジェクトC
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-2">
          <Button variant="outline">リセット</Button>
          <Button>適用</Button>
        </div>
      </CardContent>
    </Card>
  );
}