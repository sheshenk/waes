import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Question from './pages/Question';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const mainRouter = createBrowserRouter([
  { path: '/', element: <App/>, children: [
    { path: '/', element: <Home/> },
    { path: '/:seed', element: <Question/> }
  ]}
])

root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RouterProvider router={mainRouter}/>
    </MantineProvider>
  </React.StrictMode>
);
