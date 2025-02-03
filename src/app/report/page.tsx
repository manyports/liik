"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Download, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { generatePDF } from "@/utils/generatePDF"
import { toast } from "sonner"

interface FinancialItem {
  category: string
  items: {
    name: string
    amount: number
    description?: string
  }[]
}

export default function ReportPage() {
  const router = useRouter()
  const [isExporting, setIsExporting] = useState(false)

const financialData: FinancialItem[] = [
    {
        category: "Доходы",
        items: [
            {
                name: "Выручка",
                amount: 4523189,
                description: "Общая выручка от продаж",
            },
            {
                name: "Прочие доходы",
                amount: 150000,
                description: "Доходы из других источников",
            },
        ],
    },
    {
        category: "Расходы",
        items: [
            {
                name: "Себестоимость",
                amount: -2997323,
                description: "Прямые производственные затраты",
            },
            {
                name: "Операционные расходы",
                amount: -892000,
                description: "Административные и прочие расходы",
            },
        ],
    },
    {
        category: "Налоги",
        items: [
            {
                name: "НДС",
                amount: -567890,
                description: "За текущий период",
            },
            {
                name: "Подоходный налог",
                amount: -216299,
                description: "20% от налогооблагаемого дохода",
            },
        ],
    },
]

  const handleExportPDF = async () => {
    setIsExporting(true)
    try {
      const doc = await generatePDF(financialData)
      doc.save("financial-report.pdf")
      toast.success("PDF exported successfully")
    } catch (error) {
      console.error("Error generating PDF:", error)
      toast.error("Failed to export PDF")
    } finally {
      setIsExporting(false)
    }
  }

  const formatAmount = (amount: number) => {
    const absAmount = Math.abs(amount)
    return new Intl.NumberFormat("ru-RU").format(absAmount)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center justify-between mb-8">
            <Button variant="ghost" className="text-gray-600" onClick={() => router.back()}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <Button onClick={handleExportPDF} disabled={isExporting} className="bg-black text-white hover:bg-black/90">
              {isExporting ? (
                "Exporting..."
              ) : (
                <>
                  <Download className="h-4 w-4 mr-2" />
                  Export PDF
                </>
              )}
            </Button>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-2xl font-bold mb-2">Финансовый отчёт</h1>
            <p className="text-gray-500 text-sm">Перид: 01.02.2025 - 31.02.2025</p>
          </div>
        </motion.div>

        <div className="space-y-8">
          {financialData.map((section, sectionIndex) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.1 }}
            >
              <h2 className="text-lg font-semibold mb-4">{section.category}</h2>
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: sectionIndex * 0.1 + itemIndex * 0.05 }}
                    className="flex justify-between items-start py-2"
                  >
                    <div>
                      <div className="font-medium">{item.name}</div>
                      {item.description && <div className="text-sm text-gray-500 mt-1">{item.description}</div>}
                    </div>
                    <div className={`text-right ${item.amount < 0 ? "text-red-600" : "text-green-600"}`}>
                      {item.amount < 0 ? "−" : ""} KZT {formatAmount(item.amount)}
                    </div>
                  </motion.div>
                ))}
              </div>
              {sectionIndex < financialData.length - 1 && <div className="border-b border-gray-200 mt-4" />}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="pt-6 mt-6 border-t border-gray-200"
          >
            <div className="flex justify-between items-center font-bold text-lg">
              <div>Общий доход</div>
              <div className="text-green-600">KZT {formatAmount(999677)}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

