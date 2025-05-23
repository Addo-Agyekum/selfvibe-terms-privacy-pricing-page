"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

export default function PrivacyPolicy() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  // Table of contents sections
  const sections = [
    { id: "who-we-are", title: "Who We Are" },
    { id: "information-we-collect", title: "Information We Collect" },
    { id: "how-we-use", title: "How We Use Your Information" },
    { id: "how-we-share", title: "How We Share Your Information" },
    { id: "mobile-money", title: "Mobile Money & Offline Transactions" },
    { id: "data-retention", title: "Data Retention" },
    { id: "security", title: "Security of Your Information" },
    { id: "privacy-rights", title: "Your Privacy Rights" },
    { id: "cookies", title: "Cookies & Tracking" },
    { id: "children", title: "Children's Privacy" },
    { id: "changes", title: "Changes to This Policy" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      // Show back to top button when scrolled down 300px
      if (window.scrollY > 300) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }

      // Update active section based on scroll position
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }))

      const currentSection = sectionElements
        .filter(({ element }) => element !== null)
        .find(({ element }) => {
          if (!element) return false
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="flex min-h-screen flex-col font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white py-4 shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link href="/" className="flex items-center">
            <img src="/images/logo.png" alt="Self Vibe" className="h-8" />
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <Link href="/" className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
            >
              Services
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link
              href="/join"
              className="rounded-full bg-purple-500 px-4 py-2 text-sm font-medium text-white hover:bg-purple-600 transition-colors"
            >
              Join today
            </Link>
            <button className="block md:hidden">
              <svg
                className="h-6 w-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-50 to-white py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">Privacy Policy</h1>
              <p className="text-md mb-8 text-gray-600 md:text-lg">
                Last Updated: 23rd May, 2025 | Effective Date: June, 2025
              </p>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute left-10 top-10 h-8 w-8 rounded-full bg-purple-100 opacity-70"></div>
          <div className="absolute bottom-10 right-10 h-10 w-10 rounded-full bg-purple-200 opacity-70"></div>
        </section>

        {/* Privacy Content with Table of Contents */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="lg:grid lg:grid-cols-4 lg:gap-8">
                {/* Table of Contents - Desktop */}
                <div className="hidden lg:block">
                  <div className="sticky top-24">
                    <h3 className="mb-4 text-lg font-bold text-gray-900">Table of Contents</h3>
                    <nav className="space-y-1">
                      {sections.map((section) => (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                            activeSection === section.id
                              ? "bg-purple-100 text-purple-700 font-medium"
                              : "text-gray-600 hover:bg-gray-50 hover:text-purple-600"
                          }`}
                        >
                          {section.title}
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-3">
                  <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm md:p-10 max-w-4xl">
                    <div className="prose prose-lg max-w-none">
                      <div className="mb-8 rounded-lg bg-blue-50 border border-blue-200 p-6">
                        <p className="text-base leading-relaxed text-gray-700 mb-0">
                          At Self Vibe, your privacy is important to us. This Privacy Policy explains how we collect,
                          use, share, and protect your personal information when you use our mobile app, website, and
                          related services across Africa. By using Self Vibe, you agree to the practices described in
                          this policy.
                        </p>
                      </div>

                      <h2 id="who-we-are" className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl leading-tight">
                        1. Who We Are
                      </h2>
                      <div className="mb-8 space-y-4">
                        <p className="text-base leading-relaxed text-gray-700">
                          Self Vibe is a platform that connects clients to beauty, wellness, and fitness professionals.
                          We operate across multiple African countries and prioritize both digital access and offline
                          inclusivity, respecting local privacy laws and cultural norms.
                        </p>
                      </div>

                      <h2
                        id="information-we-collect"
                        className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl leading-tight"
                      >
                        2. Information We Collect
                      </h2>
                      <div className="mb-8 space-y-6">
                        <p className="text-base leading-relaxed text-gray-700">
                          We may collect the following types of information:
                        </p>

                        <div className="space-y-6">
                          <div className="rounded-lg bg-gray-50 border border-gray-200 p-5">
                            <h3 className="mb-3 text-lg font-semibold text-gray-800">A. Personal Information</h3>
                            <ul className="space-y-2 list-disc pl-5 text-base leading-relaxed text-gray-700">
                              <li>Name, phone number, email address</li>
                              <li>Location (via GPS or manually entered)</li>
                              <li>Profile photo or business logo</li>
                              <li>Mobile money number (for transactions)</li>
                            </ul>
                          </div>

                          <div className="rounded-lg bg-gray-50 border border-gray-200 p-5">
                            <h3 className="mb-3 text-lg font-semibold text-gray-800">
                              B. Business Information (for service providers)
                            </h3>
                            <ul className="space-y-2 list-disc pl-5 text-base leading-relaxed text-gray-700">
                              <li>Business name, category, operating hours</li>
                              <li>Services offered and pricing</li>
                              <li>Technical staff accounts (for multi-user providers)</li>
                            </ul>
                          </div>

                          <div className="rounded-lg bg-gray-50 border border-gray-200 p-5">
                            <h3 className="mb-3 text-lg font-semibold text-gray-800">C. Usage Data</h3>
                            <ul className="space-y-2 list-disc pl-5 text-base leading-relaxed text-gray-700">
                              <li>Booking history, favorites, and cancellations</li>
                              <li>Search queries and viewed services</li>
                              <li>Feedback and reviews submitted</li>
                            </ul>
                          </div>

                          <div className="rounded-lg bg-gray-50 border border-gray-200 p-5">
                            <h3 className="mb-3 text-lg font-semibold text-gray-800">D. Device & Technical Info</h3>
                            <ul className="space-y-2 list-disc pl-5 text-base leading-relaxed text-gray-700">
                              <li>Device type and model</li>
                              <li>Mobile operating system and app version</li>
                              <li>IP address and general browser/app activity</li>
                            </ul>
                          </div>
                        </div>

                        <div className="rounded-lg border-2 border-blue-300 bg-blue-50 p-5">
                          <p className="flex items-start text-base leading-relaxed text-gray-800">
                            <span className="mr-3 text-xl flex-shrink-0">ℹ️</span>
                            <span>
                              <strong>Note:</strong> We do not collect sensitive personal information unless necessary
                              for a specific feature (e.g., ID verification for providers).
                            </span>
                          </p>
                        </div>
                      </div>

                      <h2 id="how-we-use" className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl leading-tight">
                        3. How We Use Your Information
                      </h2>
                      <div className="mb-8 space-y-4">
                        <p className="text-base leading-relaxed text-gray-700">We use your information to:</p>
                        <ul className="space-y-3 list-disc pl-6 text-base leading-relaxed text-gray-700">
                          <li>Facilitate bookings and service delivery</li>
                          <li>Match users with trusted service providers</li>
                          <li>Customize recommendations based on preferences and location</li>
                          <li>Communicate via SMS, email, or push notifications</li>
                          <li>Provide customer support</li>
                          <li>Improve platform functionality and user experience</li>
                          <li>Detect fraud and protect platform integrity</li>
                          <li>Comply with legal obligations</li>
                        </ul>
                      </div>

                      <h2 id="how-we-share" className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl leading-tight">
                        4. How We Share Your Information
                      </h2>
                      <div className="mb-8 space-y-4">
                        <div className="rounded-lg border-2 border-green-300 bg-green-50 p-5">
                          <p className="flex items-start text-base leading-relaxed text-gray-800">
                            <span className="mr-3 text-xl flex-shrink-0">🔒</span>
                            <span>
                              <strong>We do not sell your personal data.</strong> However, we may share your information
                              with:
                            </span>
                          </p>
                        </div>
                        <ul className="space-y-3 list-disc pl-6 text-base leading-relaxed text-gray-700">
                          <li>
                            <strong>Service providers you book:</strong> So they can deliver your service.
                          </li>
                          <li>
                            <strong>Platform partners</strong> (e.g., mobile money platforms, SMS gateways).
                          </li>
                          <li>
                            <strong>Government or legal authorities</strong> if required by law or in emergencies.
                          </li>
                          <li>
                            <strong>Internal teams and contractors</strong> for customer support or app operations.
                          </li>
                        </ul>
                      </div>

                      <h2 id="mobile-money" className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl leading-tight">
                        5. Mobile Money & Offline Transactions
                      </h2>
                      <div className="mb-8 space-y-4">
                        <ul className="space-y-3 list-disc pl-6 text-base leading-relaxed text-gray-700">
                          <li>
                            We store only basic transaction details, not your mobile money PIN or full account info.
                          </li>
                          <li>
                            Cash transactions are logged for your booking history but are not directly processed by Self
                            Vibe.
                          </li>
                        </ul>
                      </div>

                      <h2
                        id="data-retention"
                        className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl leading-tight"
                      >
                        6. Data Retention
                      </h2>
                      <div className="mb-8 space-y-4">
                        <p className="text-base leading-relaxed text-gray-700">
                          We retain your data only for as long as:
                        </p>
                        <ul className="space-y-3 list-disc pl-6 text-base leading-relaxed text-gray-700">
                          <li>Your account remains active, or</li>
                          <li>It's necessary to fulfill legal, financial, or customer service obligations.</li>
                        </ul>
                        <p className="text-base leading-relaxed text-gray-700">
                          You can request to delete your account and associated data at any time via{" "}
                          <a
                            href="mailto:hello@selfvibe.io"
                            className="text-purple-600 hover:text-purple-800 underline"
                          >
                            hello@selfvibe.io
                          </a>
                          .
                        </p>
                      </div>

                      <h2 id="security" className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl leading-tight">
                        7. Security of Your Information
                      </h2>
                      <div className="mb-8 space-y-4">
                        <ul className="space-y-3 list-disc pl-6 text-base leading-relaxed text-gray-700">
                          <li>
                            We use secure technologies (e.g., SSL encryption, secure cloud storage) to protect your
                            data.
                          </li>
                          <li>
                            Access to sensitive information is restricted to authorized staff and third-party processors
                            under contract.
                          </li>
                        </ul>
                      </div>

                      <h2
                        id="privacy-rights"
                        className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl leading-tight"
                      >
                        8. Your Privacy Rights
                      </h2>
                      <div className="mb-8 space-y-4">
                        <p className="text-base leading-relaxed text-gray-700">
                          Depending on your country of use (e.g., Ghana, Nigeria, Kenya, South Africa), you may have the
                          right to:
                        </p>
                        <ul className="space-y-3 list-disc pl-6 text-base leading-relaxed text-gray-700">
                          <li>Access the personal data we hold about you</li>
                          <li>Correct inaccurate information</li>
                          <li>Request deletion of your data</li>
                          <li>Withdraw consent for marketing messages</li>
                        </ul>
                        <p className="text-base leading-relaxed text-gray-700">
                          To exercise your rights, contact us at{" "}
                          <a
                            href="mailto:hello@selfvibe.io"
                            className="text-purple-600 hover:text-purple-800 underline"
                          >
                            hello@selfvibe.io
                          </a>
                          .
                        </p>
                      </div>

                      <h2 id="cookies" className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl leading-tight">
                        9. Cookies & Tracking
                      </h2>
                      <div className="mb-8 space-y-4">
                        <p className="text-base leading-relaxed text-gray-700">
                          We may use cookies or device identifiers to:
                        </p>
                        <ul className="space-y-3 list-disc pl-6 text-base leading-relaxed text-gray-700">
                          <li>Keep you logged in</li>
                          <li>Remember your preferences</li>
                          <li>Understand how you use the app for improvement</li>
                        </ul>
                        <p className="text-base leading-relaxed text-gray-700">
                          You can clear or block these through your device or browser settings.
                        </p>
                      </div>

                      <h2 id="children" className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl leading-tight">
                        10. Children's Privacy
                      </h2>
                      <div className="mb-8 space-y-4">
                        <p className="text-base leading-relaxed text-gray-700">
                          Self Vibe is not intended for users under the age of 13. If we discover a minor has provided
                          personal data without guardian consent, we will delete it.
                        </p>
                      </div>

                      <h2 id="changes" className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl leading-tight">
                        11. Changes to This Policy
                      </h2>
                      <div className="mb-8 space-y-4">
                        <p className="text-base leading-relaxed text-gray-700">
                          We may update this Privacy Policy to reflect changes in the law or platform features. We will
                          notify you of major changes via the app or email.
                        </p>
                      </div>

                      {/* Contact Section */}
                      <div className="mt-12 rounded-lg bg-purple-50 border border-purple-200 p-6">
                        <h3 className="mb-4 text-xl font-bold text-purple-800">Questions About Your Privacy?</h3>
                        <p className="mb-4 text-base leading-relaxed text-gray-700">
                          If you have any questions about this Privacy Policy or how we handle your data, please contact
                          us:
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <span className="mr-3 text-lg">📧</span>
                            <a
                              href="mailto:hello@selfvibe.io"
                              className="text-purple-600 hover:text-purple-800 underline"
                            >
                              hello@selfvibe.io
                            </a>
                          </div>
                          <div className="flex items-center">
                            <span className="mr-3 text-lg">📞</span>
                            <a href="tel:+233509438082" className="text-purple-600 hover:text-purple-800 underline">
                              +233509438082
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 text-white shadow-lg transition-all hover:bg-purple-600"
          aria-label="Back to top"
        >
          <ChevronUp size={20} />
        </button>
      )}

      {/* Footer */}
      <footer className="border-t bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <Link href="/" className="mb-4 flex items-center">
                <img src="/images/logo.png" alt="Self Vibe" className="h-8" />
              </Link>
              <p className="mb-4 text-sm text-gray-600">
                Africa's #1 Beauty & Wellness Platform helping professionals and businesses thrive.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/terms" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-600">
                  <svg
                    className="mr-2 h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a
</cut_off_point>
2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  hello@selfvibe.io
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg
                    className="mr-2 h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  +233 50 943 8082
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-center text-sm text-gray-500">© 2025 Self Vibe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
