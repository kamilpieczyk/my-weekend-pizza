import React, { FunctionComponent } from 'react';
import { FilterLeft } from 'react-bootstrap-icons';
import language from 'language-sources';

import { ViewComponent } from './@navbar.t';
import { Container, PizzaLogoContainer } from './navbar.styles';
import Cart from 'components/UI/cart';
import Separator from 'components/UI/separator';
import Button from 'components/UI/button';
import MainMenu from 'components/main-menu';
import SignInMenu from 'components/sign-in-menu';
import SignUpMenu from 'components/sign-up-menu';
import UserButton from 'components/UI/user-button';
import UserMenu from 'components/user-menu';

const View: FunctionComponent<ViewComponent> = ({ handlers, state, refs }) => {
  return (
    <Container isScrolled={state.isPageScrolled}>
      <FilterLeft size='40px' onClick={handlers.handleMainMenuButton} />
      <Separator width={20} />
      <Cart iconSize={20} numberSize={20} />
      <Separator width={20} />
      {state.isUserLoggedState ? (
        <div ref={refs.userButton}>
          <UserButton email={state.emailState} onClick={handlers.handleUserMenuButton} />
        </div>
      ) : (
        <>
          <div ref={refs.signInButton}>
            <Button text={language.navbar.signIn} onClick={handlers.handleSignInMenuButton} />
          </div>
          <Separator width={20} />
          <div ref={refs.signUpButton}>
            <Button text={language.navbar.signUp} onClick={handlers.handleSignUpMenuButton} />
          </div>
        </>
      )}
      {state.isPageScrolled && (
        <PizzaLogoContainer>
          <img src='images/pizza-logo@2x.png' alt='pizza-logo' />
          <Separator width={15} />
          <p>My Weekend Pizza</p>
        </PizzaLogoContainer>
      )}
      {state.mainMenuState && <MainMenu />}
      {state.signInMenuState && <SignInMenu buttonRef={refs.signInButton} />}
      {state.signUpMenuState && <SignUpMenu buttonRef={refs.signUpButton} />}
      {state.userMenuState && <UserMenu buttonRef={refs.userButton} />}
    </Container>
  );
};

export default View;
