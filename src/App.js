import './App.css';
import { Container } from '@mui/system';
import WaitingTablePage from './components/WaitingTablePage';
import { Divider } from '@mui/material';
import MainPage from './components/MainPage';


function App() {
  return (
    <div className="App">
      <Container sx={{justifycontent: "center"}}>
        <MainPage />
        <Divider />
        <WaitingTablePage />
      </Container>
    </div>
  );
}

export default App;
