import Link from "next/link";
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';


export default function FooterPrincipal() {
  return (
    <footer className="bg-black_footer">
      <div className="footer_media pt-16 pb-16 flex flex-col m-auto">
        <div className="footer_section md:gap-[170px] md:m-auto">
        <div className="md:w-44 mb-7 md:mb-10">
        <img src="/assets/img/footer/footerlogo.svg" alt="Logo Sereno" className="w-full h-full" />
        </div>
          <ul className="footer_list flex flex-col gap-3">
          <Link href="/"><li>Inicio</li></Link>
            {/* <li>Sobre nosotros</li>
            <li>Blog</li>
            <li>Empleos</li> */}
          </ul>
          <ul className="footer_list flex flex-col gap-3">
            <Link href="/#Faq"><li>Preguntas Frecuentes</li></Link>
          </ul>
          {/* <ul className="footer_list flex flex-col gap-3 border-b-0">
            <li>Legal</li>
            <li>Políticas Frecuentes</li>
            <li>Términos de servicio</li>
          </ul> */}
          <ul className="footer_list flex gap-9 justify-center align-middle">
          
          <Link href="https://www.facebook.com/SerenoNews"><li style={{ fontSize: '32px' }}><BsFacebook/></li></Link>
          <Link href="https://www.instagram.com/serenoapp/"><li style={{ fontSize: '32px' }}><BsInstagram/></li></Link>
          <Link href="https://twitter.com/SerenoApp" target="_blank"><li style={{ fontSize: '32px' }}><BsTwitter/></li></Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}
