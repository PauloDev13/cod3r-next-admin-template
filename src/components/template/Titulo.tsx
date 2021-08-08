import { NextPage } from 'next';

interface TituloProps {
  titulo: string;
  subtitulo: string;
}

const Titulo: NextPage<TituloProps> = ({ titulo, subtitulo }) => {
  return (
    <div>
      <h1 className={`font-black text-3xl text-gray-900 dark:text-gray-100`}>
        {titulo}
      </h1>
      <h2 className={`font-light text-sm text-gray-600 dark:text-gray-300`}>
        {subtitulo}
      </h2>
    </div>
  );
};
export default Titulo;
