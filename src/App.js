import './App.css';
import { Container } from '@mui/system';
import MainPage from './components/MainPage';


function App() {
  return (
    <div className="App">
      <Container sx={{justifycontent: "center"}}>
        <MainPage />
      </Container>
    </div>
  );
}

export default App;
