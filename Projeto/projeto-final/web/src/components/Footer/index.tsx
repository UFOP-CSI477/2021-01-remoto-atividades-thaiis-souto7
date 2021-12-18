import {
  FaWhatsappSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from 'react-icons/fa';

import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { FooterContainer, MessageFooter, CopyrightFooter } from './styles';

export function Footer() {
  return (
    <FooterContainer id="footer">
      <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5531994680027">
        <FaWhatsappSquare color="#183184" size="3rem" />
      </a>
      <a href="https://www.facebook.com/thaiisdam">
        <FaFacebookSquare color="#183184" size="3rem" />
      </a>
      <a href="https://www.instagram.com/thaiis_souto/">
        <FaInstagramSquare color="#183184" size="3rem" />
      </a>

      <MessageFooter>
        <h3>Para qualquer lugar que você for, vá com segurança e proteção!</h3>
      </MessageFooter>
      <CopyrightFooter>
        <h3>
          <AiOutlineCopyrightCircle color="#7f7f7f" size="1rem" /> 2021 - Todos
          os direitos reservados
        </h3>
      </CopyrightFooter>
    </FooterContainer>
  );
}
