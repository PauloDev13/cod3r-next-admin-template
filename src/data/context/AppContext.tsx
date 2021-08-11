import {createContext, useEffect, useState} from 'react';
import {NextPage} from 'next';

// type Tema = 'dark' | '';

interface AppContextProps {
  tema?: string;
  alternarTema?: () => void;
}

const AppContext = createContext<AppContextProps>({});

export const AppProvider: NextPage = ({ children }) => {
  const [tema, setTema] = useState('dark');

  function alternarTema() {
    const novoTema = tema === '' ? 'dark' : '';
    setTema(novoTema);
    localStorage.setItem('tema', novoTema);
  }

  useEffect(() => {
    const temaSalvo = localStorage.getItem('tema');
    setTema(temaSalvo!);
  }, []);

  return (
    <AppContext.Provider
      value={{
        tema,
        alternarTema,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
