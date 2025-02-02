"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function MRPCalculatorPage() {
  const [mrpCount, setMrpCount] = useState("")
  const [year, setYear] = useState("2025")
  const [result, setResult] = useState(null)

  const mrpValues = {
    "2025": 3932,
    "2024": 3692,
    "2023": 3450,
  }

  const calculateMRP = () => {
    const count = Number.parseFloat(mrpCount)
    const mrpValue = mrpValues[year]
    const total = count * mrpValue

    setResult(total)
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
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Калькулятор МРП</h1>
          <p className="text-lg text-gray-600 mb-8">
            Введите количество МРП, и система автоматически рассчитает итоговую сумму в тенге.
          </p>
          <div className="text-[#4D4D4D] text-sm mb-6">Актуальный МРП на 2025 год: 3 692 тенге</div>
          <div className="space-y-6">
            <motion.div
              className="relative"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <input
                type="number"
                value={mrpCount}
                onChange={(e) => setMrpCount(e.target.value)}
                className="w-full px-4 py-3 rounded-lg text-gray-700 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-purple-400 transition duration-200 ease-in-out transform hover:scale-105"
                placeholder="Количество МРП"
              />
              <motion.div
                className="absolute right-4 top-3 text-2xl"
                animate={{ rotate: mrpCount ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                🧮
              </motion.div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full px-4 py-3 rounded-lg text-gray-700 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-purple-400 transition duration-200 ease-in-out transform hover:scale-105"
              >
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
              </select>
              <motion.div
                className="absolute right-4 top-3 text-2xl"
                animate={{ rotateY: year === "2025" ? 0 : 180 }}
                transition={{ duration: 0.5 }}
              >
                📅
              </motion.div>
            </motion.div>
            <motion.button
              onClick={calculateMRP}
              className="w-full bg-[#4461F2] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#3651D2] transition-colors duration-200 ease-in-out transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Рассчитать МРП
            </motion.button>
          </div>
          {result !== null && (
            <motion.div
              className="mt-8 p-6 bg-purple-50 rounded-xl border-2 border-purple-200"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-semibold text-purple-800 mb-2">Результат расчета:</h2>
              <p className="text-xl text-purple-700">Итоговая сумма: {result.toFixed(2)} тенге</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

