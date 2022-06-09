import './App.css';
import { Container } from '@mui/system';
import InputArea from './components/InputArea';
import WaitingTablePage from './components/WaitingTablePage';
import { Divider } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Container sx={{justifycontent: "center"}}>
        <InputArea />
        <Divider />
        <WaitingTablePage />
      </Container>
    </div>
  );
}

export default App;
