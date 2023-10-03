'use client'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


export default function Downloadsereno() {



    return (
      <section>
        <div className="max-w-7xl mx-auto">
        <header className="pt-24">
          <h2 className="h2s-title">
            Qué dicen en <span className="font-semibold">Twitter</span>
          </h2>
          <Swiper
          effect={'coverflow'}
          modules={[Autoplay, EffectCoverflow]}
          initialSlide={2}
          slidesPerView={1}
          coverflowEffect={
            {
                rotate:0,
                stretch:100,
                depth:100,
                modifier:2.5,
            }
          }
          breakpoints={{
          400: {
            slidesPerView:1,
            coverflowEffect:{
                  rotate:0,
                  stretch:30,
                  depth:100,
                  modifier:2.5,
            }
          },
          500: {
            slidesPerView:1,
            coverflowEffect:{
              rotate:0,
              stretch:100,
              depth:100,
              modifier:3,
        }
          },
          600: {
            slidesPerView:1,
            coverflowEffect:{
              rotate:0,
              stretch:100,
              depth:100,
              modifier:3,
        }
          },
          700: {
            slidesPerView:1,
            coverflowEffect:{
              rotate:0,
              stretch:100,
              depth:100,
              modifier:4,
        }
            
          },
          800: {
            slidesPerView:1,
            coverflowEffect:{
              rotate:0,
              stretch:100,
              depth:100,
              modifier:4.5,
        }
          },
          900: {
            slidesPerView:1,
            coverflowEffect:{
              rotate:0,
              stretch:100,
              depth:100,
              modifier:5.2,
        }
          },
          1000: {
            slidesPerView:1,
            coverflowEffect:{
              rotate:0,
              stretch:100,
              depth:100,
              modifier:7,
        }
          },
          1200: {
            slidesPerView:1,
            coverflowEffect:{
              rotate:0,
              stretch:100,
              depth:100,
              modifier:8,
        }
          }
          }}
      className='swiper_container'
    >
      <SwiperSlide><img src="./home/twitt.svg" alt="" className='h-60 mx-auto md:h-72' /></SwiperSlide>
      <SwiperSlide><img src="./home/twitt.svg" alt="" className='h-60 mx-auto md:h-72' /></SwiperSlide>
      <SwiperSlide><img src="./home/twitt.svg" alt="" className='h-60 mx-auto md:h-72' /></SwiperSlide>
      <SwiperSlide><img src="./home/twitt.svg" alt="" className='h-60 mx-auto md:h-72' /></SwiperSlide>
      <SwiperSlide><img src="./home/twitt.svg" alt="" className='h-60 mx-auto md:h-72' /></SwiperSlide>

        </Swiper>
          <button className='flex m-auto items-center px-3 py-1  rounded-lg gap-2 text-white bg-gradient-to-tl from-blue-400 via-blue-500 to-blue-500 md:py-[6px]'>
          <img
                  src="./home/twittervector.svg"
                  alt="twitterlogo"
                  className="w-8 h-8"
                />
            Síguenos en Twitter
          </button>
        </header>
        </div>
      </section>
    );
  }