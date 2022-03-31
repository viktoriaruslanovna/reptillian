import { useActions } from '../../../hooks/useActions';
import { userStorage } from '../../../storage/userStorage';
import Button from '../../elements/Button';
import H1 from '../../elements/H1';

function AccountPage() {
  const { unauthenicate } = useActions();
  const user = userStorage.get();

  const logout = () => {
    unauthenicate();
  };
  return (
    <div>
      <Button onClick={logout}>Выйти</Button>
      <H1 props={'Моя страница'} />
    </div>
  );
}
export default AccountPage;
