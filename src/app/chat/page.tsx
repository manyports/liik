"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

interface Message {
  id: string
  content: string
  role: "user" | "assistant"
}

interface Suggestion {
  title: string
  subtitle: string
}

const suggestions = [
  { title: "Как рассчитать", subtitle: "амортизацию основных средств?" },
  { title: "Объясни", subtitle: "принцип двойной записи" },
  { title: "Какие изменения", subtitle: "в налоговом учете в 2025 году?" },
  { title: "Как правильно", subtitle: "оформить командировочные расходы?" },
]

export default function AccountantAIChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(true)
  const [isTyping, setIsTyping] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const welcomeMessage: Message = {
      id: "welcome",
      content: "Здравствуйте! Я ваш AI-ассистент по бухгалтерскому учету. Чем могу помочь?",
      role: "assistant",
    }
    setMessages([welcomeMessage])
  }, [])

  const handleSend = async (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: "user",
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setShowSuggestions(false)
    setIsTyping(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: content }),
      })

      if (!response.ok) throw new Error('API request failed')
      
      const { text } = await response.json()

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: text,
        role: "assistant",
      }
      
      setMessages((prev) => [...prev, aiMessage])
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Извините, произошла ошибка при обработке запроса",
        role: "assistant",
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className="min-h-screen bg-white p-4 flex flex-col max-w-3xl mx-auto">
      <motion.h1
        className="text-3xl font-bold text-center mb-8 text-[#4169E1]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        AI-ассистент бухгалтера
      </motion.h1>

      <div ref={chatContainerRef} className="flex-1 space-y-4 mb-6 overflow-y-auto">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className={`p-4 ${message.role === "user" ? "bg-[#4169E1] text-white" : "bg-gray-100"}`}>
                <p>{message.content}</p>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
        {isTyping && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#4169E1] flex items-center">
            AI печатает
            <motion.span
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
              className="ml-1"
            >
              .
            </motion.span>
            <motion.span
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, delay: 0.1 }}
              className="ml-1"
            >
              .
            </motion.span>
            <motion.span
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
              className="ml-1"
            >
              .
            </motion.span>
          </motion.div>
        )}
      </div>

      <div className="mt-auto">
        <div className="relative">
          <motion.div
            className="flex items-center gap-2 p-2 rounded-lg border border-[#4169E1] bg-white"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend(inputValue)}
              placeholder="Задайте вопрос по бухгалтерии..."
              className="flex-1 bg-transparent border-none focus:outline-none text-black px-2"
            />
            <Button
              variant="ghost"
              size="icon"
              className="text-[#4169E1] hover:bg-[#4169E1] hover:text-white transition-colors"
              onClick={() => handleSend(inputValue)}
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </motion.div>

          <AnimatePresence>
            {showSuggestions && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-full mb-2 w-full space-y-2"
              >
                {suggestions.map((suggestion, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0, transition: { delay: index * 0.1 } }}
                    onClick={() => handleSend(`${suggestion.title} ${suggestion.subtitle}`)}
                    className="w-full text-left p-3 rounded-lg border border-[#4169E1] bg-white hover:bg-[#4169E1] hover:text-white transition-colors"
                  >
                    <span className="font-medium">{suggestion.title}</span> <span>{suggestion.subtitle}</span>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          className="text-center mt-4 text-sm text-[#4169E1]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          AI-ассистент бухгалтера на базе Next.js и Google Gemini
        </motion.div>
      </div>
    </div>
  )
}