import Link from 'next/link';

export default function Jointelegram() {
  return (
    <section className="bg-gradient-to-tl from-blue-400 via-blue-500 to-blue-600 pt-14 pb-14 xl:mt-36">
      <div className="bg-no-repeat bg-contain bg-left-bottom md:bg-celphonetelegram lg:ml-4 xl:ml-20">
        <div className="text-center p-1 max-w-[20rem] m-auto xs:max-w-[25rem] sm:max-w-[32rem] md:max-w-[42rem] lg:max-w-[72rem]">
          <header className="">
            <h2 className="h2s-title text-white md:text-[40px] lg:text-xxl pb-[0.5rem]">
              Únete a nuestro <span className="font-semibold">Telegram</span>
            </h2>
          </header>
          <div className="sm:text-right lg:ml-24">
            <p className="text-white pb-3 md:text-[21px] xl:text-[30px]">
              Acompáñanos en nuestra comunidad de Telegram para mantenerte
              actualizado con las últimas novedades de nuestra plataforma. Únete
              ahora y no te pierdas ninguna de nuestras noticias y
              actualizaciones.
            </p>
            <div className="flex align-middle justify-center sm:justify-end">
              <Link href="https://t.me/serenoapp" target="_blank">
                <button className="flex items-center px-4 py-1 rounded-lg gap-2 text-blue-500 bg-white">
                  <img
                    src="./assets/img/home/telegrambutton.svg"
                    alt=""
                    className="w-8 h-8"
                  />
                  <span>Click aquí</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
