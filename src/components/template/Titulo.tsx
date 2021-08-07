import { NextPage } from 'next';

interface TituloProps {
  titulo: string;
  subtitulo: string;
}

const Titulo: NextPage<TituloProps> = ({ titulo, subtitulo }) => {
  return (
    <div>
      <h1 className={``}>{titulo}</h1>
      <h2 className={``}>{subtitulo}</h2>
    </div>
  );
};
export default Titulo;
