import MenuItem from './MenuItem';
import { IconeAjustes, IconeCasa, IconeSino } from '../icons';
import Logo from './Logo';

const MenuLateral = () => {
  return (
    <aside>
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-800 h-20 w-20`}
      >
        <Logo />
      </div>
      <MenuItem url={'/'} texto={'Inicio'} icone={IconeCasa} />
      <MenuItem url={'/ajustes'} texto={'Ajustes'} icone={IconeAjustes} />
      <MenuItem
        url={'/notificacoes'}
        texto={'Notificações'}
        icone={IconeSino}
      />
    </aside>
  );
};
export default MenuLateral;
