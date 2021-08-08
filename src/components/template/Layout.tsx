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
    <div className={`dark flex h-screen w-screen`}>
      <MenuLateral />
      <div
        className={`flex flex-col w-full p-7
          bg-gray-300 dark:bg-gray-800`}
      >
        <Cabecalho titulo={titulo} subtitulo={subtitulo} />
        <Conteudo>{children}</Conteudo>
      </div>
    </div>
  );
};

export default Layout;
