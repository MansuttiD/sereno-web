'use client'
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import BoxFaqs from '../components/home/BoxFaqs';
import Jointelegram from '../components/home/JoinTelegram';
import PrincipalSection from '../components/home/PrincipalSection';
import FooterPrincipal from '../components/shared/FooterPrincipal';



export default function Home() {

  useEffect(() => {
    Cookies.remove('sereno_success')
  }, [])

  return (
    <>
      <div className="bg-general_backgound">
        <div>
          <PrincipalSection/>
          <BoxFaqs/>
          <Jointelegram/>
          <FooterPrincipal/>
        </div>
      </div>
    </>
  );
}

