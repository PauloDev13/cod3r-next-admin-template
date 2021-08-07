import MenuItem from './MenuItem';
import { IconeAjustes, IconeCasa, IconeSino } from '../icons';

const MenuLateral = () => {
  return (
    <aside>
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
