import React, { FunctionComponent } from 'react';

import BasicLayout from '../layouts/basic.layout';
import Navbar from 'components/navbar';
import WelcomeScreen from 'components/welcome-screen';

const IndexPage: FunctionComponent = () => {
  return (
    <BasicLayout>
      <title>My weekend pizza</title>
      <Navbar />
      <WelcomeScreen />
    </BasicLayout>
  );
};

export default IndexPage;
