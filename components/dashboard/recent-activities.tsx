import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileUp, MessageSquare, GitPullRequest } from "lucide-react";

const activities = [
  {
    icon: FileUp,
    title: "新規ドキュメントがアップロードされました",
    description: "requirements.pdf を山田さんがアップロード",
    timestamp: "2分前",
  },
  {
    icon: MessageSquare,
    title: "新規タスクが作成されました",
    description: "フロントエンド実装タスクが作成されました",
    timestamp: "1時間前",
  },
  {
    icon: GitPullRequest,
    title: "プロジェクトマイルストーン達成",
    description: "フェーズ1が正常に完了しました",
    timestamp: "3時間前",
  },
  {
    icon: MessageSquare,
    title: "タスクにコメントが追加されました",
    description: "佐藤さんがUIデザインタスクにコメント",
    timestamp: "5時間前",
  },
];

interface RecentActivitiesProps extends React.HTMLAttributes<HTMLDivElement> {}

export function RecentActivities({ className, ...props }: RecentActivitiesProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>最近の活動</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[350px]">
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-lg border p-4"
              >
                <activity.icon className="mt-1 h-5 w-5 text-muted-foreground" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {activity.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {activity.description}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {activity.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}