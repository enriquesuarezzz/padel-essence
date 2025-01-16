'use client'
import Chevron from '@/components/atoms/svg/chevron'
import React, { useState } from 'react'

// Define the type for the items prop
interface AccordionItem {
  title: string
  content: string
}

interface AccordionProps {
  items: AccordionItem[]
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-md border border-gray-300 shadow-sm"
        >
          <button
            className="flex w-full items-center justify-between bg-gray-100 px-4 py-3 text-left hover:bg-gray-200 focus:outline-none"
            onClick={() => toggleItem(index)}
          >
            <span className="font-medium">{item.title}</span>
            <Chevron
              className={`h-5 w-5 transform transition-transform ${
                activeIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === index ? 'max-h-40' : 'max-h-0'
            }`}
          >
            <div className="px-4 py-3 text-gray-300">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion
