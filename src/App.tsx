import { Box, Container, Button } from '@mui/material';
import { Header } from './components/Header';
import { QAField } from './components/QAField';
import { useCreateQa, useQaIds } from './state/Qa';
import { useEffect } from 'react';

function App() {
  const { ids } = useQaIds();
  const createQa = useCreateQa();
  useEffect(() => console.log(ids.length), [ids]);

  return (
    <>
      <Header title="title" />
      <Box m={1}>
        <Container maxWidth="md">
          <Button onClick={() => createQa()}>新しい設問を追加</Button>
          {ids.map((id) => (
            <QAField id={id} key={id} />
          ))}
        </Container>
      </Box>
    </>
  );
}

export default App;
