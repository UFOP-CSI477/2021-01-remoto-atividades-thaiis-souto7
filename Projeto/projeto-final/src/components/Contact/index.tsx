/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
import { IoLocation } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import {
    ContactContainer,
    InfoContact,
    BodyContact,
    Map, 
    Form,
    FormElement,
    BodyButton,
    ButtonPers
} from './styles';

export function Contact() {
    return (

        <ContactContainer id="contact"> 

            <h1>CONTATO</h1>
            <InfoContact>
                <h4><IoLocation color="183184" size="1.1rem" />&nbsp;Rua 36, 115 - Loanda, João Monlevade - MG</h4>
            </InfoContact>
            <InfoContact>
                <h4><BsFillTelephoneFill color="183184" size="1rem" />&nbsp;(31) 3467-0000 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <MdEmail color="183184" size="1.2rem" />&nbsp;contato@protecao.com.br</h4>
            </InfoContact>
            
            <BodyContact>
                <Map>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.0888822487177!2d-43.169894385647275!3d-19.836191786656407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa507511efdbbd3%3A0x55a7ef3c198b9753!2sInstituto%20de%20Ci%C3%AAncias%20Exatas%20e%20Aplicadas%20-%20ICEA%2FUFOP!5e0!3m2!1spt-BR!2sbr!4v1637710292934!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
                </Map>

                <Form>
                    <h3>ENVIE-NOS UMA MENSAGEM</h3>
                    <FormElement>
                    <input type="text" placeholder="Digite seu nome"></input>
                    </FormElement>
                    <FormElement>
                    <input type="text" placeholder="Digite seu e-mail"></input>
                    </FormElement>
                    <FormElement>
                    <textarea placeholder="Digite sua mensagem"></textarea>
                    </FormElement>
                    <BodyButton>
                        <ButtonPers>
                            <h4>ENVIAR</h4>
                        </ButtonPers>
                    </BodyButton>
                </Form>
            </BodyContact>

        </ContactContainer>
    );
}