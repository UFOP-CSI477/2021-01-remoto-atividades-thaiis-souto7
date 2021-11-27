import styled from 'styled-components';

export const Container = styled.div`
    
    background-color: #ffffff;
    position: fixed;
    top: 0;
    width: 100%;
    height: 4.5rem;
    padding: 0.5rem 2rem;
    z-index: 999;

    background-color: #ffffff;
    color: #7f7f7f;

    font-family: DM Sans, sans-serif;
    font-weight: 500;

    transition: all 0.5s;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    hr {
        opacity: 0;

        transition: all 0.5s;

        position: absolute;
        top: 5rem;
        left: 0;

        height: 2px;
        width: 100%;

        &.active {
            opacity: 1;
        }
    }

    a {
        color: #7f7f7f;
        transition: all 0.2s;
    }

    a:hover {
        color: #183184;
        opacity: 0.9;
    }

    .break {
        flex-basis: 100%;
        height: 0;
    }
    
    &.navbar-expanded {
        height: 16.5rem;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        padding: 0.5rem 1.5rem 1.5rem 0.5rem;
    }

    &.hidden {
        top: -80px;
    }

    @media (max-width: 768px) {
        padding: 0.5rem 1.5rem 0.5rem 0.5rem;
    }
`;

export const ContainerLogo = styled.div`
    display: flex;
    justify-content: flex-start;

    a {
        height: 4rem;
    }
    
    img {
        max-width: auto;
        height: 100%;

        cursor: default;

        transition: transform 0.5s;
    }

    @media (max-width: 320px) {
        width: calc(100% - 1.5rem);
    }

    @media (min-width: 768px) {
        img:hover {
            transform: scale(1.05);
            cursor: pointer;
        }
    }
`;

export const ContainerMenu = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    max-height: 4rem;

    font-size: 1.5rem;

    ul {
        display: flex;
        list-style: none;

        font-size: 1.125rem;
    }

    li {
        margin-right: 2rem;
        cursor: pointer;
        position: relative;
        transition: all 0.25s;

        &:last-child {
            margin-right: 0rem;
        }

        &:after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            -webkit-transform: translateX(0) scaleX(0);
            transform: translateX(0) scaleX(0);
            width: 100%;
            height: 2px;
            background-color: #183184;
            -webkit-transition: transform 250ms;
            transition: transform 250ms;
        }

        &:nth-child(3):after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -3px;
            -webkit-transform: translateX(0) scaleX(0);
            transform: translateX(0) scaleX(0);
            width: 100%;
            height: 2px;
            background-color: #183184;
            -webkit-transition: transform 250ms;
            transition: transform 250ms;
        }

        &:hover:after{
            -webkit-transform: translateX(0) scaleX(1);
            transform: translateX(0) scaleX(1);
        }

        &.link-active {

            a {
                position: relative;
                color: #183184;
                opacity: 0.9;
            }

            a:after {
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 2px;
                background-color: #183184;
            }

            &:nth-child(3) {
                a:after {
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: -3px;
                    width: 100%;
                    height: 2px;
                    background-color: #183184;
                }
            }
        }
    }
`;

export const ContainerMenuMobile = styled.div`
    width: 100%;

    ul {
        display: none;
        flex-direction: column;
        align-items: center;

        margin-top: 1.5rem;

        list-style: none;
        font-size: 1.125rem;

        &.active {
            display: flex;
        }
    }

    li {
        transition: all 0.2s;
        opacity: 0;

        & + li {
            margin-top: 0.5rem;
        }

        &:active {
            filter: (0.9);
            color: #183184;
        }

        &.active {
            opacity: 1;
        }

        &.link-active {
            a {
                color: #183184;
            }
        }
    }
`;
