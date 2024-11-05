"use client";

import { useState } from "react";

export default function UploadPage() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [files, setFiles] = useState<File[]>([]);

  const simulateUpload = async (newFiles: File[]) => {
    setUploading(true);
    for (let i = 0; i <= 100; i += 10) {
      setProgress(i);
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    setUploading(false);
    setProgress(0);
    setFiles(prev => [...prev, ...newFiles]);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    await simulateUpload(droppedFiles);
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      await simulateUpload(selectedFiles);
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold">ファイルアップロード</h1>
        <p className="text-sm text-muted-foreground">
          ドラッグ＆ドロップまたはファイル選択でアップロード
        </p>
      </div>

      <div className="border-2 border-dashed p-6">
        <div
          className={`flex min-h-[400px] flex-col items-center justify-center ${
            isDragging ? "bg-accent" : ""
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <svg
            className="mb-4 h-12 w-12 text-muted-foreground"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>

          <div className="space-y-2">
            <p className="text-xl font-medium">
              ファイルをドロップしてアップロード
            </p>
            <p className="text-sm text-muted-foreground">
              または下のボタンからファイルを選択
            </p>
          </div>

          <div className="mt-6">
            <input
              type="file"
              multiple
              className="hidden"
              id="file-upload"
              onChange={handleFileSelect}
            />
            <button
              onClick={() => document.getElementById('file-upload')?.click()}
              className="p-2 bg-blue-500 text-white rounded"
            >
              ファイルを選択
            </button>
          </div>

          {uploading && (
            <div className="mt-6 w-full max-w-xs space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded">
                <div
                  className="h-4 bg-blue-500 rounded"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-muted-foreground">
                アップロード中... {progress}%
              </p>
            </div>
          )}
        </div>
      </div>

      {files.length > 0 && (
        <div className="p-6 border rounded">
          <h2 className="mb-4 text-lg font-semibold">アップロードされたファイル</h2>
          <div className="space-y-2">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg border p-3"
              >
                <div className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 text-muted-foreground"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{file.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
