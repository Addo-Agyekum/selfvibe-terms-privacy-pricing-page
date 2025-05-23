"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

export default function TermsOfService() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  // Table of contents sections
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "who-can-use", title: "Who Can Use Self Vibe" },
    { id: "creating-account", title: "Creating an Account" },
    { id: "services", title: "Services on the Platform" },
    { id: "payments", title: "Payments & Subscription Plans" },
    { id: "cancellations", title: "Cancellations & No-Shows" },
    { id: "responsibilities", title: "Your Responsibilities" },
    { id: "quality", title: "Service Quality & Trust" },
    { id: "intellectual-property", title: "Intellectual Property" },
    { id: "user-content", title: "User-Generated Content" },
    { id: "liability", title: "Limitations of Liability" },
    { id: "privacy", title: "Data Privacy" },
    { id: "dispute", title: "Dispute Resolution" },
    { id: "termination", title: "Termination & Suspension" },
    { id: "changes", title: "Changes to Terms" },
    { id: "governing-law", title: "Governing Law" },
    { id: "contact", title: "Contact Us" },
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
              <h1 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">Terms of Service</h1>
              <p className="text-md mb-8 text-gray-600 md:text-lg">
                Last Updated: 23rd May, 2025 | Effective Date: June, 2025
              </p>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute left-10 top-10 h-8 w-8 rounded-full bg-purple-100 opacity-70"></div>
          <div className="absolute bottom-10 right-10 h-10 w-10 rounded-full bg-purple-200 opacity-70"></div>
        </section>

        {/* Terms Content with Table of Contents */}
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
                          Welcome to Self Vibe. These Terms of Service ("Terms") govern your access to and use of the
                          Self Vibe mobile application, website, and all associated services (collectively referred to
                          as the "Platform"). By using Self Vibe, you agree to comply with and be legally bound by these
                          Terms.
                        </p>
                      </div>

                      <h2 id="introduction" className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl leading-tight">
                        1. Introduction
                      </h2>
                      <div className="mb-8 space-y-4">
                        <p className="text-base leading-relaxed text-gray-700">
                          Self Vibe is Africa's leading digital platform for connecting individuals to verified beauty
                          and wellness service providers. We support both online and offline bookings, and we empower
                          local businesses with tools to manage and grow their services.
                        </p>
                        <p className="text-base leading-relaxed text-gray-700">
                          We operate with respect for local cultures, informal service structures, and mobile-first
                          users.
                        </p>
                      </div>

                      <h2 id="who-can-use" className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl leading-tight">
                        2. Who Can Use Self Vibe
                      </h2>
                      <div className="mb-8 space-y-4">
                        <p className="text-base leading-relaxed text-gray-700">To use Self Vibe, you must:</p>
                        <ul className="space-y-3 list-disc pl-6 text-base leading-relaxed text-gray-700">
                          <li>Be at least 18 years old (or have permission from a parent/guardian).</li>
                          <li>Register with accurate, truthful personal or business information.</li>
                          <li>Agree to operate within local laws and customary norms.</li>
                        </ul>
                      </div>

                      <h2
                        id="creating-account"
                        className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl leading-tight"
                      >
                        3. Creating an Account
                      </h2>
                      <div className="mb-8">
                        <ul className="space-y-3 list-disc pl-6 text-base leading-relaxed text-gray-700">
                          <li>To access most features, you must register with your phone number and/or email.</li>
                          <li>
                            We may request your location, photo, and service or ID verification to ensure a trusted
                            experience for all.
                          </li>
                          <li>You are responsible for keeping your login details confidential.</li>
                        </ul>
                      </div>

                      <h2 id="services" className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl leading-tight">
                        4. Services on the Platform
                      </h2>
                      <div className="mb-8 space-y-6">
                        <div>
                          <h3 className="mb-3 text-lg font-semibold text-gray-800">For Clients:</h3>
                          <ul className="space-y-3 list-disc pl-6 text-base leading-relaxed text-gray-700">
                            <li>
                              Book services from local providers (e.g., barbers, spas, fitness trainers, stylists).
                            </li>
                            <li>
                              Pay via cash, mobile money (e.g., MTN, AirtelTigo, M-Pesa), or other supported methods.
                            </li>
                            <li>Rate your experience after the appointment to help maintain quality.</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="mb-3 text-lg font-semibold text-gray-800">For Service Providers:</h3>
                          <ul className="space-y-3 list-disc pl-6 text-base leading-relaxed text-gray-700">
                            <li>Create a profile, list services, and accept client bookings.</li>
                            <li>Manage bookings, pricing, and service availability using our tools.</li>
                            <li>Use the platform in a way that respects clients, their time, and dignity.</li>
                          </ul>
                        </div>
                      </div>

                      <h2 id="payments" className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl leading-tight">
                        5. Payments & Subscription Plans
                      </h2>
                      <div className="mb-8 space-y-6">
                        <div>
                          <h3 className="mb-3 text-lg font-semibold text-gray-800">For Clients:</h3>
                          <ul className="space-y-3 list-disc pl-6 text-base leading-relaxed text-gray-700">
                            <li>
                              Booking a service may require cash, mobile money, or other supported offline and online
                              payment methods.
                            </li>
                            <li>Self Vibe does not charge clients any booking fees for using the platform.</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="mb-4 text-lg font-semibold text-gray-800">For Service Providers:</h3>
                          <p className="mb-4 text-base leading-relaxed text-gray-700">
                            Self Vibe operates a subscription-based model for all service providers (e.g., salons,
                            barbers, spas, fitness coaches). You may choose from the following plans:
                          </p>

                          <div className="space-y-4">
                            <div className="rounded-lg bg-purple-50 border border-purple-200 p-5">
                              <h4 className="mb-3 text-lg font-semibold text-purple-800">Starter Plan (Free):</h4>
                              <ul className="space-y-2 list-disc pl-5 text-base leading-relaxed text-gray-700">
                                <li>Ideal for individuals or freelancers just starting out.</li>
                                <li>Includes a basic profile, standard listings, and booking tools.</li>
                                <li>No monthly fee required.</li>
                              </ul>
                            </div>

                            <div className="rounded-lg bg-purple-50 border border-purple-200 p-5">
                              <h4 className="mb-3 text-lg font-semibold text-purple-800">
                                Professional Plan (₵150–₵200/month):
                              </h4>
                              <ul className="space-y-2 list-disc pl-5 text-base leading-relaxed text-gray-700">
                                <li>Designed for growing businesses with teams or technical staff.</li>
                                <li>
                                  Price varies based on features like multiple staff accounts or advanced booking
                                  analytics.
                                </li>
                                <li>Includes access to advanced tools, premium exposure, and customer insights.</li>
                              </ul>
                            </div>

                            <div className="rounded-lg bg-purple-50 border border-purple-200 p-5">
                              <h4 className="mb-3 text-lg font-semibold text-purple-800">
                                Enterprise Plan (Custom Pricing):
                              </h4>
                              <ul className="space-y-2 list-disc pl-5 text-base leading-relaxed text-gray-700">
                                <li>Tailored for larger salons, gyms, wellness centers, or franchises.</li>
                                <li>
                                  Includes white-glove onboarding, dedicated support, loyalty perks, and exclusive
                                  features to suit business needs.
                                </li>
                                <li>Pricing and features are negotiated on a case-by-case basis.</li>
                              </ul>
                            </div>
                          </div>

                          <p className="mt-6 text-base leading-relaxed text-gray-700">
                            Self Vibe reserves the right to adjust plan pricing and benefits with reasonable notice to
                            subscribers. Subscription fees are non-refundable once the billing period begins unless
                            otherwise stated in a separate agreement.
                          </p>

                          <div className="mt-6 rounded-lg border-2 border-purple-300 bg-purple-50 p-5">
                            <p className="flex items-start text-base leading-relaxed text-gray-800">
                              <span className="mr-3 text-xl flex-shrink-0">🔒</span>
                              <span>
                                <strong>Important:</strong> Self Vibe does not charge commission per booking. All
                                earnings from client services go directly to the provider through their preferred
                                payment method (e.g., mobile money, cash).
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>

                      <h2
                        id="cancellations"
                        className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl leading-tight"
                      >
                        6. Cancellations & No-Shows
                      </h2>
                      <div className="mb-8">
                        <ul className="space-y-3 list-disc pl-6 text-base leading-relaxed text-gray-700">
                          <li>Cancellations must be made at least 12 hours before the appointment.</li>
                          <li>
                            Repeated last-minute cancellations or no-shows (client or provider) may result in account
                            restrictions or removal.
                          </li>
                        </ul>
                      </div>

                      <h2
                        id="responsibilities"
                        className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl leading-tight"
                      >
                        7. Your Responsibilities
                      </h2>
                      <div className="mb-8 space-y-4">
                        <p className="text-base leading-relaxed text-gray-700">
                          Whether you are a client or provider, you agree to:
                        </p>
                        <ul className="space-y-3 list-disc pl-6 text-base leading-relaxed text-gray-700">
                          <li>Use the platform legally and ethically.</li>
                          <li>Treat others respectfully, without discrimination, harassment, or violence.</li>
                          <li>Avoid false bookings, impersonation, or spreading misinformation.</li>
                          <li>Respect cultural and gender norms while remaining professional.</li>
                        </ul>
                      </div>

                      <h2 id="quality" className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl leading-tight">
                        8. Service Quality & Trust
                      </h2>
                      <div className="mb-8">
                        <ul className="space-y-3 list-disc pl-6 text-base leading-relaxed text-gray-700">
                          <li>
                            Self Vibe reserves the right to verify provider qualifications or suspend providers with
                            repeated poor reviews.
                          </li>
                          <li>All user reviews must be fair, factual, and respectful.</li>
                        </ul>
                      </div>

                      <h2
                        id="intellectual-property"
                        className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl leading-tight"
                      >
                        9. Intellectual Property
                      </h2>
                      <div className="mb-8">
                        <ul className="space-y-3 list-disc pl-6 text-base leading-relaxed text-gray-700">
                          <li>
                            The Self Vibe platform and brand (including logos, icons, app design) are protected by
                            copyright.
                          </li>
                          <li>You may not reproduce or modify the platform's content without written permission.</li>
                        </ul>
                      </div>

                      <h2 id="user-content" className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl leading-tight">
                        10. User-Generated Content
                      </h2>
                      <div className="mb-8">
                        <ul className="space-y-3 list-disc pl-6 text-base leading-relaxed text-gray-700">
                          <li>
                            Any media you upload (photos, videos, reviews) must be your own or used with permission.
                          </li>
                          <li>
                            By uploading content, you give Self Vibe the right to display it within the app for service
                            promotion.
                          </li>
                        </ul>
                      </div>

                      <h2 id="liability" className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl leading-tight">
                        11. Limitations of Liability
                      </h2>
                      <div className="mb-8 space-y-4">
                        <p className="text-base leading-relaxed text-gray-700">
                          Self Vibe provides a marketplace and does not directly offer services. We are not responsible
                          for:
                        </p>
                        <ul className="space-y-3 list-disc pl-6 text-base leading-relaxed text-gray-700">
                          <li>Service outcomes or injuries during service delivery.</li>
                          <li>Misconduct by users or providers.</li>
                          <li>
                            Loss due to connectivity issues or mobile payment errors (though we'll support resolution).
                          </li>
                        </ul>
                      </div>

                      <h2 id="privacy" className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl leading-tight">
                        12. Data Privacy
                      </h2>
                      <div className="mb-8 space-y-4">
                        <p className="text-base leading-relaxed text-gray-700">
                          We collect and use your data only to improve your experience on Self Vibe.
                        </p>
                        <p className="text-base leading-relaxed text-gray-700">
                          Please see our{" "}
                          <Link href="/privacy" className="text-purple-600 hover:text-purple-800 underline">
                            Privacy Policy
                          </Link>{" "}
                          to learn how your personal and payment data are stored and used.
                        </p>
                      </div>

                      <h2 id="dispute" className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl leading-tight">
                        13. Dispute Resolution
                      </h2>
                      <div className="mb-8">
                        <ul className="space-y-3 list-disc pl-6 text-base leading-relaxed text-gray-700">
                          <li>We encourage resolving conflicts between clients and providers peacefully.</li>
                          <li>
                            If unresolved, users can report the issue through the in-app support or via email:{" "}
                            <a
                              href="mailto:hello@selfvibe.io"
                              className="text-purple-600 hover:text-purple-800 underline"
                            >
                              hello@selfvibe.io
                            </a>
                          </li>
                          <li>Self Vibe will mediate in good faith but does not guarantee a final resolution.</li>
                        </ul>
                      </div>

                      <h2 id="termination" className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl leading-tight">
                        14. Termination & Suspension
                      </h2>
                      <div className="mb-8 space-y-4">
                        <p className="text-base leading-relaxed text-gray-700">
                          We may suspend or delete accounts that:
                        </p>
                        <ul className="space-y-3 list-disc pl-6 text-base leading-relaxed text-gray-700">
                          <li>Engage in fraud, abuse, or misconduct.</li>
                          <li>Repeatedly cancel or no-show bookings.</li>
                          <li>Post offensive, violent, or discriminatory content.</li>
                        </ul>
                      </div>

                      <h2 id="changes" className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl leading-tight">
                        15. Changes to Terms
                      </h2>
                      <div className="mb-8">
                        <p className="text-base leading-relaxed text-gray-700">
                          We may update these Terms occasionally. Users will be notified in-app or by SMS/email when
                          major changes occur. Continued use after updates means you accept the new Terms.
                        </p>
                      </div>

                      <h2
                        id="governing-law"
                        className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl leading-tight"
                      >
                        16. Governing Law
                      </h2>
                      <div className="mb-8 space-y-4">
                        <p className="text-base leading-relaxed text-gray-700">
                          These Terms are governed by the applicable laws of the country in which the user or service
                          provider is located, including but not limited to the Republic of Ghana, Nigeria, Kenya, South
                          Africa, and other African nations where Self Vibe operates. We also recognize the value of
                          customary practices and informal resolution methods commonly respected within local
                          communities.
                        </p>
                        <p className="text-base leading-relaxed text-gray-700">
                          In cases of legal conflict, Self Vibe will follow the formal dispute resolution mechanisms of
                          the relevant country's legal system while promoting respectful and community-sensitive
                          engagement at all times.
                        </p>
                      </div>

                      <h2 id="contact" className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl leading-tight">
                        17. Contact Us
                      </h2>
                      <div className="mb-8 space-y-4">
                        <p className="text-base leading-relaxed text-gray-700">
                          If you have questions or concerns, contact:
                        </p>
                        <div className="rounded-lg bg-gray-50 border border-gray-200 p-5">
                          <ul className="space-y-3 list-none text-base leading-relaxed text-gray-700">
                            <li className="flex items-center">
                              <span className="mr-3 text-lg">📧</span>
                              <a
                                href="mailto:hello@selfvibe.io"
                                className="text-purple-600 hover:text-purple-800 underline"
                              >
                                hello@selfvibe.io
                              </a>
                            </li>
                            <li className="flex items-center">
                              <span className="mr-3 text-lg">📞</span>
                              <a href="tel:+233509438082" className="text-purple-600 hover:text-purple-800 underline">
                                +233509438082
                              </a>
                            </li>
                            <li className="flex items-center">
                              <span className="mr-3 text-lg">🌍</span>
                              <a
                                href="https://www.selfvibe.io"
                                className="text-purple-600 hover:text-purple-800 underline"
                              >
                                www.selfvibe.io
                              </a>
                            </li>
                          </ul>
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
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/for-professionals"
                    className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    For Professionals
                  </Link>
                </li>
                <li>
                  <Link href="/for-users" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                    For Users
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                    Pricing
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
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
