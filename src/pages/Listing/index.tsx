import React, { useState, useEffect } from 'react';
import { Button, Table } from 'semantic-ui-react';

import Header from '../../components/Header';
import ModalAddUser from '../../components/ModalAdd';

import api from '../../service/api';

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
  };
}

const Listing: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  async function getUsers(): Promise<any> {
    const response = await api.get('/usuarios');
    const usersList = response.data;
    setUsers(usersList);
  }

  useEffect(() => {
    getUsers();
  }, []);

  async function handleAddUser(users: Omit<UserProps, 'id'>): Promise<void> {
    try {
      const {
        name,
        email,
        cpf,
        endereço: {
          cep, rua, bairro, cidade,
        },
      } = users;

      const response = await api.post('/usuarios', {
        id: 2,
        name,
        email,
        cpf,
        endereço: {
          cep,
          rua,
          bairro,
          cidade,
        },
      });

      setUsers((state) => [...state, response.data]);
    } catch (err) {
      console.log(err);
    }
  }

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  return (
    <>
      <Header />
      <Button type="button" onClick={() => toggleModal()} size="large" style={{ padding: '1.5rem', margin: '2rem .5rem' }}>
        Adicionar Usuário
      </Button>
      <ModalAddUser
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddUser={handleAddUser}
      />
      <div style={{ width: '100%' }}>

        <Table color="orange" style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <Table.Header style={{ display: 'flex', flexDirection: 'row' }}>
            <Table.Row style={{ display: 'flex', flexDirection: 'row' }}>
              <Table.HeaderCell width="6">Nome</Table.HeaderCell>
              <Table.HeaderCell width="6">CPF</Table.HeaderCell>
              <Table.HeaderCell>E-mail</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body style={{ display: 'flex' }}>
            {users.map((user: any) => (
              <>
                <Table.Row>
                  <Table.Cell>{user.name}</Table.Cell>
                  <Table.Cell>{user.cpf}</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                </Table.Row>
              </>
            ))}
            <Table.Row />
          </Table.Body>
        </Table>
      </div>

    </>
  );
};

export default Listing;
