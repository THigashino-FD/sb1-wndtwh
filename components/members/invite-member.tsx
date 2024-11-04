"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface InviteMemberProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function InviteMember({ open, onOpenChange }: InviteMemberProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>メンバーを招待</DialogTitle>
          <DialogDescription>
            新しいメンバーをプロジェクトに招待します。
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="email">メールアドレス</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@company.com"
            />
          </div>
          <div className="space-y-2">
            <Label>役割</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="役割を選択" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pm">プロジェクトマネージャー</SelectItem>
                <SelectItem value="frontend">フロントエンドエンジニア</SelectItem>
                <SelectItem value="backend">バックエンドエンジニア</SelectItem>
                <SelectItem value="designer">デザイナー</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>プロジェクト</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="プロジェクトを選択" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ec">ECサイトリニューアル</SelectItem>
                <SelectItem value="mobile">モバイルアプリ開発</SelectItem>
                <SelectItem value="internal">社内システム刷新</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            キャンセル
          </Button>
          <Button type="submit">招待を送信</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}