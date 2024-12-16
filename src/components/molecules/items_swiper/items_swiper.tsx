'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'
import { OnestText } from '@/components/atoms/onest_text'
import { LangProps } from '@/interfaces/lang-props'
import { Autoplay, Pagination } from 'swiper/modules'

export default function ItemsSwiper({ dict }: LangProps) {
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
    <main className="flex pt-10">
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={10000}
        loop={true}
        allowTouchMove={false}
        modules={[Autoplay]}
      >
        {items.map((item, index) => (
          <SwiperSlide
            key={index}
            className="min-w-[250px] max-w-[400px] p-4 md:min-w-[300px] lg:p-0"
          >
            <div className="flex flex-col items-center">
              <Image
                src={item.image}
                alt={item.title}
                width={350}
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
      </Swiper>
    </main>
  )
}
