"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'

const navigationLinks = [
    { href: "#", label: "Услуги" },
    { href: "#", label: "Бизнес-аналитик" },
    { href: "/calculators", label: "Калькуляторы" },
    { href: "/faq", label: "FAQ" },
];

export default function Header() {
    const router = useRouter();
    
    return (
        <header className="border-b">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-[#4169E1] text-2xl font-bold">
                    Л&К
                </Link>

                <nav className="hidden md:flex space-x-8">
                    {navigationLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-black hover:text-gray-900"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <Button className="bg-[#4461F2] text-white hover:bg-[#4461F2]/90" onClick={() => router.push('/login')}>
                    Войти/Регистрация
                </Button>
            </div>
        </header>
    );
}