'use client';
import Link from 'next/link';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Principalsection() {
  return (
    <section className='pb-4 pt-12'>
      <div className="p-5 principal-subcontainer flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-[65%,35%] justify-center place-items-center mx-auto sm:max-w-lg md:max-w-6xl">
        <div className="font-sans flex flex-col justify-center mb-8 ">
          <h1 className=" h2s-title text-[35px] text-blue-950 md:text-xxl text-center mb-8 sm:text-left">
          Tu hub para remesas en  <br></br><span className="font-semibold">Moneda Estable</span>
          </h1>

          <div>

          <p className=" text-blue-950 text-left md:text-[30px] mb-5">
          Simplifica tus transacciones con Sereno. Conecta con tus seres queridos en Latinoamérica de manera fácil y segura.
          </p>
          </div>

          <Link  href="/register">
          <button className="bg-gradient-to-l from-blue-400 to-blue-500 text-base px-5 py-2 rounded-[10px] text-white m-auto sm:m-0">
          Lista de Espera
          </button>
          </Link>


        </div>

        <div className="relative sm:ml-10 md:ml-20  w-52 h-[400px] rounded-bl-[25px] rounded-tl-[85px] rounded-tr-[25px] rounded-br-[70px] lg:w-[310px] lg:h-[600px] lg:rounded-br-[116px] lg:rounded-tr-[40px] lg:rounded-bl-[55px] clip-path-polygon-angled lg:rounded-tl-[130px] overflow-hidden">
          <div className=" absolute -z-30 w-full h-full ">
            <Swiper
              className="h-full"
              slidesPerView={1}
              loop={true}
              autoplay={true}
              modules={[Autoplay]}
            >
              <SwiperSlide>
                <img
                  src="./assets/img/home/slider1.png"
                  alt=""
                  className=" w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="./assets/img/home/slider2.png"
                  alt=""
                  className="w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="./assets/img/home/slider3.png"
                  alt=""
                  className="w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="./assets/img/home/slider4.png"
                  alt=""
                  className="w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="./assets/img/home/slider5.png"
                  alt=""
                  className="w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="./assets/img/home/slider6.png"
                  alt=""
                  className="w-full h-full"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="phone-mockup"></div>
        </div>
      </div>
    </section>
  );
}