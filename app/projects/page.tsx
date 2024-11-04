"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectGrid } from "@/components/projects/project-grid";
import { ProjectList } from "@/components/projects/project-list";
import { ViewToggle } from "@/components/projects/view-toggle";
import { CreateProject } from "@/components/projects/create-project";

export default function ProjectsPage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [showCreateDialog, setShowCreateDialog] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">プロジェクト</h1>
          <p className="text-sm text-muted-foreground">
            プロジェクトの作成、管理、進捗の確認ができます
          </p>
        </div>
        <div className="flex items-center gap-4">
          <ViewToggle view={view} onViewChange={setView} />
          <Button onClick={() => setShowCreateDialog(true)}>
            <Plus className="mr-2 h-4 w-4" />
            新規プロジェクト
          </Button>
        </div>
      </div>

      {view === "grid" ? <ProjectGrid /> : <ProjectList />}

      <CreateProject
        open={showCreateDialog}
        onOpenChange={setShowCreateDialog}
      />
    </div>
  );
}