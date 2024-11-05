"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Upload,
  FileText,
  MessageSquare,
  Search,
  FolderKanban,
  Users,
  Settings,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const routes = [
  {
    label: "ダッシュボード",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "データアップロード",
    icon: Upload,
    href: "/upload",
  },
  {
    label: "ドキュメント",
    icon: FileText,
    href: "/documents",
  },
  {
    label: "タスク",
    icon: MessageSquare,
    href: "/tasks",
  },
  {
    label: "検索",
    icon: Search,
    href: "/search",
  },
  {
    label: "プロジェクト",
    icon: FolderKanban,
    href: "/projects",
  },
  {
    label: "メンバー",
    icon: Users,
    href: "/members",
  },
  {
    label: "設定",
    icon: Settings,
    href: "/settings",
  },
];

export function SideNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const NavContent = () => (
    <div className="flex-1 space-y-1 py-4">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          onClick={() => setOpen(false)}
          className={cn(
            "flex items-center gap-x-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent",
            pathname === route.href
              ? "bg-accent text-accent-foreground"
              : "text-muted-foreground",
          )}
        >
          <route.icon className="h-4 w-4" />
          {route.label}
        </Link>
      ))}
    </div>
  );

  return (
    <>
      {/* モバイルメニュー */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="fixed left-4 top-3 z-50"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-56 p-0">
          <div className="flex h-14 items-center border-b px-3 font-bold">
            プロジェクトハブ
          </div>
          <NavContent />
        </SheetContent>
      </Sheet>

      {/* デスクトップメニュー */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-56 lg:flex-col lg:border-r lg:bg-card">
        <Link
          href="/dashboard"
          className="flex h-14 items-center border-b px-3 font-bold"
        >
          プロジェクトハブ
        </Link>
        <NavContent />
      </div>
    </>
  );
}