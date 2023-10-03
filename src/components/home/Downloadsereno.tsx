export default function Downloadsereno() {
  return (
    <section
      id="Download"
      className="bg-center bg-no-repeat bg-cover md:bg-right-bottom md:bg-contain md:h-[580px] lg:h-[750px]"
      style={{ backgroundImage: 'url(./home/wavedownload.svg)' }}
    >
      <div className="home_download_article">
        <header className="mb-8">
          <h2 className="h2s-title md:text-xxl">
            ¡Descarga <span className="font-semibold">SERENO!</span>
          </h2>
        </header>
        <section className="grid grid-cols-2 max-h-96 overflow-hidden sm:grid-cols-[65%,35%] md:max-h-[41rem]">
          <div className="lg:pt-32">
            <article className="mb-6 md:w-[650px] lg:w-[715px]">
              <div className="mb-6 md:text-[30px]">
                <p className="mb-2">
                  Encuéntranos hoy mismo, en todas las tiendas de aplicaciones
                  del mercado
                </p>
                <p>Disponible para iOs y Android.</p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row ">
                <img
                  src="./home/googleplay.svg"
                  alt="googleplay"
                  className="h-[45.33px]"
                />
                <img
                  src="./home/appstore.svg"
                  alt="appstore"
                  className="h-[51px] w-auto sm:h-[46px]"
                />
              </div>
            </article>
          </div>
          <div className="w-80 pl-[1.5rem] md:mx-auto sm:w-[296px] sm:h-[793px] md:pl-0 md:ml-5 md:w-[396px] md:h-[893px] lg:w-[496px] lg:h-[993px] lg:pl-0 lg:ml-16">
            <img
              src="./home/molupdownloadfinish.svg"
              alt="Descarga Sereno"
              className="w-full"
            />
          </div>
        </section>
      </div>
    </section>
  );
}



