import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { BannerContainer, BannerText, BodyButton, ButtonPers } from './styles';

const Banner: React.FC = () => {
  const history = useHistory();

  const handle = useCallback(() => {
    history.push('/login');
  }, [history]);

  return (
    <BannerContainer id="banner">
      <BannerText>
        <h1>A sua melhor </h1>
        <h1>PROTEÇÃO</h1>
        <text>Não conte com a sorte para cuidar do seu bem! </text>
        <text>Entre em contato com um de nossos consultores</text>
      </BannerText>
      <BodyButton>
        <ButtonPers type="button" onClick={handle}>
          <h4>ÁREA ADMINISTRATIVA</h4>
        </ButtonPers>
      </BodyButton>
    </BannerContainer>
  );
};

export { Banner };
