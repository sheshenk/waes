import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import QuestionPage from './pages/QuestionPage';
import waesTheme from './utils/waesTheme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const mainRouter = createHashRouter([
  { path: '/', element: <App/>, children: [
    { path: '/', element: <HomePage/> },
    { path: '/:pack/:seed/:qid', element: <QuestionPage/> }
  ]}
])

root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={waesTheme}>
      <RouterProvider router={mainRouter}/>
    </MantineProvider>
  </React.StrictMode>
);
