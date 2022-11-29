import { MantineProvider } from '@mantine/core';
import { createBrowserHistory } from '@remix-run/router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const mainRouter = createBrowserRouter([
  { path: '/', element: <App/>}
])

root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RouterProvider router={mainRouter}/>
    </MantineProvider>
  </React.StrictMode>
);
