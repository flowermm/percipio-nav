import React from 'react';

import { NativeBaseProvider } from 'native-base';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';

import Routing from './base/routing';
import ComponentStyle from './components/component-styles';

export default (async () => {
  ReactDOM.render(
    <NativeBaseProvider theme={ComponentStyle()}>
      <RouterProvider router={Routing} />
    </NativeBaseProvider>,
    document.getElementById('root'),
  );
})();
