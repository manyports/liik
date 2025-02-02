"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function TaxCalculatorPage() {
  const [income, setIncome] = useState("")
  const [taxType, setTaxType] = useState("ИП")
  const [result, setResult] = useState(null)

  const calculateTax = () => {
    const taxRate = taxType === "ИП" ? 0.1 : 0.2
    const taxAmount = Number.parseFloat(income) * taxRate
    setResult(taxAmount)
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
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Налоговый калькулятор</h1>
          <p className="text-lg text-gray-600 mb-8">
            Определите размер налоговых выплат в зависимости от вашего дохода и системы налогообложения.
          </p>
          <div className="space-y-6">
            <motion.div
              className="relative"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <input
                type="number"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className="w-full px-4 py-3 rounded-lg text-gray-700 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out transform hover:scale-105"
                placeholder="Введите ваш доход"
              />
              <motion.div
                className="absolute right-4 top-3 text-2xl"
                animate={{ rotate: income ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                💰
              </motion.div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <select
                value={taxType}
                onChange={(e) => setTaxType(e.target.value)}
                className="w-full px-4 py-3 rounded-lg text-gray-700 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out transform hover:scale-105"
              >
                <option value="ИП">ИП</option>
                <option value="ТОО">ТОО</option>
              </select>
              <motion.div
                className="absolute right-4 top-3 text-2xl"
                animate={{ rotateY: taxType === "ИП" ? 0 : 180 }}
                transition={{ duration: 0.5 }}
              >
                🏢
              </motion.div>
            </motion.div>
            <motion.button
              onClick={calculateTax}
              className="w-full bg-[#4461F2] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#3651D2] transition-colors duration-200 ease-in-out transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Рассчитать налог
            </motion.button>
          </div>
          {result !== null && (
            <motion.div
              className="mt-8 p-6 bg-green-50 rounded-xl border-2 border-green-200"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-semibold text-green-800 mb-2">Результат расчета:</h2>
              <p className="text-xl text-green-700">Сумма налога: {result.toFixed(2)} тенге</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

