import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  MoreVertical,
  Users,
  Calendar,
  ChevronRight,
  Trash2,
  Pencil,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const projects = [
  {
    id: "1",
    name: "ECサイトリニューアル",
    description: "既存ECサイトのUI/UX改善とパフォーマンス最適化",
    progress: 75,
    members: 8,
    startDate: "2024-01-01",
    endDate: "2024-03-31",
    status: "進行中",
  },
  {
    id: "2",
    name: "モバイルアプリ開発",
    description: "クロスプラットフォーム対応のモバイルアプリケーション開発",
    progress: 30,
    members: 6,
    startDate: "2024-02-01",
    endDate: "2024-06-30",
    status: "進行中",
  },
  {
    id: "3",
    name: "社内システム刷新",
    description: "レガシーシステムのモダン化とクラウド移行",
    progress: 15,
    members: 12,
    startDate: "2024-03-01",
    endDate: "2024-12-31",
    status: "計画中",
  },
];

export function ProjectGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Card key={project.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <div className="space-y-1">
              <h3 className="font-semibold">{project.name}</h3>
              <Badge
                variant={project.status === "進行中" ? "default" : "secondary"}
              >
                {project.status}
              </Badge>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Pencil className="mr-2 h-4 w-4" />
                  編集
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  削除
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              {project.description}
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>進捗状況</span>
                <span>{project.progress}%</span>
              </div>
              <Progress value={project.progress} />
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>{project.members}名</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>{project.endDate}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full">
              詳細を見る
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}