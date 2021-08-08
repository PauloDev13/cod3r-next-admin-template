import { createContext, useState } from 'react';
import { NextPage } from 'next';

type Tema = 'dark' | '';

interface AppContextProps {
  tema?: Tema;
  alternarTema?: () => void;
}

const AppContext = createContext<AppContextProps>({});

export const AppProvider: NextPage = ({ children }) => {
  const [tema, setTema] = useState<Tema>('dark');

  function alternarTema() {
    setTema(tema === '' ? 'dark' : '');
  }

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
