import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqData = [
    {
      "value": "item-1",
      "question": "Какие бухгалтерские услуги вы предоставляете?",
      "answer": "Мы предлагаем ведение бухгалтерского учета, налоговые консультации, аудит, восстановление бухгалтерии, помощь в регистрации бизнеса и другие финансовые услуги."
    },
    {
      "value": "item-2",
      "question": "Работаете ли вы с ИП и ТОО?",
      "answer": "Да, мы оказываем бухгалтерское сопровождение для всех форм бизнеса, включая ИП и ТОО, с учетом особенностей их налогообложения и отчетности."
    },
    {
      "value": "item-3",
      "question": "Можно ли получить разовую консультацию?",
      "answer": "Да, мы предоставляем как комплексное сопровождение, так и разовые консультации по конкретным вопросам бухгалтерии и налогов."
    },
    {
      "value": "item-4",
      "question": "Как рассчитывается стоимость услуг?",
      "answer": "Стоимость зависит от объема работ, формы предприятия и периодичности предоставления услуг. Точную сумму можно узнать после бесплатной консультации."
    },
    {
      "value": "item-5",
      "question": "Как оплатить услуги?",
      "answer": "Оплата возможна банковским переводом, через платежные системы или наличными в нашем офисе. Предоставляем все необходимые финансовые документы."
    },
    {
      "value": "item-6",
      "question": "Можно ли заказать бухгалтерское сопровождение онлайн?",
      "answer": "Да, мы полностью реализовали дистанционное обслуживание. Все документы можно передавать электронно через защищенный канал связи."
    },
    {
      "value": "item-7",
      "question": "Какие курсы вы проводите?",
      "answer": "Мы проводим курсы по бухгалтерскому учету, налоговому законодательству, работе в 1С и другим профессиональным программам для бухгалтеров."
    },
    {
      "value": "item-8",
      "question": "Работаете ли вы с IT-компаниями и стартапами?",
      "answer": "Да, мы специализируемся на работе с IT-компаниями и стартапами, учитываем особенности их бизнес-моделей и международных операций."
    }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-20">
      <main className="container py-12">
        <h1 className="mb-8 text-3xl font-bold">Часто задаваемые вопросы (FAQ)</h1>
        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((item) => (
            <AccordionItem key={item.value} value={item.value} className="border rounded-lg px-6 py-2 shadow-sm">
              <AccordionTrigger className="hover:no-underline">
                <span className="text-[#4461F2] font-medium text-lg">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </main>
    </div>
  )
}