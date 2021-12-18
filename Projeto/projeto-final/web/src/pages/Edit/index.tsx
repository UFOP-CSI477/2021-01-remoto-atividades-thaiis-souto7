import {
  EditContainer,
  HeaderEdit,
  TextHeader,
  EditForm,
  EditFormBorder,
  FormElement,
  Divisor,
  DataTable,
  BodyButton,
  ButtonPers,
} from './styles';

const Edit: React.FC = () => {
  return (
    <EditContainer id="Edit">
      <DataTable>
        <HeaderEdit>
          <TextHeader>
            <h2>EDITAR</h2>
          </TextHeader>
        </HeaderEdit>
        <Divisor />

        <EditForm>
          <FormElement>
            <input type="text" placeholder="Nome" />
          </FormElement>
          <FormElement>
            <input type="text" placeholder="CPF" />
          </FormElement>
          <FormElement>
            <input type="text" placeholder="Data Nascimento" />
          </FormElement>
        </EditForm>

        <EditForm>
          <FormElement>
            <input type="text" placeholder="Telefone" />
          </FormElement>
          <FormElement>
            <input type="text" placeholder="Celular" />
          </FormElement>
          <FormElement>
            <input type="text" placeholder="E-mail" />
          </FormElement>
        </EditForm>

        <EditFormBorder>
          <EditForm>
            <FormElement>
              <input type="text" placeholder="Chassi" />
            </FormElement>
            <FormElement>
              <input type="text" placeholder="Renavam" />
            </FormElement>
            <FormElement>
              <input type="text" placeholder="Placa" />
            </FormElement>
          </EditForm>

          <EditForm>
            <FormElement>
              <input type="text" placeholder="Modelo" />
            </FormElement>
            <FormElement>
              <input type="text" placeholder="Combustível" />
            </FormElement>
            <FormElement>
              <input type="text" placeholder="Ano" />
            </FormElement>
          </EditForm>
        </EditFormBorder>

        <EditFormBorder>
          <EditForm>
            <FormElement>
              <input type="text" placeholder="CEP" />
            </FormElement>
            <FormElement>
              <input type="text" placeholder="Endereço" />
            </FormElement>
            <FormElement>
              <input type="text" placeholder="Número" />
            </FormElement>
          </EditForm>

          <EditForm>
            <FormElement>
              <input type="text" placeholder="Bairro" />
            </FormElement>
            <FormElement>
              <input type="text" placeholder="Cidade" />
            </FormElement>
            <FormElement>
              <input type="text" placeholder="Estado" />
            </FormElement>
          </EditForm>
        </EditFormBorder>

        <BodyButton>
          <ButtonPers type="button">
            <h4>Limpar</h4>
          </ButtonPers>
          <ButtonPers type="button">
            <h4>Salvar</h4>
          </ButtonPers>
        </BodyButton>
      </DataTable>
    </EditContainer>
  );
};
export default Edit;
