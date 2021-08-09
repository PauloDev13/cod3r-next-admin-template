import { NextPage } from 'next';

interface AuthInputProps {
  label: string;
  valor: any;
  tipo?: 'text' | 'email' | 'password';
  obrigatorio?: boolean;
  naoRenderizar?: boolean;
  valorMudou: (novoValor: string) => void;
}

const AuthInput: NextPage<AuthInputProps> = ({
  label,
  valor,
  tipo,
  obrigatorio,
  naoRenderizar,
  valorMudou,
}) => {
  return naoRenderizar ? null : (
    <div className={`flex flex-col mt-4`}>
      <label>{label}</label>
      <input
        className={`px-4 py-3 rounded-lg bg-gray-200 mt-2
          border focus:border-blue-500 focus:bg-white focus:outline-none`}
        type={tipo ?? 'text'}
        value={valor}
        onChange={e => valorMudou?.(e.target.value)}
        required={obrigatorio}
      />
    </div>
  );
};
export default AuthInput;
