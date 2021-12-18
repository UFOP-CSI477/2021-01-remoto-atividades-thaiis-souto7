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
            <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5531994680027">
              <h4>ÁREA ADMINISTRATIVA</h4>
            </a>
          </ButtonPers>
      </BodyButton>
    </BannerContainer>

  );
}
