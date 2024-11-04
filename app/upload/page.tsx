"use client";

import { useState } from "react";
import { Upload, FileType, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { UploadHistory } from "@/components/upload/upload-history";

export default function UploadPage() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    setUploading(true);

    // アップロード進捗のシミュレーション
    for (let i = 0; i <= 100; i += 10) {
      setProgress(i);
      await new Promise((resolve) => setTimeout(resolve, 200));
    }

    setUploading(false);
    setProgress(0);
  };

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardContent className="pt-6">
            <div
              className={cn(
                "flex h-[400px] flex-col items-center justify-center rounded-lg border-2 border-dashed transition-colors",
                isDragging
                  ? "border-primary bg-accent"
                  : "border-muted-foreground/25"
              )}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <Upload className="h-10 w-10 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-semibold">
                ファイルをドラッグ＆ドロップ
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                または下のボタンからファイルを選択
              </p>
              <div className="mt-6 flex gap-4">
                <Button>
                  <FileType className="mr-2 h-4 w-4" />
                  ファイルを選択
                </Button>
                <Button variant="outline">
                  <Github className="mr-2 h-4 w-4" />
                  GitHubリポジトリ
                </Button>
              </div>
              {uploading && (
                <div className="mt-8 w-full max-w-xs space-y-2">
                  <Progress value={progress} />
                  <p className="text-sm text-muted-foreground text-center">
                    アップロード中... {progress}%
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold">アップロードガイドライン</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>最大ファイルサイズ: 100MB</li>
              <li>対応フォーマット: PDF, DOC, DOCX</li>
              <li>GitHubリポジトリは公開設定が必要</li>
              <li>ファイルはウイルスチェック済み</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <UploadHistory />
    </div>
  );
}