/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import React, { useState, useEffect } from 'react';

import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import logoImg from '../../assets/logo.png';

import {
  Container,
  ContainerLogo,
  ContainerMenu,
  ContainerMenuMobile,
} from './styles';

export function Navbar() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [icon, setIcon] = useState(false);

  let prevScrollPosition = window.pageYOffset;

  // Navigation scroll effect
  function handleMoveToSection(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    value: number,
  ) {
    event.preventDefault();

    // On click, set the X icon to the BARS and close navbar
    if (screenSize <= 900 && icon === true) {
      setIcon(false);
    }

    window.scroll({
      top: value,
      behavior: 'smooth',
    });
  }

  // Switch between desktop menu and menu icon, furthermore it changes icon on click
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function SwitchMenuIcon() {
    if (screenSize <= 900) {
      if (icon === false) {
        return (
          <IoMenuOutline
            onClick={() => {
              setIcon(!icon);
            }}
          />
        );
      }
      return (
        <IoCloseOutline
          onClick={() => {
            setIcon(!icon);
          }}
        />
      );
    }

    return (
      <ul className="standart-menu">
        <li>
          <a
            href="Banner"
            onClick={e => {
              handleMoveToSection(
                e,
                document.getElementById('banner')?.offsetTop!,
              );
            }}
          >
            Início
          </a>
        </li>
        <li>
          <a
            href="Services"
            onClick={e => {
              handleMoveToSection(
                e,
                document.getElementById('services')?.offsetTop!,
              );
            }}
          >
            Serviços
          </a>
        </li>
        <li>
          <a
            href="AboutUs"
            onClick={e => {
              handleMoveToSection(
                e,
                document.getElementById('AboutUs')?.offsetTop!,
              );
            }}
          >
            Sobre Nós
          </a>
        </li>
        <li>
          <a
            href="Partners"
            onClick={e => {
              handleMoveToSection(
                e,
                document.getElementById('Partners')?.offsetTop!,
              );
            }}
          >
            Parceiros
          </a>
        </li>
        <li>
          <a
            href="contact"
            onClick={e => {
              handleMoveToSection(
                e,
                document.getElementById('contact')?.offsetTop!,
              );
            }}
          >
            Contato
          </a>
        </li>
      </ul>
    );
  }

  // Calls the component SwitchMenuIcon to verify if the screen suports the desktop or mobile menu
  useEffect(() => {
    SwitchMenuIcon();
  }, [SwitchMenuIcon, screenSize]);

  // Apply all effects when the menu is opened or closed
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const menu = document.getElementsByClassName('mobile-menu');
    const menuItens = menu[0].getElementsByTagName('li');
    const menuLine = navbar!.getElementsByTagName('hr');

    if (icon === true) {
      // Expand mobile menu
      navbar!.classList.add('navbar-expanded');
      menu[0].classList.add('active');

      // Make hr tag visible after 50ms
      setTimeout(() => {
        menuLine[0].classList.add('active');
      }, 100);

      // Gradually make li tags visible after hr appears and navbar expands
      for (let index = 0; index < menuItens.length; index += 1) {
        setTimeout(() => {
          menuItens[index].classList.add('active');
        }, 100 + index * 200);
      }
    } else {
      // Disappear with li tags gradually
      for (let index = 0; index < menuItens.length; index += 1) {
        setTimeout(() => {
          menuItens[menuItens.length - 1 - index].classList.remove('active');
        }, 50 + index * 100);
      }

      // Wait all the li tags disappear to disappear the hr tag
      setTimeout(() => {
        menuLine[0].classList.remove('active');
      }, 300);

      // Wait all the li tags and hr tag disappear to collapse navbar
      setTimeout(() => {
        menu[0].classList.remove('active');
        navbar!.classList.remove('navbar-expanded');
      }, 400);
    }
  }, [icon]);

  // Set the screen size of the current device and if the X icon is applying, set the icon to BARS
  window.onresize = () => {
    setScreenSize(window.innerWidth);

    if (screenSize > 900) {
      setIcon(false);
    }
  };

  // ScrollUp effect and active navlink
  window.onscroll = () => {
    // ScrollUp effect
    const navbar = document.getElementById('navbar');
    const currentScrollPosition = window.pageYOffset;

    if (prevScrollPosition > currentScrollPosition) {
      navbar!.classList.remove('hidden');
    } else {
      setIcon(false);
      navbar!.classList.add('hidden');
    }

    prevScrollPosition = currentScrollPosition;

    // Apply and remove effect active on li tag
    const containers = navbar!.getElementsByTagName('div');
    let menuLocation = 0;

    if (screenSize <= 900) {
      menuLocation = 3;
    } else {
      menuLocation = 1;
    }

    const menu = containers[menuLocation].getElementsByTagName('ul');
    const menuOptions = menu[0].getElementsByTagName('li');
    const activedItem = menu[0].getElementsByClassName('link-active');

    if (activedItem[0] !== undefined) {
      activedItem[0].classList.remove('link-active');
    }

    if (
      currentScrollPosition >= document.getElementById('banner')!.offsetTop &&
      currentScrollPosition < document.getElementById('services')?.offsetTop!
    ) {
      menuOptions[0].classList.add('link-active');
    } else if (
      currentScrollPosition >= document.getElementById('services')!.offsetTop &&
      currentScrollPosition < document.getElementById('AboutUs')?.offsetTop!
    ) {
      menuOptions[1].classList.add('link-active');
    } else if (
      currentScrollPosition >= document.getElementById('AboutUs')!.offsetTop &&
      currentScrollPosition < document.getElementById('Partners')?.offsetTop!
    ) {
      menuOptions[2].classList.add('link-active');
    } else if (
      currentScrollPosition >= document.getElementById('Partners')!.offsetTop &&
      currentScrollPosition < document.getElementById('contact')?.offsetTop!
    ) {
      menuOptions[3].classList.add('link-active');
    } else if (
      currentScrollPosition >= document.getElementById('contact')!.offsetTop
    ) {
      menuOptions[4].classList.add('link-active');
    }
  };

  return (
    <Container id="navbar">
      <ContainerLogo>
        <a
          href="banner"
          onClick={e => {
            handleMoveToSection(e, 0);
          }}
        >
          <img src={logoImg} alt="Proteção Veicular" />
        </a>
      </ContainerLogo>
      <ContainerMenu>
        <SwitchMenuIcon />
      </ContainerMenu>
      <div className="break" />
      <hr />
      <ContainerMenuMobile>
        <ul className="mobile-menu">
          <li>
            <a
              href="Banner"
              onClick={e => {
                handleMoveToSection(
                  e,
                  document.getElementById('banner')?.offsetTop!,
                );
              }}
            >
              INÍCIO
            </a>
          </li>
          <li>
            <a
              href="Services"
              onClick={e => {
                handleMoveToSection(
                  e,
                  document.getElementById('services')?.offsetTop!,
                );
              }}
            >
              SERVIÇOS
            </a>
          </li>
          <li>
            <a
              href="AboutUs"
              onClick={e => {
                handleMoveToSection(
                  e,
                  document.getElementById('AboutUs')?.offsetTop!,
                );
              }}
            >
              SOBRE NÓS
            </a>
          </li>
          <li>
            <a
              href="Partners"
              onClick={e => {
                handleMoveToSection(
                  e,
                  document.getElementById('Partners')?.offsetTop!,
                );
              }}
            >
              PARCEIROS
            </a>
          </li>
          <li>
            <a
              href="Contact"
              onClick={e => {
                handleMoveToSection(
                  e,
                  document.getElementById('contact')?.offsetTop!,
                );
              }}
            >
              CONTATO
            </a>
          </li>
        </ul>
      </ContainerMenuMobile>
    </Container>
  );
}
