"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function SalaryCalculatorPage() {
  const [grossSalary, setGrossSalary] = useState("")
  const [result, setResult] = useState(null)

  const calculateSalary = () => {
    const gross = Number.parseFloat(grossSalary)
    const pension = gross * 0.1
    const socialTax = gross * 0.095
    const incomeTax = (gross - pension) * 0.1
    const netSalary = gross - pension - incomeTax

    setResult({
      gross,
      pension,
      socialTax,
      incomeTax,
      netSalary,
    })
  }

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        <div className="p-8 sm:p-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Калькулятор заработной платы</h1>
          <p className="text-lg text-gray-600 mb-8">Рассчитайте зарплату сотрудников с учетом налогов и удержаний.</p>
          <div className="space-y-6">
            <motion.div
              className="relative"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <input
                type="number"
                value={grossSalary}
                onChange={(e) => setGrossSalary(e.target.value)}
                className="w-full px-4 py-3 rounded-lg text-gray-700 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-green-400 transition duration-200 ease-in-out transform hover:scale-105"
                placeholder="Введите оклад (брутто)"
              />
              <motion.div
                className="absolute right-4 top-3 text-2xl"
                animate={{ rotate: grossSalary ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                💵
              </motion.div>
            </motion.div>
            <motion.button
              onClick={calculateSalary}
              className="w-full bg-[#4461F2] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#3651D2] transition-colors duration-200 ease-in-out transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Рассчитать зарплату
            </motion.button>
          </div>
          {result && (
            <motion.div
              className="mt-8 p-6 bg-blue-50 rounded-xl border-2 border-blue-200"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Результаты расчета:</h2>
              <div className="space-y-2">
                <motion.p initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
                  Оклад (брутто): <span className="font-semibold">{result.gross.toFixed(2)} тенге</span>
                </motion.p>
                <motion.p initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                  Пенсионные отчисления: <span className="font-semibold">{result.pension.toFixed(2)} тенге</span>
                </motion.p>
                <motion.p initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                  Социальный налог: <span className="font-semibold">{result.socialTax.toFixed(2)} тенге</span>
                </motion.p>
                <motion.p initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                  Подоходный налог: <span className="font-semibold">{result.incomeTax.toFixed(2)} тенге</span>
                </motion.p>
                <motion.p
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl font-bold text-green-700 mt-4"
                >
                  Зарплата на руки: {result.netSalary.toFixed(2)} тенге
                </motion.p>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

