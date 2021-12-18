import styled from 'styled-components';
import banner from '../../assets/header.png';
import bannerMobile from '../../assets/header.png';

export const BannerContainer = styled.div`
    
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-size: 100%;
    height: 38rem;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;

    h1{
        text-align: left;
        color: #393939;
        font-weight: bold;
        font-size: 3rem;
        font-family: 'DM Sans', sans-serif;
        margin-bottom: 0.5rem;
    }

    text{
        text-align: left;
        color: #7f7f7f;
        font-size: 1rem;
        font-weight: lighter;
        font-family: 'DM Sans', sans-serif;
        margin-bottom: 0.5rem;
    }

    @media (max-width: 768px){
        background-image: url(${bannerMobile});
        background-repeat: no-repeat;
        background-size: 100%;
        height: 29rem;
        margin-top: 4rem;

        h1{
            margin-left: -3rem;
            font-size: 1.7rem;
            font-weight: bold;
            text-align: left;
        }

        text{
            margin-left: -3rem;
            font-size: 0.9rem;
            font-weight: lighter;
        }

    }

`;

export const BannerText = styled.div`
    margin: 8rem 0rem 2rem 6rem;
    flex-direction: column;
    display: flex;
    justify-content: space-evenly;
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
    width: 20rem;
    height: 3rem;
    font-weight: bold;
    margin: 0rem 0rem 0rem 6rem;
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
        width: 18rem;
        margin-left: 3rem;
    }

`;
