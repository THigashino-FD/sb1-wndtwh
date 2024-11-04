import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreVertical, Pencil, Trash2 } from "lucide-react";

const members = [
  {
    id: "1",
    name: "山田 太郎",
    email: "yamada@example.com",
    role: "プロジェクトマネージャー",
    skills: ["React", "TypeScript", "Next.js"],
    projects: ["ECサイトリニューアル", "モバイルアプリ開発"],
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
  },
  {
    id: "2",
    name: "佐藤 花子",
    email: "sato@example.com",
    role: "フロントエンドエンジニア",
    skills: ["Vue.js", "JavaScript", "CSS"],
    projects: ["ECサイトリニューアル"],
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
  },
  {
    id: "3",
    name: "鈴木 一郎",
    email: "suzuki@example.com",
    role: "バックエンドエンジニア",
    skills: ["Python", "Django", "PostgreSQL"],
    projects: ["社内システム刷新"],
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
  },
];

interface MemberListProps {
  searchQuery: string;
}

export function MemberList({ searchQuery }: MemberListProps) {
  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>名前</TableHead>
            <TableHead>役割</TableHead>
            <TableHead>スキル</TableHead>
            <TableHead>参加プロジェクト</TableHead>
            <TableHead className="w-[70px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredMembers.map((member) => (
            <TableRow key={member.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>
                      {member.name.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{member.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {member.email}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{member.role}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {member.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {member.projects.map((project) => (
                    <Badge key={project} variant="outline">
                      {project}
                    </Badge>
                  ))}
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