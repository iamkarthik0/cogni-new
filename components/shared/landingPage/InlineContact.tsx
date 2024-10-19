"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'

export default function InlineContact() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-4xl  m-6 lg:mx-auto py-8 justify-center items-center">
      <Input
        type="text"
        placeholder="Your Name"
        className="flex-1 rounded-xl bg-[#F1F1F1] h-12"
      />
      <Input
        type="email"
        placeholder="Enter your Email"
        className="flex-1 rounded-xl bg-[#F1F1F1] h-12"
      />
       <Link href="/contact-us">
      <Button type="submit" className="btn">
        CONTACT US
      </Button>
      </Link>
    </form>
  )
}