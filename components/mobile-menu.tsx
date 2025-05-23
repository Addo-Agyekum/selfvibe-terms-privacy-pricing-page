"use client"

import { useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="flex items-center text-gray-600 focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex h-full flex-col overflow-y-auto">
            <div className="flex items-center justify-between border-b px-4 py-4">
              <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                <img src="/images/logo.png" alt="Self Vibe" className="h-8" />
              </Link>
              <button
                onClick={toggleMenu}
                className="rounded-full p-2 text-gray-600 hover:bg-gray-100"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex-1 px-4 py-6">
              <ul className="space-y-6">
                <li>
                  <Link
                    href="/"
                    className="block text-lg font-medium text-gray-900 hover:text-purple-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="block text-lg font-medium text-gray-900 hover:text-purple-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="block text-lg font-medium text-gray-900 hover:text-purple-600"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block text-lg font-medium text-gray-900 hover:text-purple-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="border-t px-4 py-6">
              <Link
                href="/join"
                className="block w-full rounded-full bg-purple-500 px-4 py-3 text-center font-medium text-white hover:bg-purple-600"
                onClick={() => setIsOpen(false)}
              >
                Join today
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
