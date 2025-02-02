"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navigationLinks = [
  { href: "#", label: "Услуги" },
  { href: "/chat", label: "Бизнес-аналитик" },
  { href: "/calculators", label: "Калькуляторы" },
  { href: "/faq", label: "FAQ" },
]

export default function Header() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="border-b relative z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-[#4169E1] text-2xl font-bold">
          Л&К
        </Link>

        <nav className="hidden md:flex space-x-8">
          {navigationLinks.map((link) => (
            <Link key={link.label} href={link.href} className="text-black hover:text-gray-900">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button className="bg-[#4461F2] text-white hover:bg-[#4461F2]/90" onClick={() => router.push("/login")}>
            Войти/Регистрация
          </Button>
        </div>

        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden"
          >
            <nav className="flex flex-col p-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-black hover:text-gray-900 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                className="bg-[#4461F2] text-white hover:bg-[#4461F2]/90 mt-4"
                onClick={() => {
                  router.push("/login")
                  setIsMenuOpen(false)
                }}
              >
                Войти/Регистрация
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}