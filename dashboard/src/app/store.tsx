"use client"

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import type SwiperType from 'swiper'
import { useEffect, useState } from 'react'
import { Pagination } from 'swiper/modules'
import { cn } from '@/lib/utils'
import StoreCard from "@/components/cards/store-card"
import { ChevronLeft, ChevronRight } from 'lucide-react'
export default function Store() {
    const [swiper, setSwiper] = useState<null | SwiperType>(
        null
    )
    const [activeIndex, setActiveIndex] = useState(0)

    const [slideConfig, setSlideConfig] = useState({
        isBeginning: true,
        isEnd: activeIndex === (6 ?? 0) - 1,
    })

    useEffect(() => {
        swiper?.on('slideChange', ({ activeIndex }) => {
            setActiveIndex(activeIndex)
            setSlideConfig({
                isBeginning: activeIndex === 0,
                isEnd: activeIndex === (6 ?? 0) - 1,
            })
        })
    }, [swiper])
  return (
    <div>
         <div className="
            ">
              <div className='group relative bg-zinc-100 aspect-square overflow-hidden rounded-xl'>
                  <div className='absolute z-10 inset-0 opacity-0 group-hover:opacity-100 transition'>
                      <button
                          onClick={(e) => {
                              e.preventDefault()
                              swiper?.slideNext()
                          }}
                          
                          aria-label='next image'>
                          <ChevronRight className='h-4 w-4 text-zinc-700' />{' '}
                      </button>
                      <button
                          onClick={(e) => {
                              e.preventDefault()
                              swiper?.slidePrev()
                          }}
                        
                          aria-label='previous image'>
                          <ChevronLeft className='h-4 w-4 text-zinc-700' />{' '}
                      </button>
                  </div>

                  <Swiper
                      pagination={{
                          renderBullet: (_, className) => {
                              return `<span class="rounded-full transition ${className}"></span>`
                          },
                      }}
                      onSwiper={(swiper) => setSwiper(swiper)}
                      spaceBetween={50}
                      modules={[Pagination]}
                      slidesPerView={1}
                      className='h-full w-full'>
                      {
                            [1,2,3,4,5,6].map((item, index) => (
                                <SwiperSlide key={index}>
                                    <StoreCard/>
                                </SwiperSlide>
                            ))  
                      }
                  </Swiper>
              </div>
            </div>
    </div>
  )
}
