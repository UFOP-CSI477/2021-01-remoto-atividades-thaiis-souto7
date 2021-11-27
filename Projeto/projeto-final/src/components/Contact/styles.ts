import styled from 'styled-components';

export const ContactContainer = styled.div`
    padding-top: 5rem;
    padding-bottom: 5rem;
    font-family: 'DM Sans', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #393939;
    background-color: #F5F7FA;

    @media (max-width: 768px){
        padding-bottom: 20rem;
    }
`;

export const InfoContact = styled.div`
    padding-top: 0.5rem;
    
    @media (max-width: 768px){
        font-size: 0.9rem;
    }
`;

export const BodyContact = styled.div`
    padding-top: 3rem;
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px){
        flex-direction: column;
        display: flex;
    }
`;

export const Map = styled.div`

    iframe {
        width: 30rem;
        height: 25rem;
        border: none;
        border-radius: 0.5rem;

        @media(max-width: 768px) {
            width: 20rem;
            height: 20rem;
        }
    }
`;

export const Form = styled.div`
    padding-left: 5rem;
    text-align: center;
    flex-direction: column;
    

    h3{
        margin-bottom: 2rem;
    }

    @media (max-width: 768px){
        padding: 5rem 0rem 0rem 0rem;
    }

`;

export const FormElement = styled.div`
    
    font-family: 'DM Sans', sans-serif;  

    textarea{
        width: 20rem;
        height: 8rem;
        margin-bottom: 1rem;
        font-family: 'DM Sans', sans-serif;
        padding: 1rem 0rem 0rem 1rem;
        border: solid;
        border-radius: 0.5rem;
        border-width: 0.1rem;
    }

    input{
        width: 20rem;
        height: 3rem;
        margin-bottom: 1rem;
        padding-left: 1rem;
        border: solid;
        border-radius: 0.5rem;
        border-width: 0.1rem;
    }
`;


export const BodyButton = styled.div`
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px){
        flex-direction: column;
    }

`;

export const ButtonPers = styled.button`
    background-color: #183184;
    border-radius: 2rem;
    width: 10rem;
    height: 3rem;
    font-weight: bold;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    transition: 0.5s;
    border: none;
    cursor: pointer;
    
    h4{
        color: white;
        font-weight: normal;
        font-family: 'DM Sans', sans-serif;
    }

    &:hover{
        background-color: #318ada;
    }

    @media (max-width: 768px){
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .75rem;
        width: 10rem;

    }

`;
