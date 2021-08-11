import {createContext, useEffect, useState} from 'react';
import route from 'next/router';
import {NextPage} from 'next';
import cookies from 'js-cookie';

import Usuario from '../../model/Usuario';
import firebase from '../../firebase/config';

interface AuthContextProps {
  usuario?: Usuario;
  carregando?: boolean;
  loginGoogle?: () => Promise<void>;
  login?: (email: string, senha: string) => Promise<void>;
  cadastrar?: (email: string, senha: string) => Promise<void>;
  logout?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

const UsuarioNormalizado = async (
  usuarioFirebase: firebase.User,
): Promise<Usuario> => {
  const token = await usuarioFirebase.getIdToken();
  const {
    uid, displayName, email,
    providerData, photoURL
  } = usuarioFirebase;

  return {
    uid,
    nome: displayName,
    email,
    token,
    provedor: providerData[0]?.providerId,
    imagemUrl: photoURL,
  };
};

const gerenciarCookie = (logado: boolean) => {
  if (logado) {
    // @ts-ignore
    cookies.set('admin-template-cod3r-auth', logado, {
      expires: 3,
    });
  } else {
    cookies.remove('admin-template-cod3r-auth');
  }
};

export const AuthProvider: NextPage = ({children}) => {
  const [carregando, setCarregando] = useState<boolean>(true);
  const [usuario, setUsuario] = useState<Usuario>();

  useEffect(() => {
    if (cookies.get('admin-template-cod3r-auth')) {
      // @ts-ignore
      const cancelar = firebase.auth().onIdTokenChanged(configurarSessao);
      return () => cancelar();

    } else {
      setCarregando(false);
    }
  }, []);

  const configurarSessao = async (usuarioFirebase: firebase.User) => {
    if (usuarioFirebase?.email) {
      const usuario = await UsuarioNormalizado(usuarioFirebase);
      setUsuario(usuario);
      gerenciarCookie(true);
      setCarregando(false);
      return usuario.email;
    } else {
      // @ts-ignore
      setUsuario(null);
      gerenciarCookie(false);
      setCarregando(false);
      return false;
    }
  };

  const loginGoogle = async () => {
    try {
      setCarregando(true);
      const resp = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());

      if (resp.user?.email) {
        await configurarSessao(resp.user);
        await route.push('/');
      }
    } finally {
      setCarregando(false);
    }
  };

  const login = async (email: string, senha: string) => {
    try {
      setCarregando(true);
      const resp = await firebase
      .auth()
      .signInWithEmailAndPassword(email, senha);

      if (resp.user?.email) {
        await configurarSessao(resp.user);
        await route.push('/');
      }
    } finally {
      setCarregando(false);
    }
  };

  const cadastrar = async (email: string, senha: string) => {
    try {
      setCarregando(true);
      const resp = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha);

      if (resp.user?.email) {
        await configurarSessao(resp.user);
        await route.push('/');
      }
    } finally {
      setCarregando(false);
    }
  };

  const logout = async () => {
    try {
      setCarregando(true);
      await firebase.auth().signOut();
      // @ts-ignore
      await configurarSessao(null);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        usuario,
        carregando,
        loginGoogle,
        login,
        cadastrar,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
