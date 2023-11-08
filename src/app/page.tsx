import Head from 'next/head';
import BoxFaqs from '../components/home/BoxFaqs';
import Jointelegram from '../components/home/JoinTelegram';
import PrincipalSection from '../components/home/PrincipalSection';
import FooterPrincipal from '../components/shared/FooterPrincipal';
import HeaderPrincipal from '../components/shared/HeaderPrincipal';

export default function Home() {
  return (
    <>
      <Head>
        <script async defer src="/fb-pixel.js" />
      </Head>
      <div className="bg-general_backgound">
        <div>
          <HeaderPrincipal/>
          <PrincipalSection/>
          <BoxFaqs/>
          <Jointelegram/>
          <FooterPrincipal/>
        </div>
      </div>
    </>
  );
}

