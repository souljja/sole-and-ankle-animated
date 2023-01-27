/* eslint-disable no-unused-vars */
import React from 'react';
import styled, {css, keyframes} from 'styled-components';
import {DialogOverlay, DialogContent} from '@reach/dialog';

import {QUERIES, WEIGHTS} from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({isOpen, onDismiss}) => {
    return (
        <Overlay isOpen={isOpen} onDismiss={onDismiss}>
            <Backdrop/>
            <Content aria-label="Menu">
                <Wrapper>
                    <CloseButton onClick={onDismiss}>
                        <Icon id="close"/>
                        <VisuallyHidden>Dismiss menu</VisuallyHidden>
                    </CloseButton>
                    <Filler/>
                    <Nav>
                        <NavLink href="/sale">Sale</NavLink>
                        <NavLink href="/new">New&nbsp;Releases</NavLink>
                        <NavLink href="/men">Men</NavLink>
                        <NavLink href="/women">Women</NavLink>
                        <NavLink href="/kids">Kids</NavLink>
                        <NavLink href="/collections">Collections</NavLink>
                    </Nav>
                    <Footer>
                        <SubLink href="/terms">Terms and Conditions</SubLink>
                        <SubLink href="/privacy">Privacy Policy</SubLink>
                        <SubLink href="/contact">Contact Us</SubLink>
                    </Footer>
                </Wrapper>
            </Content>
        </Overlay>
    );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background-color: transparent;
  justify-content: flex-end;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  
  @media (prefers-reduced-motion: no-preference) {
    will-change: opacity;
    animation: ${fadeIn} 600ms;
  }
`;

const Content = styled(DialogContent)`
  position: relative;
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;

  @media (prefers-reduced-motion: no-preference) {
    will-change: transform;
    animation-name: ${slideIn};
    animation-duration: 300ms;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0, .6, .32, 1);
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (prefers-reduced-motion: no-preference) {
    will-change: opacity;
    animation-delay: 200ms;
    animation-name: ${fadeIn};
    animation-duration: 500ms;
    animation-fill-mode: both;
  }
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
