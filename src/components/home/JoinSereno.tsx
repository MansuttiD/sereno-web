export default function JoinSereno() {
  return (
    <section className="bg-general_backgound py-8">
      <article className="home_join_article">
        <header className="home_join_header">
          <h2 className="home_join_title">
            ¡Únete a <span className="font-black">Sereno</span>!
          </h2>
          <p className="home_join_description">Somos tu solución segura</p>
        </header>
        <div className=" flex gap-5">
          <button className="blue_gradient text-white home_join_buttons shadow-button">
            Registrar
          </button>
          {/* <button className="home_join_button_white home_join_buttons shadow-button">
            Ingresar
          </button> */}
        </div>
      </article>
    </section>
  );
}
