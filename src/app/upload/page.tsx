"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Upload, FileText, X, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface FileWithPreview extends File {
  preview?: string
}

export default function UploadPage() {
  const [isProcessing, setIsProcessing] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isDragActive, setIsDragActive] = useState(false)
  const [files, setFiles] = useState<FileWithPreview[]>([])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragActive(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragActive(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragActive(false)
    const droppedFiles = Array.from(e.dataTransfer.files)
    handleFiles(droppedFiles)
  }, [])

  const handleFiles = (newFiles: File[]) => {
    const validFiles = newFiles.filter((file) =>
      [
        "application/pdf",
        "image/jpeg",
        "image/png",
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      ].includes(file.type),
    )

    setFiles((prev) => [...prev, ...validFiles])
    if (validFiles.length > 0) {
      startProcessing()
    }
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const startProcessing = () => {
    setIsProcessing(true)
    setProgress(0)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsProcessing(false)
          return 100
        }
        return prev + 2
      })
    }, 100)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold mb-3">Загрузите документы</h1>
          <p className="text-gray-500">Перетащите файлы или нажмите для выбора</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div
            className={`
              relative
              border-2 border-dashed rounded-xl p-8
              transition-all duration-200 ease-in-out
              ${isDragActive ? "border-black bg-gray-50 scale-102" : "border-gray-300"}
              ${isProcessing ? "pointer-events-none opacity-50" : "cursor-pointer hover:border-gray-400"}
              ${files.length > 0 ? "mb-6" : ""}
            `}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById("fileInput")?.click()}
          >
            <input
              id="fileInput"
              type="file"
              className="hidden"
              onChange={(e) => e.target.files && handleFiles(Array.from(e.target.files))}
              multiple
              accept=".pdf,.jpg,.jpeg,.png,.xls,.xlsx"
            />

            <div className="text-center">
              <div className="relative inline-flex mb-4">
                <motion.div
                  animate={{
                    scale: isDragActive ? 1.2 : 1,
                    rotate: isDragActive ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                </motion.div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">
                  {isDragActive ? "Отпустите файлы" : "Перетащите файлы сюда или нажмите"}
                </p>
                <p className="text-xs text-gray-500">PDF, JPG, PNG или Excel файлы</p>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {files.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-2"
              >
                {files.map((file, index) => (
                  <motion.div
                    key={`${file.name}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
                  >
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-gray-400" />
                      <div className="text-sm font-medium truncate max-w-[200px]">{file.name}</div>
                    </div>
                    {!isProcessing && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          removeFile(index)
                        }}
                        className="p-1 hover:bg-gray-100 rounded-full"
                      >
                        <X className="h-4 w-4 text-gray-500" />
                      </button>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isProcessing && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-6 space-y-4"
              >
                <Progress value={progress} className="w-full" />
                <p className="text-sm text-center text-gray-500">Анализируем ваши документы... {progress}%</p>
              </motion.div>
            )}
          </AnimatePresence>

          {progress === 100 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-6 text-center">
              <div className="inline-flex items-center space-x-2 text-green-600 mb-4">
                <CheckCircle2 className="h-5 w-5" />
                <span>Анализ завершен</span>
              </div>
              <div>
                <Button
                  className="bg-black text-white hover:bg-black/90 w-full"
                  size="lg"
                  onClick={() => (window.location.href = "/report")}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Посмотреть отчет
                </Button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

