export default function PaymentMethods() {
  return (
    <section className="bg-general_backgound pt-24">
      <div className="paymenth-subcontainer ">
        <header className="mb-6">
          <h2 className="h2s-title">
            Métodos de <span className="font-semibold">Pago</span>
          </h2>
        </header>
        <div className="paymenth-container-articles">
          <article className="paymenth-article bg-white shadow-paymentbox">
            <div className="w-24">
              <img src="./home/zellefondoazul.svg" alt="Zelle" className="w-full h-full" />
            </div>
            <div>
              <h4 className="paymenth-card-title">Zelle</h4>
              <p className="paymenth-card-description">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </article>
          <article className="paymenth-article bg-white shadow-paymentbox">
          <div className="w-24">
              <img src="./home/mastercardfondoazul.svg" alt="MasterCard" />
            </div>
            <div>
              <h4 className="paymenth-card-title">MasterCard</h4>
              <p className="paymenth-card-description">
                Lorem ipsum dolor amet adipisicing elit.
              </p>
            </div>
          </article>
          <article className="paymenth-article bg-white shadow-paymentbox">
          <div className="w-24">
              <img src="./home/depositosfondoazul.svg" alt="Depósitos" />
            </div>
            <div>
              <h4 className="paymenth-card-title">Depósitos</h4>
              <p className="paymenth-card-description">
                Lorem ipsum dolor amet adipisicing elit.
              </p>
            </div>
          </article>
          <article className="paymenth-article bg-white shadow-paymentbox">
          <div className="w-24">
            <img src="./home/depositosfondoazul.svg" alt="Depósitos" />
            </div>
            <div>
              <h4 className="paymenth-card-title">Depósitos</h4>
              <p className="paymenth-card-description">
                Lorem ipsum dolor amet , adipisicing elit.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
