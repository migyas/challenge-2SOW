import React, {
  useState,
  useContext,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import * as Yup from 'yup';

import { AuthContext } from '../../context/AuthContext';

import * as S from './styled';

interface SignInFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const history = useHistory();
  const [form, setForm] = useState({ email: '', password: '' });
  const { signIn } = useContext(AuthContext);
  const formRef = useRef();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha Obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        signIn({
          email: data.email,
          password: data.password,
        });
        history.push('/');
      } catch (err) {
        console.log(err);
      }
    },
    [signIn, history],
  );

  function changeForm(e: any) {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  }

  return (
    <S.Container>
      <S.Content>
        <h1>Login</h1>

        <Form
          size="large"
          style={{ width: '100%', padding: '2rem' }}
          onSubmit={() => handleSubmit(form)}
          ref={formRef}
        >
          <Form.Input
            label="E-mail"
            name="email"
            onChange={changeForm}
            size="big"
            type="email"
            placeholder="E-mail"
            value={form.email}
          />
          <Form.Input
            label="Senha"
            name="password"
            onChange={changeForm}
            size="big"
            type="password"
            placeholder="Senha"
            value={form.password}
          />

          <Button type="submit">Login</Button>
        </Form>
      </S.Content>
    </S.Container>
  );
};
export default Login;
