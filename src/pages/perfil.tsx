import React from 'react';
import Layout from '../components/template/Layout';
import useAppData from '../data/hook/useAppData';

export default function Perfil() {
  const { alternarTema } = useAppData();

  return (
    <Layout
      titulo={'Perfil do Usuário'}
      subtitulo={'Administre suas informações de usuario.'}
    >
      <button onClick={alternarTema}>Alternar</button>
    </Layout>
  );
}
