import React, { FunctionComponent } from "react";
import Menu from "components/UI/menu";
import Input from "components/UI/input";
import Separator from "components/UI/separator";
import ArrowButton from "components/UI/arrow-button";
import language from "language-sources";

import { Container, ArrowButtonContainer } from "./sign-in-menu.styles";

const View: FunctionComponent<{
  positionLeft: number;
  buttonWidth: number;
  handleLoginInput: (value: string) => void;
  handlePasswordInput: (value: string) => void;
}> = (p) => {
  return (
    <Menu positionLeft={p.positionLeft} buttonWidth={p.buttonWidth}>
      <Container>
        <Input
          title={language.login.login}
          iconName="PersonFill"
          callback={p.handleLoginInput}
        />
        <Separator height={10} />
        <Input
          title={language.login.password}
          iconName="LockFill"
          callback={p.handleLoginInput}
          type="password"
        />
        <Separator height={20} />
        <ArrowButtonContainer>
          <ArrowButton onClick={() => {}}>{language.login.button}</ArrowButton>
        </ArrowButtonContainer>
      </Container>
    </Menu>
  );
};

export default View;
