import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, Users, Calendar, Pencil, Trash2 } from "lucide-react";

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

export function ProjectList() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>プロジェクト名</TableHead>
            <TableHead>ステータス</TableHead>
            <TableHead>進捗</TableHead>
            <TableHead>メンバー</TableHead>
            <TableHead>期限</TableHead>
            <TableHead className="w-[70px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell>
                <div className="space-y-1">
                  <div className="font-medium">{project.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {project.description}
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant={project.status === "進行中" ? "default" : "secondary"}
                >
                  {project.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="w-[160px] space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{project.members}名</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{project.endDate}</span>
                </div>
              </TableCell>
              <TableCell>
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
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}