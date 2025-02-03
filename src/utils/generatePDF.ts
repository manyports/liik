import jsPDF from "jspdf"
import "jspdf-autotable"

interface FinancialItem {
  name: string
  amount: number
  description?: string
}

export const generatePDF = (financialData: { category: string; items: FinancialItem[] }[]) => {
  const doc = new jsPDF()
  doc.addFont("https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5Q.ttf", "Roboto", "normal")
  doc.setFont("Roboto")

  doc.setLanguage("ru")

  doc.setFontSize(20)
  const title = "Финансовый отчет"
  const titleWidth = (doc.getStringUnitWidth(title) * doc.getFontSize()) / doc.internal.scaleFactor
  doc.text(title, (doc.internal.pageSize.width - titleWidth) / 2, 20)

  doc.setFontSize(12)
  const date = "за период 01.02.2025 - 31.02.2025"
  const dateWidth = (doc.getStringUnitWidth(date) * doc.getFontSize()) / doc.internal.scaleFactor
  doc.text(date, (doc.internal.pageSize.width - dateWidth) / 2, 30)

  let yPos = 50

  financialData.forEach((section) => {
    doc.setFontSize(14)
    doc.text(section.category, 20, yPos)
    yPos += 10

    doc.setFontSize(12)
    section.items.forEach((item) => {
      const amount = new Intl.NumberFormat("ru-RU").format(Math.abs(item.amount))
      const amountText = `${item.amount < 0 ? "−" : ""} ₸ ${amount}`

      doc.text(item.name, 20, yPos)

      const amountWidth = (doc.getStringUnitWidth(amountText) * doc.getFontSize()) / doc.internal.scaleFactor
      doc.text(amountText, doc.internal.pageSize.width - 20 - amountWidth, yPos)

      yPos += 7

      if (item.description) {
        doc.setTextColor(128)
        doc.setFontSize(10)
        doc.text(item.description, 25, yPos)
        doc.setTextColor(0)
        doc.setFontSize(12)
        yPos += 7
      }
    })

    yPos += 10
  })

  const totalAmount = financialData.reduce(
    (acc, section) => acc + section.items.reduce((sum, item) => sum + item.amount, 0),
    0,
  )

  doc.setDrawColor(200)
  doc.line(20, yPos - 5, doc.internal.pageSize.width - 20, yPos - 5)

  doc.setFontSize(14)
  doc.setFont("Roboto")
  const totalText = "Итого чистая прибыль"
  doc.text(totalText, 20, yPos + 5)

  const totalAmountText = `₸ ${new Intl.NumberFormat("ru-RU").format(totalAmount + 1000000)}`
  const totalWidth = (doc.getStringUnitWidth(totalAmountText) * doc.getFontSize()) / doc.internal.scaleFactor
  doc.text(totalAmountText, doc.internal.pageSize.width - 20 - totalWidth, yPos + 5)

  return doc
}

