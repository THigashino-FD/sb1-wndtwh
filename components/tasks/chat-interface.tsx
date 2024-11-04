"use client";

import { useEffect, useRef } from "react";
import { Bot, User } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  type: "system" | "user";
  content: string;
}

const messages: Record<number, Message[]> = {
  1: [
    {
      id: 1,
      type: "system",
      content:
        "タスクの基本情報を教えてください。タイトル、担当者、期限を入力してください。",
    },
  ],
  2: [
    {
      id: 2,
      type: "system",
      content:
        "タスクの詳細な要件を教えてください。具体的な作業内容、成果物、注意点などを記載してください。",
    },
  ],
  3: [
    {
      id: 3,
      type: "system",
      content:
        "入力内容を確認してください。問題なければ確定ボタンを押してください。",
    },
  ],
};

interface ChatInterfaceProps {
  currentStep: number;
}

export function ChatInterface({ currentStep }: ChatInterfaceProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [currentStep]);

  return (
    <ScrollArea
      ref={scrollRef}
      className="h-[400px] rounded-lg border bg-muted/50 p-4"
    >
      <div className="space-y-4">
        {messages[currentStep]?.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex w-max max-w-[80%] items-start gap-3 rounded-lg p-4",
              message.type === "system"
                ? "bg-background"
                : "ml-auto bg-primary text-primary-foreground"
            )}
          >
            {message.type === "system" ? (
              <Bot className="mt-0.5 h-5 w-5 text-muted-foreground" />
            ) : (
              <User className="mt-0.5 h-5 w-5" />
            )}
            <p className="text-sm">{message.content}</p>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}