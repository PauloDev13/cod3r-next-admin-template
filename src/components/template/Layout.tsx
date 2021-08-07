import { NextPage } from 'next';
import MenuLateral from './MenuLateral';
import Cabecalho from './Cabecalho';
import Conteudo from './Conteudo';

interface LayoutProps {
  titulo: string;
  subtitulo: string;
}

const Layout: NextPage<LayoutProps> = ({ titulo, subtitulo, children }) => {
  return (
    <div>
      <MenuLateral />
      <Cabecalho titulo={titulo} subtitulo={subtitulo} />
      <Conteudo>{children}</Conteudo>
    </div>
  );
};

export default Layout;
