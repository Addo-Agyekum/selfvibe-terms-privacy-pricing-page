"use client"

import Link from "next/link"
import { useState } from "react"
import { Check, Shield, Award, Users, Calendar, Star, MessageSquare, BarChart, Zap, Settings } from "lucide-react"

export default function PricingPage() {
  const [staffSize, setStaffSize] = useState("medium")

  const getProfessionalPrice = () => {
    switch (staffSize) {
      case "small":
        return "₵150"
      case "medium":
        return "₵185"
      case "large":
        return "₵200"
      default:
        return "₵185"
    }
  }

  const faqs = [
    {
      question: "Can I switch between plans?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, changes take effect at the end of your billing cycle.",
    },
    {
      question: "Do you charge commission on bookings?",
      answer:
        "No, we don't charge any commission on your bookings. All earnings from client services go directly to you through your preferred payment method.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept mobile money (MTN, AirtelTigo, M-Pesa), bank transfers, and other local payment methods across African countries.",
    },
    {
      question: "Is there a free trial for paid plans?",
      answer:
        "Yes, we offer a 14-day free trial for our Professional plan. You can explore all features before committing to a subscription.",
    },
  ]

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
        <section className="relative bg-gradient-to-r from-blue-50 to-white py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
                Choose the Right Plan for Your Business
              </h1>
              <p className="text-lg mb-8 text-gray-600 md:text-xl">
                Simple, transparent pricing to help your beauty and wellness business grow
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <Check className="h-4 w-4 text-green-500" />
                <span>No setup fees</span>
                <span className="mx-2">•</span>
                <Check className="h-4 w-4 text-green-500" />
                <span>No commission on bookings</span>
                <span className="mx-2">•</span>
                <Check className="h-4 w-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute left-10 top-10 h-8 w-8 rounded-full bg-blue-100 opacity-70"></div>
          <div className="absolute bottom-10 right-10 h-10 w-10 rounded-full bg-green-100 opacity-70"></div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8 max-w-7xl mx-auto">
              {/* Starter Plan */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="p-6 bg-green-50 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <Zap className="h-5 w-5 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Starter Plan</h3>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Free
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">Best for freelancers and new providers</p>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-6 text-center">
                    <span className="text-4xl font-bold text-gray-900">₵0</span>
                    <span className="text-gray-600 ml-1">/month</span>
                    <p className="text-sm text-gray-500 mt-1">Forever free</p>
                  </div>

                  <button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 px-4 rounded-lg transition-colors mb-6">
                    Get Started
                  </button>

                  <div className="space-y-4 flex-1">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3">
                        <Users className="h-3 w-3 text-green-600" />
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">Up to 20 clients</p>
                        <p className="text-sm text-gray-500">Manage your client base</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3">
                        <Calendar className="h-3 w-3 text-green-600" />
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">Basic booking calendar</p>
                        <p className="text-sm text-gray-500">Schedule appointments</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3">
                        <Star className="h-3 w-3 text-green-600" />
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">Customer reviews & ratings</p>
                        <p className="text-sm text-gray-500">Build your reputation</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3">
                        <BarChart className="h-3 w-3 text-green-600" />
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">Basic business reports</p>
                        <p className="text-sm text-gray-500">Track your performance</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3">
                        <MessageSquare className="h-3 w-3 text-green-600" />
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">Email support</p>
                        <p className="text-sm text-gray-500">Get help when you need it</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-green-600 font-medium">
                      ✅ Forever free. Great for testing the platform.
                    </p>
                  </div>
                </div>
              </div>

              {/* Professional Plan */}
              <div className="bg-white rounded-xl border-2 border-blue-300 overflow-hidden shadow-md hover:shadow-lg transition-shadow relative z-10 h-full flex flex-col">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-md">
                    Recommended
                  </span>
                </div>

                <div className="p-6 bg-blue-50 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <Shield className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Professional Plan</h3>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Popular
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">Best for small to mid-sized businesses</p>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  {/* Team Size Selector */}
                  <div className="mb-6">
                    <h4 className="text-center text-sm font-medium text-gray-700 mb-3">
                      Select your team size for Professional Plan
                    </h4>
                    <div className="bg-blue-50 rounded-lg p-1.5 flex text-sm">
                      <button
                        onClick={() => setStaffSize("small")}
                        className={`flex-1 py-2 px-3 rounded-md font-medium transition-colors ${
                          staffSize === "small"
                            ? "bg-blue-500 text-white shadow-sm"
                            : "text-gray-600 hover:bg-blue-100 hover:text-blue-700"
                        }`}
                      >
                        Up to 2 staff
                      </button>
                      <button
                        onClick={() => setStaffSize("medium")}
                        className={`flex-1 py-2 px-3 rounded-md font-medium transition-colors ${
                          staffSize === "medium"
                            ? "bg-blue-500 text-white shadow-sm"
                            : "text-gray-600 hover:bg-blue-100 hover:text-blue-700"
                        }`}
                      >
                        3-5 staff
                      </button>
                      <button
                        onClick={() => setStaffSize("large")}
                        className={`flex-1 py-2 px-3 rounded-md font-medium transition-colors ${
                          staffSize === "large"
                            ? "bg-blue-500 text-white shadow-sm"
                            : "text-gray-600 hover:bg-blue-100 hover:text-blue-700"
                        }`}
                      >
                        Up to 15 staff
                      </button>
                    </div>
                  </div>

                  <div className="mb-6 text-center">
                    <span className="text-4xl font-bold text-gray-900">{getProfessionalPrice()}</span>
                    <span className="text-gray-600 ml-1">/month</span>
                    <p className="text-sm text-gray-500 mt-1">
                      {staffSize === "small"
                        ? "Up to 2 staff"
                        : staffSize === "medium"
                          ? "3-5 staff"
                          : "Up to 15 staff"}
                    </p>
                  </div>

                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-4 rounded-lg transition-colors mb-6">
                    Start 14-Day Free Trial
                  </button>

                  <div className="space-y-4 flex-1">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 mr-3">
                        <Users className="h-3 w-3 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">Unlimited clients</p>
                        <p className="text-sm text-gray-500">Grow your business without limits</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 mr-3">
                        <Users className="h-3 w-3 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">Staff multi-account access</p>
                        <p className="text-sm text-gray-500">Manage your team efficiently</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 mr-3">
                        <BarChart className="h-3 w-3 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">Advanced booking analytics</p>
                        <p className="text-sm text-gray-500">Gain insights into your business</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 mr-3">
                        <MessageSquare className="h-3 w-3 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">Automated SMS notifications</p>
                        <p className="text-sm text-gray-500">Reduce no-shows with reminders</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 mr-3">
                        <Settings className="h-3 w-3 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">In-app marketing tools</p>
                        <p className="text-sm text-gray-500">Promote your services effectively</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 mr-3">
                        <Star className="h-3 w-3 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">Priority visibility</p>
                        <p className="text-sm text-gray-500">Stand out in search results</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-blue-600 font-medium">
                      💰 Includes all Starter features plus advanced tools
                    </p>
                  </div>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="p-6 bg-yellow-50 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                        <Award className="h-5 w-5 text-yellow-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Enterprise Plan</h3>
                    </div>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                      <Award className="h-3 w-3 mr-1" />
                      Gold Verified
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">Best for high-traffic and multi-location businesses</p>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-6 text-center">
                    <span className="text-4xl font-bold text-gray-900">Custom</span>
                    <p className="text-sm text-gray-500 mt-1">Tailored to your needs</p>
                  </div>

                  <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2.5 px-4 rounded-lg transition-colors mb-6">
                    Book a Demo
                  </button>

                  <div className="space-y-4 flex-1">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center mt-0.5 mr-3">
                        <Award className="h-3 w-3 text-yellow-600" />
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">Gold Verification badge</p>
                        <p className="text-sm text-gray-500">Premium trust indicator</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center mt-0.5 mr-3">
                        <Settings className="h-3 w-3 text-yellow-600" />
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">AI integration</p>
                        <p className="text-sm text-gray-500">Smart service recommendations</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center mt-0.5 mr-3">
                        <Settings className="h-3 w-3 text-yellow-600" />
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">White-label branding</p>
                        <p className="text-sm text-gray-500">Customize to match your brand</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center mt-0.5 mr-3">
                        <Users className="h-3 w-3 text-yellow-600" />
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">Dedicated account manager</p>
                        <p className="text-sm text-gray-500">Personalized support</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center mt-0.5 mr-3">
                        <Star className="h-3 w-3 text-yellow-600" />
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">Loyalty & referral systems</p>
                        <p className="text-sm text-gray-500">Reward your customers</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center mt-0.5 mr-3">
                        <Settings className="h-3 w-3 text-yellow-600" />
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">API access</p>
                        <p className="text-sm text-gray-500">Custom integrations</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-yellow-600 font-medium">
                      📞 Includes all Professional features plus premium tools
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">Compare Plan Features</h2>

            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-700">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Feature
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      <span className="text-green-600">Starter</span>
                    </th>
                    <th scope="col" className="px-6 py-3 text-center bg-blue-50">
                      <span className="text-blue-600">Professional</span>
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      <span className="text-yellow-600">Enterprise</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      Client Management
                    </th>
                    <td className="px-6 py-4 text-center">Up to 20 clients</td>
                    <td className="px-6 py-4 text-center bg-blue-50">Unlimited</td>
                    <td className="px-6 py-4 text-center">Unlimited</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      Staff Accounts
                    </th>
                    <td className="px-6 py-4 text-center">1 account</td>
                    <td className="px-6 py-4 text-center bg-blue-50">Up to 15 accounts</td>
                    <td className="px-6 py-4 text-center">Unlimited</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      Booking Calendar
                    </th>
                    <td className="px-6 py-4 text-center">Basic</td>
                    <td className="px-6 py-4 text-center bg-blue-50">Advanced</td>
                    <td className="px-6 py-4 text-center">Premium</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      SMS Notifications
                    </th>
                    <td className="px-6 py-4 text-center">—</td>
                    <td className="px-6 py-4 text-center bg-blue-50">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      Analytics & Reports
                    </th>
                    <td className="px-6 py-4 text-center">Basic</td>
                    <td className="px-6 py-4 text-center bg-blue-50">Advanced</td>
                    <td className="px-6 py-4 text-center">Premium + Growth Insights</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      Marketing Tools
                    </th>
                    <td className="px-6 py-4 text-center">—</td>
                    <td className="px-6 py-4 text-center bg-blue-50">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      Loyalty System
                    </th>
                    <td className="px-6 py-4 text-center">—</td>
                    <td className="px-6 py-4 text-center bg-blue-50">—</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      API Access
                    </th>
                    <td className="px-6 py-4 text-center">—</td>
                    <td className="px-6 py-4 text-center bg-blue-50">—</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      Support
                    </th>
                    <td className="px-6 py-4 text-center">Email</td>
                    <td className="px-6 py-4 text-center bg-blue-50">Priority Email & Chat</td>
                    <td className="px-6 py-4 text-center">Dedicated Account Manager</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">Find answers to common questions about our pricing plans</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="grid gap-6 md:grid-cols-2">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-blue-500 to-blue-600">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Our team is here to help you choose the right plan for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Contact Support
                </Link>
                <Link
                  href="mailto:hello@selfvibe.io"
                  className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Email Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <Link href="/" className="mb-4 inline-block">
                <img src="/images/logo.png" alt="Self Vibe" className="h-10" />
              </Link>
              <p className="mb-6 text-gray-600">
                Africa's #1 beauty & wellness hub helping professionals and businesses thrive.
              </p>
              <div className="flex space-x-5">
                <Link href="#" className="text-purple-400 hover:text-purple-600 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-purple-400 hover:text-purple-600 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-purple-400 hover:text-purple-600 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-purple-400 hover:text-purple-600 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
                <Link href="#" className="text-purple-400 hover:text-purple-600 transition-colors">
                  <span className="sr-only">TikTok</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-base font-semibold text-gray-900">Company</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-purple-600 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-base font-semibold text-gray-900">Services</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/for-professionals" className="text-gray-600 hover:text-purple-600 transition-colors">
                    For Professionals
                  </Link>
                </li>
                <li>
                  <Link href="/for-users" className="text-gray-600 hover:text-purple-600 transition-colors">
                    For Users
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-base font-semibold text-gray-900">Contact</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:hello@selfvibe.io"
                    className="flex items-center text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <svg className="mr-3 h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    hello@selfvibe.io
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+233509438082"
                    className="flex items-center text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <svg className="mr-3 h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    +233 509 438 082
                  </a>
                </li>
                <li className="pt-4">
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center rounded-full bg-purple-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-600 transition-colors"
                  >
                    View Pricing
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-center text-sm text-gray-500">© 2025 SelfVibe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
