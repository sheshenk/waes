import { Card, Center } from '@mantine/core';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Center style={{ minHeight: '100vh', backgroundColor: '#c0392b' }} p='sm'>
      <Card shadow='sm' radius='md' style={{ width: '100%', maxWidth: '600px' }} p='xl'>
        <Outlet/>
      </Card>
    </Center>
  );
}

export default App;
