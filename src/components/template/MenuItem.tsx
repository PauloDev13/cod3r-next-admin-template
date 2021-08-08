import Link from 'next/link';

interface MenuItemProps {
  url?: string;
  texto: string;
  icone: any;
  className?: string;
  onClick?: (event: unknown) => void;
}

const MenuItem = (props: MenuItemProps) => {
  const renderizarLink = () => {
    return (
      <a
        className={`flex flex-col justify-center items-center h-20 w-20 text-gray-600 ${props.className}`}
      >
        {props.icone}
        <span className={`text-xs font-light`}>{props.texto}</span>
      </a>
    );
  };
  return (
    <li onClick={props.onClick} className={`hover:bg-gray-100 cursor-pointer`}>
      {props.url ? (
        <Link href={props.url}>{renderizarLink()}</Link>
      ) : (
        renderizarLink()
      )}
    </li>
  );
};
export default MenuItem;
