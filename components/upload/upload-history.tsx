import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { FileText, Download, Trash2 } from "lucide-react";

const history = [
  {
    id: 1,
    name: "要件定義書.pdf",
    type: "PDF",
    size: "2.4 MB",
    uploadedAt: "2024-01-15 14:30",
    status: "完了",
  },
  {
    id: 2,
    name: "プロジェクトリポジトリ",
    type: "GitHub",
    size: "N/A",
    uploadedAt: "2024-01-14 09:15",
    status: "完了",
  },
  {
    id: 3,
    name: "議事録.docx",
    type: "DOCX",
    size: "1.1 MB",
    uploadedAt: "2024-01-13 16:45",
    status: "完了",
  },
];

export function UploadHistory() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ファイル名</TableHead>
            <TableHead>種類</TableHead>
            <TableHead>サイズ</TableHead>
            <TableHead>アップロード日時</TableHead>
            <TableHead>状態</TableHead>
            <TableHead className="text-right">操作</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {history.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  {item.name}
                </div>
              </TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.size}</TableCell>
              <TableCell>{item.uploadedAt}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}