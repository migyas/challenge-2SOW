import React, { useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import { AuthContext } from '../../context/AuthContext';

import * as S from './styled';

const Header: React.FC = () => {
  const history = useHistory();
  const { signOut, name } = useContext(AuthContext);

  const handleSignOut = useCallback(() => {
    signOut();
    history.push('/login');
  }, [history, signOut]);
  return (
    <S.Container>
      <div>
        <h1>SisCad</h1>
      </div>
      <div>{name}</div>

      <Button type="button" size="large" onClick={() => handleSignOut()}>Logout</Button>

    </S.Container>
  );
};
export default Header;
