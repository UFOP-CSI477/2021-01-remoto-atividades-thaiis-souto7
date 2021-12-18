import { BsCheck } from 'react-icons/bs';

import { AboutUsContainer, AboutUsText } from './styles';

export function AboutUs() {
  return (
    <AboutUsContainer id="AboutUs">
      <AboutUsText>
        <h1>SOBRE A EMPRESA</h1>

        <text>
          <BsCheck color="#183184" size="1.5rem" />A Proteção Veicular surgiu
          através da união de pessoas{' '}
        </text>
        <text>com o mesmo ideal: proteger veículos e bens dos membros</text>
        <text>
          envolvidos, buscando mais benefícios e gerando tranquilidade
        </text>
        <text>aos associados. </text>

        <text>
          <BsCheck color="#183184" size="1.5rem" />
          Contamos com uma equipe de parceiros consolidados em todo o
        </text>
        <text>
          Brasil e aplicamos nosso conhecimento e experiência, a fim de
        </text>
        <text>garantir aos associados tranquilidade, segurança e a melhor</text>
        <text>proteção para seus itens de valor.</text>

        <text>
          <BsCheck color="#183184" size="1.5rem" />
          Nossa proteção é eficaz e abrangente, com cobertura para veículos
        </text>
        <text>
          leves, motos e utilitários, através de avaliação pela tabela FIPE.
        </text>
        <text>
          Proteção independente de idade, localização ou finalidade de uso.
        </text>
      </AboutUsText>
    </AboutUsContainer>
  );
}
