import { useState } from 'react';
import AuthInput from '../components/auth/AuthInput';
import { IconeAtencao } from '../components/icons';

const Autenticacao = () => {
  const [modo, setModo] = useState<'login' | 'cadastro'>('login');
  const [erro, setErro] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const exibirErro = (msg: string, tempoEmSegundos = 5) => {
    setErro(msg);
    setTimeout(() => setErro(''), tempoEmSegundos * 1000);
  };

  const submeter = () => {
    if (modo === 'login') {
      console.log('Login');
      exibirErro('Ocorreu um erro no login');
    } else {
      console.log('Cadstrar');
      exibirErro('Ocorreu um erro no cadastro');
    }
  };

  return (
    <div className={`flex justify-center items-center h-screen`}>
      <div className={`hidden md:block md:w-1/2 lg:w-2/3`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={`h-screen w-full object-cover`}
          src='https://source.unsplash.com/random'
          alt='Imagem da tela de autenticação'
        />
      </div>

      <div className={`m-10 w-full md:w-1/2 lg:w-1/3`}>
        <h1 className={`text-3xl font-bold mb-5`}>
          {modo === 'login'
            ? 'Entre com sua conta'
            : 'Cadastre-se na plataforma'}
        </h1>

        {/*A div será renderizada se houver erro*/}
        {erro && (
          <div
            className={`flex items-center
            bg-red-400 text-white 
            py-3 px-5 my-2 
            border border-red-700 rounded-lg`}
          >
            {IconeAtencao(7)}
            <span className={`ml-2`}>{erro}</span>
          </div>
        )}

        <AuthInput
          tipo={'email'}
          label={'Email'}
          valor={email}
          valorMudou={setEmail}
          obrigatorio
        />
        <AuthInput
          tipo={'password'}
          label={'Senha'}
          valor={senha}
          valorMudou={setSenha}
          obrigatorio
        />
        <AuthInput
          tipo={'password'}
          label={'Confirmar Senha'}
          valor={senha}
          valorMudou={setSenha}
          obrigatorio={true}
          naoRenderizar={modo === 'login'}
        />
        <button
          className={`
        w-full bg-indigo-500 hover:bg-indigo-400
        text-white rounded-lg px-4 py-3 mt-6`}
          onClick={submeter}
        >
          {modo === 'login' ? 'Entrar' : 'Cadastrar'}
        </button>

        <hr className={`my-6 border-gray-300 w-full`} />

        <button
          className={`
        w-full bg-red-500 hover:bg-red-400
        text-white rounded-lg px-4 py-3`}
          onClick={submeter}
        >
          Entrar com o Google
        </button>

        {modo === 'login' ? (
          <p className={`mt-8`}>
            Novo por aqui?
            <a
              className={`text-blue-500 hover:text-blue-700 font-semibold
              cursor-pointer pl-1`}
              onClick={() => setModo('cadastro')}
            >
              Crie uma conta gratuitamente
            </a>
          </p>
        ) : (
          <p className={`mt-8`}>
            Já tem cadastro?
            <a
              className={`text-blue-500 hover:text-blue-700 font-semibold
              cursor-pointer pl-1`}
              onClick={() => setModo('login')}
            >
              Entre com seu login e senha
            </a>
          </p>
        )}
      </div>
    </div>
  );
};
export default Autenticacao;
