"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { RefreshCcw, Upload, UserCircle, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: <Upload className="w-6 h-6" />,
    title: "Умное распознавание",
    description: "Мгновенно анализирует любые бухгалтерские документы и выписки.",
  },
  {
    icon: <RefreshCcw className="w-6 h-6" />,
    title: "Автоматическая обработка",
    description: "Автоматически классифицирует операции и создает проводки.",
  },
  {
    icon: <UserCircle className="w-6 h-6" />,
    title: "Персонализация",
    description: "Учитывает особенности вашего бизнеса и систему налогообложения.",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Полный контроль",
    description: "Все данные хранятся в безопасности и доступны только вам.",
  },
]

export default function AIAccountantPage() {
  const [isHovered, setIsHovered] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-md mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold mb-3">Познакомьтесь с AI-бухгалтером</h1>
          <p className="text-gray-500">Автоматизируйте вашу бухгалтерию с помощью искусственного интеллекта</p>
        </motion.div>

        <div className="space-y-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-4"
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div className="mt-1">
                <motion.div
                  animate={{
                    scale: isHovered === index ? 1.1 : 1,
                    color: isHovered === index ? "#4461F2" : "#1f2937",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {feature.icon}
                </motion.div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 space-y-4"
        >
          <p className="text-xs text-center text-gray-500">
            AI может допускать ошибки — проверяйте важную информацию. Лимиты использования могут меняться.
          </p>
          <Button
            className="w-full bg-black text-white hover:bg-black/90"
            size="lg"
            onClick={() => (window.location.href = "/upload")}
          >
            Продолжить
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

