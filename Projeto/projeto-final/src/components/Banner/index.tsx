import {
  BannerContainer,
  BannerText,
  BodyButton,
  ButtonPers,
} from './styles';

export function Banner() {
  return (

    <BannerContainer id="banner">
      <BannerText>
        <h1>A sua melhor </h1>
        <h1>PROTEÇÃO</h1>
        <text>Não conte com a sorte para cuidar do seu bem! </text>
        <text>Entre em contato com um de nossos consultores</text>
      </BannerText>
      <BodyButton>
        <ButtonPers>
          <h4>FAÇA UMA COTAÇÃO PELO WHATSAPP</h4>
        </ButtonPers>
      </BodyButton>
    </BannerContainer>

  );
}
