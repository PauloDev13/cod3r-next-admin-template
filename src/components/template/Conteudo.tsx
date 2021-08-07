import { NextPage } from 'next';

const Conteudo: NextPage = ({ children }) => {
  return (
    <div
      className={`
      flex flex-col mt-7
  `}
    >
      {children}
    </div>
  );
};
export default Conteudo;
