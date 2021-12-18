import Car from '../../assets/icon1.svg';
import Clock from '../../assets/icon2.svg';
import Tool from '../../assets/icon3.svg';

import {
  ServicesContainer,
  ServicesCardsContainer,
  CardsContainer,
} from './styles';

export function Services() {
  return (
    <ServicesContainer id="services">
      <ServicesCardsContainer>
        <CardsContainer>
          <img src={Car} width="80" alt="car" />
          <h2>Coberturas</h2>
          <h5>- Perda total; </h5>
          <h5>- Roubo/Furto; </h5>
          <h5>- Terceiros até 30 mil; </h5>
          <h5>- Fenômenos da natureza; </h5>
          <h5>- Colisão, capotamento e incêndio. </h5>
        </CardsContainer>

        <CardsContainer>
          <img src={Clock} width="80" alt="clock" />
          <h2>Assistência 24H</h2>
          <h5>- Chaveiro; </h5>
          <h5>- Pane seca; </h5>
          <h5>- Troca de pneu; </h5>
          <h5>- Reboque com 500km*; </h5>
          <h5>- Socorro elétrico e mecânico. </h5>
        </CardsContainer>

        <CardsContainer>
          <img src={Tool} width="80" alt="tool" />
          <h2>Serviços Auxiliares</h2>
          <h5>- Táxi; </h5>
          <h5>- Carro Reserva; </h5>
          <h5>- Hospedagem em hotel; </h5>
          <h5>- Transporte para retorno à domicilio; </h5>
          <h5>- Cobertura em todo território nacional. </h5>
        </CardsContainer>
      </ServicesCardsContainer>
    </ServicesContainer>
  );
}
