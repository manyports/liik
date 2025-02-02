"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function FinesCalculatorPage() {
  const [debt, setDebt] = useState("")
  const [days, setDays] = useState("")
  const [result, setResult] = useState(null)

  const calculateFine = () => {
    const debtAmount = Number.parseFloat(debt)
    const overdueDays = Number.parseInt(days)
    const fineRate = 0.00025 
    const fine = debtAmount * fineRate * overdueDays

    setResult(fine)
  }

  return (
    <div className="min-h-screen bg-white  py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        <div className="p-8 sm:p-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Калькулятор штрафов</h1>
          <p className="text-lg text-gray-600 mb-8">
            Определите сумму возможных штрафов и пеней за несвоевременную уплату налогов.
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
                value={debt}
                onChange={(e) => setDebt(e.target.value)}
                className="w-full px-4 py-3 rounded-lg text-gray-700 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-red-400 transition duration-200 ease-in-out transform hover:scale-105"
                placeholder="Сумма задолженности"
              />
              <motion.div
                className="absolute right-4 top-3 text-2xl"
                animate={{ rotate: debt ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                💸
              </motion.div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <input
                type="number"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                className="w-full px-4 py-3 rounded-lg text-gray-700 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-red-400 transition duration-200 ease-in-out transform hover:scale-105"
                placeholder="Количество дней просрочки"
              />
              <motion.div
                className="absolute right-4 top-3 text-2xl"
                animate={{ rotate: days ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                📅
              </motion.div>
            </motion.div>
            <motion.button
              onClick={calculateFine}
              className="w-full bg-[#4461F2] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#3651D2] transition-colors duration-200 ease-in-out transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Рассчитать штраф
            </motion.button>
          </div>
          {result !== null && (
            <motion.div
              className="mt-8 p-6 bg-red-50 rounded-xl border-2 border-red-200"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-semibold text-red-800 mb-2">Результат рас чета:</h2>
              <p className="text-xl text-red-700">Сумма штрафа: {result.toFixed(2)} тенге</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

