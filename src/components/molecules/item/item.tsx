'use client'
import { OnestText } from '@/components/atoms/onest_text'
import { LangProps } from '@/interfaces/lang-props'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Item({ dict }: LangProps) {
  const items = [
    {
      image: '/images/item.jpg',
      title: dict.items.item1.title,
      description: dict.items.item1.description,
    },
    {
      image: '/images/item.jpg',
      title: dict.items.item2.title,
      description: dict.items.item2.description,
    },
    {
      image: '/images/item.jpg',
      title: dict.items.item2.title,
      description: dict.items.item2.description,
    },
    {
      image: '/images/item.jpg',
      title: dict.items.item2.title,
      description: dict.items.item2.description,
    },
    {
      image: '/images/item.jpg',
      title: dict.items.item2.title,
      description: dict.items.item2.description,
    },
    {
      image: '/images/item.jpg',
      title: dict.items.item2.title,
      description: dict.items.item2.description,
    },
  ]

  return (
    <main className="grid w-full grid-cols-1 gap-3 p-0 px-10 md:grid-cols-3 md:p-10">
      {/* First (large) image */}
      <div className="col-span-2 row-span-2 flex flex-col items-center justify-center">
        <Image
          src={items[0].image}
          alt={items[0].title}
          width={900}
          height={800}
          className="relative z-0 h-auto w-[500px] scale-105 rounded-lg shadow-lg transition-all duration-300 hover:scale-100 md:w-[900px]"
        />

        <OnestText
          text={items[0].title}
          tag="h2"
          style="bold"
          fontSize="22px"
        />
        <OnestText
          text={items[0].description}
          fontSize="16px"
          className="text-gray-600"
        />
      </div>
      <div>
        {/* Two smaller images to the right */}
        {items.slice(1, 3).map((item, index) => (
          <div key={index} className="flex flex-col items-center pl-0 md:pl-10">
            <Image
              src={item.image}
              alt={item.title}
              width={350}
              height={400}
              className="relative z-0 h-auto w-[500px] scale-105 rounded-lg shadow-lg transition-all duration-300 hover:scale-100 md:w-[350px]"
            />
            <OnestText
              text={item.title}
              tag="h2"
              style="bold"
              fontSize="22px"
            />
            <OnestText
              text={item.description}
              fontSize="16px"
              className="text-gray-600"
            />
          </div>
        ))}
      </div>
      {/* <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <OnestText
                text={item.title}
                tag="h2"
                style="bold"
                fontSize="22px"
              />
              <OnestText
                text={item.description}
                fontSize="16px"
                className="text-gray-600"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </main>
  )
}
