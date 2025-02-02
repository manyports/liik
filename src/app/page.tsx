"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import CoursesSection from "../components/courses-section"

const TypeAnimation = dynamic(() => import("react-type-animation").then((mod) => mod.TypeAnimation), {
  ssr: false,
  loading: () => <span>НАДЕЖНО...</span>,
})

export default function Page() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-6xl font-bold mb-16 text-center text-black">
          {mounted ? (
            <TypeAnimation sequence={["НАДЕЖНО...", 2000, "ГИБКО...", 2000]} repeat={Number.POSITIVE_INFINITY} />
          ) : (
            "НАДЕЖНО..."
          )}
        </h1>

        <div className="relative bg-white rounded-3xl shadow-lg p-8 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-black text-lg">
                «Ли и К» — это 30 лет опыта в бухгалтерском учете, налоговом консультировании и аудите. Мы помогаем
                бизнесу работать прозрачно, эффективно и без рисков.
              </p>
              <button className="bg-[#4169E1] text-white px-8 py-3 rounded-lg hover:bg-[#3154b3] transition-colors">
                Получить бесплатную консультацию
              </button>
            </div>
            <div className="relative h-[300px]">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Business illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-black">Услуги компании</h2>
        <p className="text-black mb-12 max-w-4xl">
          Компания «Ли и К» — ваш надежный партнер в бухгалтерском учете, налоговом консультировании и аудите. Мы
          помогаем предпринимателям, малому и среднему бизнесу вести финансовую отчетность без ошибок и рисков.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow">
            <h3 className="text-xl font-semibold mb-6 text-black">📊 Бухгалтерское сопровождение</h3>
            <ul className="space-y-3 text-[#4169E1]">
              <li>Ведение бухгалтерского учета</li>
              <li>Составление и сдача налоговой отчетности</li>
              <li>Расчет зарплаты и кадровый учет</li>
              <li>Восстановление бухгалтерии</li>
              <li>Оптимизация налогообложения</li>
              <li>Управленческий учет и финансовый анализ</li>
            </ul>
          </div>

          <div className="bg-[#4169E1] text-white p-8 rounded-3xl">
            <h3 className="text-xl font-semibold mb-6">📋 Аудит и налоговые консультации</h3>
            <ul className="space-y-3">
              <li>Аудит финансовой отчетности</li>
              <li>Проверка налоговых деклараций</li>
              <li>Анализ налоговых рисков</li>
              <li>Консультации по изменению налогового законодательства</li>
              <li>Подготовка к налоговым проверкам</li>
            </ul>
          </div>

          <div className="bg-[#4169E1] text-white p-8 rounded-3xl">
            <h3 className="text-xl font-semibold mb-6">⚖️ Юридические услуги для бизнеса</h3>
            <ul className="space-y-3">
              <li>Регистрация и ликвидация бизнеса (ИП, ТОО)</li>
              <li>Разработка и проверка договоров</li>
              <li>Юридические консультации по налогам и трудовому праву</li>
              <li>Представительство в налоговых органах</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow text-black">
            <h3 className="text-xl font-semibold mb-6">🎓 Курсы и обучение бухгалтеров</h3>
            <ul className="space-y-3 text-[#4169E1]">
              <li>Изменения в налоговом законодательстве</li>
              <li>Автоматизация бухгалтерского учета</li>
              <li>Финансовый анализ и планирование</li>
              <li>Практикумы по заполнению отчетности</li>
              <li>Онлайн и офлайн-формат</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-4 text-black">Тарифные пакеты</h2>
        <p className="text-black mb-12 max-w-4xl">
          Мы предлагаем гибкие тарифные пакеты бухгалтерских услуг, подходящие для бизнеса любого масштаба. Выберите
          оптимальный вариант для вашей компании и сосредоточьтесь на росте, а мы позаботимся о вашей бухгалтерии!
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-lg flex flex-col h-full">
            <div className="flex-grow">
              <h3 className="text-[#4169E1] font-medium mb-2">Пакет «Старт»</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-black">от 50 000 тг/мес</span>
                <p className="text-sm text-gray-600">для предпринимателей, самозанятых, малого бизнеса</p>
              </div>
              <ul className="space-y-4 mb-8 text-black">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-[#4169E1] mt-1 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ведение бухгалтерского учета
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-[#4169E1] mt-1 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Составление и сдача налоговой отчетности
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-[#4169E1] mt-1 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Консультации по налогообложению
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-[#4169E1] mt-1 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Расчет заработной платы (5 сотрудников)
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-[#4169E1] mt-1 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Поддержка по электронной почте
                </li>
              </ul>
            </div>
            <button className="w-full bg-[#4169E1] text-white py-3 rounded-lg hover:bg-[#3154b3] transition-colors mt-auto">
              Выбрать план
            </button>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg flex flex-col h-full">
            <div className="flex-grow">
              <h3 className="text-[#4169E1] font-medium mb-2">Пакет «Бизнес»</h3>
              <div className="mb-4">
                <span className="text-3xl font-black">от 100 000 тг/мес</span>
                <p className="text-sm text-gray-600">ТОО, средний бизнес, торговля и услуги</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-[#4169E1] mt-1 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ведение бухгалтерского учета и налоговый контроль
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-[#4169E1] mt-1 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Подготовка и сдача всех видов отчетности
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-[#4169E1] mt-1 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Консультации по налогам и оптимизации (2 раза в месяц)
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-[#4169E1] mt-1 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Расчет заработной платы (20 сотрудников)
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-[#4169E1] mt-1 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ведение кадрового учета
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-[#4169E1] mt-1 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Персональный менеджер
                </li>
              </ul>
            </div>
            <button className="w-full bg-[#4169E1] text-white py-3 rounded-lg hover:bg-[#3154b3] transition-colors mt-auto">
              Выбрать план
            </button>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg flex flex-col h-full">
            <div className="flex-grow">
              <h3 className="text-[#4169E1] font-medium mb-2">Пакет «Премиум»</h3>
              <div className="mb-4">
                <span className="text-3xl font-black text-black">от 200 000 тг/мес</span>
                <p className="text-sm text-gray-600">крупные предприятия, холдинги, инвесторы</p>
              </div>
              <ul className="space-y-4 mb-8 text-black">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-[#4169E1] mt-1 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Полное бухгалтерское сопровождение
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-[#4169E1] mt-1 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Оптимизация налоговой нагрузки
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-[#4169E1] mt-1 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Аудит финансовой отчетности
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-[#4169E1] mt-1 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Индивидуальные налоговые стратегии
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-[#4169E1] mt-1 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Расчет заработной платы (неограниченно)
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-[#4169E1] mt-1 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Представительство в налоговых органах
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-[#4169E1] mt-1 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Личный финансовый консультант
                </li>
              </ul>
            </div>
            <button className="w-full bg-[#4169E1] text-white py-3 rounded-lg hover:bg-[#3154b3] transition-colors mt-auto">
              Выбрать план
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-4 text-black">Обучение для бухгалтеров</h2>
        <p className="text-black mb-12 max-w-4xl">
          Мы предлагаем практические курсы и тренинги для бухгалтеров, предпринимателей и финансовых специалистов. Наши
          программы помогут вам освоить современные инструменты бухгалтерского учета, налогового планирования и
          автоматизации процессов.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#4169E1] rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">Персональный мониторинг</h3>
            <p className="text-gray-600">Консультации, ориентированные на ваши потребности</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#82C43C] rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">Наставник 24/7</h3>
            <p className="text-gray-600">Поддержка в любое время суток, когда это нужно</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#E84E8A] rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">Видео-уроки</h3>
            <p className="text-gray-600">Доступ к обучающим материалам в удобном формате</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#F76B56] rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">Доступные цены</h3>
            <p className="text-gray-600">Качественное обучение по доступной стоимости</p>
          </div>
        </div>
      </section>

      <CoursesSection />

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-black">Отзывы наших клиентов</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-lg flex flex-col min-h-[300px]">
            <blockquote className="flex-grow mb-6">
              Благодаря «Ли и К» наша компания избавилась от проблем с бухгалтерией и налогами. Они всё чётко ведут,
              объясняют сложное простым языком, а я могу спокойно развивать стартап.
            </blockquote>
            <div className="mt-auto">
              <div className="font-bold">Ерасыл</div>
              <div className="text-[#4169E1]">Основатель "Math12"</div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg flex flex-col min-h-[300px]">
            <blockquote className="flex-grow mb-6">
              Команда «Ли и К» взяла на себя всю бухгалтерию и налоги, что позволило мне сосредоточиться на развитии
              бренда Jaryq. Работают легко, надежно и с пониманием специфики бизнеса. Отличный партнёр для креативных
              проектов
            </blockquote>
            <div className="mt-auto">
              <div className="font-bold">Алимжан</div>
              <div className="text-[#4169E1]">Основатель "Jaryq"</div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg flex flex-col min-h-[300px]">
            <blockquote className="flex-grow mb-6">
              «Ли и К» – надёжный партнёр, который помогает нам держать финансы в порядке. Их экспертиза в бухгалтерии и
              налогах даёт уверенность в каждом шаге, позволяя сосредоточиться на развитии IT-сообщества OnePorted.
            </blockquote>
            <div className="mt-auto">
              <div className="font-bold">Канапия</div>
              <div className="text-[#4169E1]">CEO "OnePorted"</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}