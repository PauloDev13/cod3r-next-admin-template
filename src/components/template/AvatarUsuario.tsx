import Link from 'next/link';
import useAuthData from '../../data/hook/useAuthData';

interface AvatarUsuarioProps {
  className?: string
}

const AvatarUsuario = (props: AvatarUsuarioProps) => {
const {usuario} = useAuthData()

  return (
    <Link href={`/perfil`} passHref>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`h-10 w-10 rounded-full cursor-pointer
          ${props.className}`}
        alt={`Avatar do usuário`}
        src={usuario?.imagemUrl ?? '/images/avatar.svg'}/>
    </Link>
  )
}
export default AvatarUsuario;