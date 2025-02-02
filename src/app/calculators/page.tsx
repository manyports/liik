"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

const calculators = [
  {
    title: "Налоговый калькулятор",
    description: "Определите размер налоговых выплат в зависимости от вашего дохода и системы налогообложения.",
    items: [
      "Форма налогообложения (ИП, ТОО, СНР, ОСНО)",
      "Доход за период",
      "Допустимые налоговые вычеты",
      "Применяемые ставки НДС, КПН, ИПН",
    ],
    link: "/calculators/tax",
    buttonText: "Рассчитать налоги",
    icon: "💼",
  },
  {
    title: "Заработная плата",
    description: "Рассчитайте зарплату сотрудников с учетом налогов и удержаний.",
    items: [
      "Оклад сотрудника (брутто)",
      "Ставка подоходного налога (ИПН)",
      "Обязательные пенсионные и социальные отчисления",
      "Взносы на ОСМС",
    ],
    link: "/calculators/salary",
    buttonText: "Рассчитать зарплату",
    icon: "💰",
  },
  {
    title: "Калькулятор штрафов",
    description: "Определите сумму возможных штрафов и пеней за несвоевременную уплату налогов",
    items: ["Сумма задолженности", "Количество дней просрочки", "Вид налогового платежа"],
    link: "/calculators/fines",
    buttonText: "Рассчитать штрафы",
    icon: "⚖️",
  },
  {
    title: "Калькулятор МРП",
    description: "Введите количество МРП, и система автоматически рассчитает итоговую сумму в тенге.",
    items: ["Количество МРП", "Год (выбор ставки МРП за нужный период)"],
    link: "/calculators/mrp",
    buttonText: "Рассчитать МРП",
    icon: "🧮",
  },
]

export default function CalculatorsPage() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className="px-24 py-16 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <h1 className="text-[40px] font-bold mb-3 text-center text-gray-800">Онлайн-калькуляторы</h1>
      <p className="text-[#1A1A1A] text-xl mb-16 max-w-[800px] leading-7 text-center mx-auto">
        Наши калькуляторы помогут вам рассчитать стоимость бухгалтерских услуг, налоговую нагрузку и другие финансовые
        показатели.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {calculators.map((calc, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <div className="absolute top-4 right-4 text-4xl">{calc.icon}</div>
            <h2 className="text-[#4461F2] text-2xl font-semibold mb-3">{calc.title}</h2>
            {calc.title === "Калькулятор МРП" && (
              <div className="text-[#4D4D4D] text-sm mb-3">Актуальный МРП на 2025 год: 3 692 тенге</div>
            )}
            <p className="text-[#1A1A1A] font-medium mb-5 leading-snug">{calc.description}</p>
            <ul className="space-y-[10px] text-[#4D4D4D] text-[15px] mb-6">
              {calc.items.map((item, itemIndex) => (
                <motion.li
                  key={itemIndex}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0.7, x: 0 }}
                  transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                >
                  <span className="mr-2.5 text-[#4461F2]">•</span>
                  {item}
                </motion.li>
              ))}
            </ul>
            <Link href={calc.link} className="inline-block w-full">
              <motion.button
                className="w-full bg-[#4461F2] text-white font-medium py-3 px-6 rounded-lg hover:bg-[#3651D2] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {calc.buttonText}
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

