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
  handleUpdateUser: (users: Omit<UserProps, 'id'>) => void;
  editingUser: UserProps;
}

const ModalEditFood: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  editingUser,
  handleUpdateUser,
}) => {
  const formRef = useRef(null);
  const [form, setForm] = useState<UserProps[]>([]);

  const handleSubmit = useCallback(
    async (data: UserProps) => {
      handleUpdateUser(data);
      setIsOpen();
    },
    [handleUpdateUser, setIsOpen],
  );

  function changeForm(e: any) {
    const { name, value } = e.target;
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingUser}>
        <h1>Editar Prato</h1>

        <Form.Input name="name" placeholder="Nome completo" onChange={changeForm} value={editingUser.name} />
        <Form.Input name="cpf" type="number" onChange={changeForm} placeholder="CPF" value={editingUser.cpf} />
        <Form.Input name="email" type="email" onChange={changeForm} placeholder="Melhor e-mail" value={editingUser.email} />
        <p>Endereço</p>
        <Form.Input name="cep" type="number" onChange={changeForm} placeholder="CEP" value={editingUser.endereço.cep} />
        <Form.Input name="rua" type="text" onChange={changeForm} readOnly placeholder="Rua" value={editingUser.endereço.rua} />
        <Form.Input name="bairro" type="text" onChange={changeForm} readOnly placeholder="Bairro" value={editingUser.endereço.bairro} />
        <Form.Input name="cidade" type="text" onChange={changeForm} readOnly placeholder="Cidade" value={editingUser.endereço.cidade} />
        <button type="submit">
          <div className="text">Editar Prato</div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditFood;
