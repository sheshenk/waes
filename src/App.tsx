import { Card, Center, useMantineTheme } from '@mantine/core';
import { Outlet } from 'react-router-dom';

function App() {
  const theme  = useMantineTheme()
  return (
    <Center style={{ minHeight: '100vh', backgroundColor: theme.colors.red[8] }} p='sm'>
      <Card shadow='sm' radius='md' style={{ width: '100%', maxWidth: '600px' }} p='xl'>
        <Outlet/>
      </Card>
    </Center>
  );
}

export default App;
