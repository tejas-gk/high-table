import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import type SwiperType from 'swiper'
import { useEffect, useState } from 'react'
import { Pagination } from 'swiper/modules'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function SwiperBanner() {
    const [swiper, setSwiper] = useState<null | SwiperType>(
        null
    )
    const [activeIndex, setActiveIndex] = useState(0)

    const [slideConfig, setSlideConfig] = useState({
        isBeginning: true,
        isEnd: activeIndex === (5 ?? 0) - 1,
    })

    useEffect(() => {
        swiper?.on('slideChange', ({ activeIndex }) => {
            setActiveIndex(activeIndex)
            setSlideConfig({
                isBeginning: activeIndex === 0,
                isEnd: activeIndex === (5 ?? 0) - 1,
            })
        })
    }, [swiper])

    return (
        <div className='w-full bg-purple-600 h-10 text-center py-2 text-white flex justify-center items-center
    '>
            
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
                    // @ts-ignore
                    [...Array(5)].map((_, i) => (
                        <SwiperSlide key={i}>
                            <div className='h-full w-full bg-purple-600 flex justify-center items-center'>
                                {i}
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
