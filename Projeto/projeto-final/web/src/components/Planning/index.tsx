import Missao from '../../assets/missao.svg';
import Visao from '../../assets/visao.png';
import Valores from '../../assets/valores.png';

import {
  PlanningContainer,
  PlanningCardsContainer,
  CardsContainer,
  CellDivide,
} from './styles';

export function Planning() {
  return (
    <PlanningContainer id="Planning">
      <PlanningCardsContainer>
        <CardsContainer>
          <img src={Visao} width="80" alt="car" />
          <h2>VISÃO</h2>
          <CellDivide />
          <h5>
            Ser referência no Brasil com o reconhecimento pela excelência dos
            serviços prestados aos associados e colaboradores, garantindo
            tranquilidade a um número cada vez maior de pessoas.
          </h5>
        </CardsContainer>

        <CardsContainer>
          <img src={Valores} width="80" alt="clock" />
          <h2>VALORES</h2>
          <CellDivide />
          <h5>- Respeito. </h5>
          <h5>- Ética; </h5>
          <h5>- Compromisso; </h5>
          <h5>- Qualidade; </h5>
          <h5>- Dedicação. </h5>
          <h5>- Responsabilidade social.</h5>
        </CardsContainer>

        <CardsContainer>
          <img src={Missao} width="130" alt="tool" />
          <h2>MISSÃO</h2>
          <CellDivide />
          <h5>
            Garantir a tranquilidade dos associados através de serviços de
            qualidade, proporcionando segurança e conforto. E, ademais, nos
            comprometendo com a satisfação de todos os envolvidos.
          </h5>
        </CardsContainer>
      </PlanningCardsContainer>
    </PlanningContainer>
  );
}
