import React, { useRef, useCallback, useState } from 'react';

import { Form } from './styled';
import Modal from '../Modal';

interface UserProps {
  id: number;
  name: string;
  email: string;
  cpf: string;
  endereço: {
    cep: string;
    rua: string;
    bairro: string;
    cidade: string;
  }
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddUser: (users: Omit<UserProps, 'id'>) => void;
}

const ModalAddUser: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddUser,
}) => {
  const formRef = useRef(null);
  const [form, setForm] = useState<UserProps>({
    id: 1234,
    name: '',
    email: '',
    cpf: '',
    endereço: {
      cep: '',
      bairro: '',
      rua: '',
      cidade: '',
    },
  });

  const handleSubmit = useCallback(
    async (users: UserProps) => {
      const {
        id, name, email, endereço: {
          cep,
          bairro,
          rua,
          cidade,
        }, cpf,
      } = users;
      handleAddUser({
        name,
        email,
        cpf,
        endereço: {
          cep,
          bairro,
          rua,
          cidade,
        },
      });
      setForm({
        id,
        name: users.name,
        email: users.email,
        endereço: {
          cep: users.endereço.cep,
          bairro: users.endereço.bairro,
          rua: users.endereço.rua,
          cidade: users.endereço.cidade,
        },
        cpf: users.cpf,
      });
      setIsOpen();
    },
    [handleAddUser, setIsOpen],
  );

  function changeForm(e: any) {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={() => handleSubmit(form)}>
        <h1>Novo Usuário</h1>

        <Form.Input name="name" placeholder="Nome completo" onChange={changeForm} value={form.name} />
        <Form.Input name="cpf" type="number" onChange={changeForm} placeholder="CPF" value={form.cpf} />
        <Form.Input name="email" type="email" onChange={changeForm} placeholder="Melhor e-mail" value={form.email} />
        <p>Endereço</p>
        <Form.Input name="cep" type="number" onChange={changeForm} placeholder="CEP" value={form.endereço.cep} />
        <Form.Input name="rua" type="text" onChange={changeForm} readOnly placeholder="Rua" value={form.endereço.rua} />
        <Form.Input name="bairro" type="text" onChange={changeForm} readOnly placeholder="Bairro" value={form.endereço.bairro} />
        <Form.Input name="cidade" type="text" onChange={changeForm} readOnly placeholder="Cidade" value={form.endereço.cidade} />

        <button type="submit">
          <p className="text">Adicionar Usuário</p>

        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddUser;
