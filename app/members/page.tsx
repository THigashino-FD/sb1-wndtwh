"use client";

import { useState } from "react";
import { Plus, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MemberList } from "@/components/members/member-list";
import { MemberFilter } from "@/components/members/member-filter";
import { InviteMember } from "@/components/members/invite-member";

export default function MembersPage() {
  const [showInviteDialog, setShowInviteDialog] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">メンバー管理</h1>
        <p className="text-sm text-muted-foreground">
          プロジェクトメンバーの管理と招待ができます
        </p>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative flex-1 md:max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="メンバーを検索"
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <MemberFilter />
          <Button onClick={() => setShowInviteDialog(true)}>
            <Plus className="mr-2 h-4 w-4" />
            メンバーを招待
          </Button>
        </div>
      </div>

      <MemberList searchQuery={searchQuery} />

      <InviteMember
        open={showInviteDialog}
        onOpenChange={setShowInviteDialog}
      />
    </div>
  );
}