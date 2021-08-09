import { createContext, useState } from 'react';
import route from 'next/router';
import { NextPage } from 'next';

import Usuario from '../../model/Usuario';

interface AuthContextProps {
  usuario?: Usuario;
  loginGoogle?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

// const UsuarioNormalizado = async (
//   usuarioFirebase: firebase.User,
// ): Promise<Usuario> => {
//   const token = await usuarioFirebase.getIdToken();
//   const { uid, displayName, email, providerData, photoURL } = usuarioFirebase;
//
//   return {
//     uid,
//     nome: displayName,
//     email,
//     token,
//     provedor: providerData[0]?.providerId,
//     imagemUrl: photoURL,
//   };
// };

export const AuthProvider: NextPage = ({ children }) => {
  const [usuario, setUsuario] = useState<Usuario>();

  const loginGoogle = async () => {
    console.log('login google...');
    await route.push('/');
  };

  return (
    <AuthContext.Provider
      value={{
        usuario,
        loginGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
