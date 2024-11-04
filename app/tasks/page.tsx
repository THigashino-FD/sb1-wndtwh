"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Steps } from "@/components/tasks/steps";
import { ChatInterface } from "@/components/tasks/chat-interface";
import { Send } from "lucide-react";

const steps = [
  { id: 1, title: "基本情報", description: "タスクの基本情報を入力" },
  { id: 2, title: "詳細設定", description: "詳細な要件を設定" },
  { id: 3, title: "確認", description: "入力内容の確認" },
];

export default function TasksPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    // メッセージ送信処理
    setMessage("");
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  return (
    <div className="space-y-8">
      <Steps steps={steps} currentStep={currentStep} />

      <div className="grid gap-6 lg:grid-cols-7">
        <Card className="col-span-4 p-6">
          <ChatInterface currentStep={currentStep} />
          <div className="mt-4 flex gap-2">
            <Textarea
              placeholder="メッセージを入力..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[100px]"
            />
            <Button
              className="self-end"
              onClick={handleSend}
              disabled={!message.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </Card>

        <Card className="col-span-3 p-6">
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold">ヘルプ</h3>
              <p className="text-sm text-muted-foreground">
                各ステップで必要な情報を入力してください。
                システムが対話形式でガイドします。
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">入力のポイント</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• できるだけ具体的に記述してください</li>
                <li>• 期限や優先度は明確に指定してください</li>
                <li>• 関連する資料がある場合は参照を含めてください</li>
                <li>• 不明点はその場で質問できます</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">次のステップ</h3>
              <p className="text-sm text-muted-foreground">
                {currentStep === 1 && "タスクの基本情報を入力してください"}
                {currentStep === 2 && "詳細な要件を設定してください"}
                {currentStep === 3 && "入力内容を確認してください"}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}