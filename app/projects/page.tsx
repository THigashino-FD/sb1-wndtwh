export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">プロジェクト</h1>
        <p className="text-sm text-muted-foreground">
          進行中のプロジェクトと進捗状況を管理します
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-lg border bg-card p-6"
          >
            <div>
              <h3 className="font-semibold">{project.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {project.description}
              </p>
            </div>
            <div className="mt-4">
              <div className="h-2 rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-sm">
                <span>{project.progress}% 完了</span>
                <span className="text-muted-foreground">
                  メンバー: {project.members}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const projects = [
  {
    id: "1",
    name: "ECサイトリニューアル",
    description: "既存ECサイトのUI/UX改善とパフォーマンス最適化",
    progress: 75,
    members: 8,
  },
  {
    id: "2",
    name: "モバイルアプリ開発",
    description: "クロスプラットフォーム対応のモバイルアプリケーション",
    progress: 30,
    members: 6,
  },
  {
    id: "3",
    name: "社内システム刷新",
    description: "レガシーシステムの最新化とクラウド移行",
    progress: 15,
    members: 12,
  },
];