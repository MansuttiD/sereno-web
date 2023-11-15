'use client';

import FooterPrincipal from '@/src/components/shared/FooterPrincipal';



export default function Success() {



  return (
    <>
      
      <div className="flex justify-center bg-no-repeat bg-contain bg-general_backgound bg-right-bottom sm:bg-wavedownload">
        <section className="px-6">
          <div className="flex flex-col justify-center align-middle text-center mb-6 min-h-[67vh] max-w-md md:mb-8 md:max-w-2xl">
            <h2 className="text-2xl mb-4 font-semibold md:text-4xl md:text-xxl">
              ¡Registro Exitoso!
            </h2>
            <p className="from-blue-700 text-base md:text-md">
              ¡Excelente! Has dado el primer paso para una nueva forma de
              manejar tus remesas con Sereno.
            </p>
          </div>
        </section>
      </div>
      <FooterPrincipal />
    </>
  );
}
