import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { AvatarBanner } from "./ui/avatar-banner"

export default function CoursesSection() {
  const courses = [
    {
      title: "Основы бухгалтерского учета",
      description: "Для начинающих бухгалтеров, предпринимателей, желающих вести учет самостоятельно",
      price: "от 30 000 тг",
      recordCount: 125,
      image:
        "/Rectangle 2749.png",
      features: [
        "Основы бухгалтерского учета и налоговой отчетности",
        "Работа с первичными документами",
        "Заполнение деклараций и расчет налогов",
      ],
    },
    {
      title: "Налоговое планирование и оптимизация",
      description: "Для бухгалтеров, финансовых директоров, владельцев бизнеса",
      price: "от 44 900 тг",
      recordCount: 78,
      image:
        "/Rectangle 2750.png",
      features: [
        "Актуальные изменения в налоговом законодательстве",
        "Оптимизация налоговой нагрузки",
        "Подготовка к налоговым проверкам",
      ],
    },
    {
      title: "Автоматизация бухгалтерии",
      description: "Для бухгалтеров, руководителей и финансовых специалистов",
      price: "от 68 500 тг",
      recordCount: 43,
      image:
        "/5721827_59908 1.png",
      features: [
        "Использование бухгалтерского ПО (1С, SAP, Kaspi Pay)",
        "Автоматизация документооборота",
        "Цифровые сервисы для учета и отчетности",
      ],
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-12 text-black">Наши курсы</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <Card key={index} className="flex flex-col h-full">
            <CardHeader className="p-0">
              <div className="relative w-full h-[200px]">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <div className="w-full mb-4">
                <AvatarBanner recordCount={course.recordCount} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-600">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <ul className="space-y-2">
                {course.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-600">
                    • {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <div className="flex items-center justify-between w-full">
                <span className="text-lg font-bold">{course.price}</span>
                <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
                  Подробнее
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

