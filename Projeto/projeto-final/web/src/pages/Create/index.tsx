import { ChangeEvent, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import {
  CreateContainer,
  HeaderCreate,
  TextHeader,
  CreateForm,
  CreateFormBorder,
  FormElement,
  Divisor,
  DataTable,
  BodyButton,
  ButtonPers,
} from './styles';

interface IAssociate {
  name: string;
  cpf: string;
  date_of_birth: string;
  phone_number: number;
  celphone_number: number;
  email: string;
  chassi: string;
  renavam: string;
  license_plate: string;
  model: string;
  fuel: string;
  year_of_fabrication: number;
  cep: string;
  adress: string;
  city: string;
  state: string;
}

const Create: React.FC = () => {
  const history = useHistory();

  const [associate, setAssociate] = useState<IAssociate>({} as IAssociate);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      setAssociate({ ...associate, [name]: value });
    },
    [associate, setAssociate],
  );

  const handle = useCallback(async () => {
    const response = await api.post('/associates', {
      name: associate.name,
      cpf: associate.cpf,
      date_of_birth: associate.date_of_birth,
      phone_number: associate.phone_number,
      celphone_number: associate.celphone_number,
      email: associate.email,
      chassi: associate.chassi,
      renavam: associate.renavam,
      license_plate: associate.license_plate,
      model: associate.model,
      fuel: associate.fuel,
      year_of_fabrication: associate.year_of_fabrication,
      cep: associate.cep,
      adress: associate.adress,
      city: associate.city,
      state: associate.state,
    });

    if (response.status === 200) {
      console.log(response.data);
      history.push('/adm');
    }
  }, [history, associate]);
  return (
    <CreateContainer id="Create">
      <DataTable>
        <HeaderCreate>
          <TextHeader>
            <h2>CADASTRAR</h2>
          </TextHeader>
        </HeaderCreate>
        <Divisor />

        <CreateForm>
          <FormElement>
            <input
              name="name"
              type="text"
              placeholder="Nome"
              onChange={handleChange}
            />
          </FormElement>
          <FormElement>
            <input
              name="cpf"
              type="text"
              placeholder="CPF"
              onChange={handleChange}
            />
          </FormElement>
          <FormElement>
            <input
              name="date_of_birth"
              type="text"
              placeholder="Data Nascimento"
              onChange={handleChange}
            />
          </FormElement>
        </CreateForm>

        <CreateForm>
          <FormElement>
            <input
              name="phone_number"
              type="text"
              placeholder="Telefone"
              onChange={handleChange}
            />
          </FormElement>
          <FormElement>
            <input
              name="celphone_number"
              type="text"
              placeholder="Celular"
              onChange={handleChange}
            />
          </FormElement>
          <FormElement>
            <input
              name="email"
              type="text"
              placeholder="E-mail"
              onChange={handleChange}
            />
          </FormElement>
        </CreateForm>

        <CreateFormBorder>
          <CreateForm>
            <FormElement>
              <input
                name="chassi"
                type="text"
                placeholder="Chassi"
                onChange={handleChange}
              />
            </FormElement>
            <FormElement>
              <input
                name="renavam"
                type="text"
                placeholder="Renavam"
                onChange={handleChange}
              />
            </FormElement>
            <FormElement>
              <input
                name="license_plate"
                type="text"
                placeholder="Placa"
                onChange={handleChange}
              />
            </FormElement>
          </CreateForm>

          <CreateForm>
            <FormElement>
              <input
                name="model"
                type="text"
                placeholder="Modelo"
                onChange={handleChange}
              />
            </FormElement>
            <FormElement>
              <input
                name="fuel"
                type="text"
                placeholder="Combustível"
                onChange={handleChange}
              />
            </FormElement>
            <FormElement>
              <input
                name="year_of_fabrication"
                type="text"
                placeholder="Ano"
                onChange={handleChange}
              />
            </FormElement>
          </CreateForm>
        </CreateFormBorder>

        <CreateFormBorder>
          <CreateForm>
            <FormElement>
              <input
                name="cep"
                type="text"
                placeholder="CEP"
                onChange={handleChange}
              />
            </FormElement>
            <FormElement>
              <input
                name="adress"
                type="text"
                placeholder="Endereço"
                onChange={handleChange}
              />
            </FormElement>
            <FormElement>
              <input
                name="number"
                type="text"
                placeholder="Número"
                onChange={handleChange}
              />
            </FormElement>
          </CreateForm>

          <CreateForm>
            <FormElement>
              <input
                name="city"
                type="text"
                placeholder="Cidade"
                onChange={handleChange}
              />
            </FormElement>
            <FormElement>
              <input
                name="state"
                type="text"
                placeholder="Estado"
                onChange={handleChange}
              />
            </FormElement>
          </CreateForm>
        </CreateFormBorder>

        <BodyButton>
          <ButtonPers type="button">
            <h4>Limpar</h4>
          </ButtonPers>
          <ButtonPers type="submit" onClick={handle}>
            <h4>Cadastrar</h4>
          </ButtonPers>
        </BodyButton>
      </DataTable>
    </CreateContainer>
  );
};
export default Create;
