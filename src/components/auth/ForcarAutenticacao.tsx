import {NextPage} from 'next';
import router from 'next/router';
import Image from 'next/image';

import loading from '../../../public/images/loading.gif';
import useAuthData from '../../data/hook/useAuthData';

const ForcarAutenticacao: NextPage = ({children}) => {
  const {usuario, carregando} = useAuthData();

  function renderizarConteudo() {
    return (
      <>
        {/*deu erro na página*/}
        {/*<Head>*/}
        {/*  <title>Checar autenticacao</title>*/}
        {/*  <script dangerouslySetInnerHTML={{*/}
        {/*    __html: `*/}
        {/*      if(!document.cookie.includes('admin-template-cod3r-auth') {*/}
        {/*        window.location.href = '/autenticacao'*/}
        {/*      }*/}
        {/*    `*/}
        {/*  }}/>*/}
        {/*</Head>*/}
        {children}
      </>
    );
  }

  function renderizarCarregando() {
    // @ts-ignore
    return (
      <div className={`flex justify-center items-center h-screen`}>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image src={loading}/>
      </div>
    );
  }

  if (!carregando && usuario?.email) {
    return renderizarConteudo();
  } else if (carregando) {
    return renderizarCarregando();
  } else {
    router.push('/autenticacao').then();
    return null;
  }

};
export default ForcarAutenticacao;