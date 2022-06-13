import './App.css';
import { Container } from '@mui/system';
import Header from './components/Header';
import MainPage from './components/MainPage';


function App() {
  return (
    <div className="App">
      <Container sx={{justifycontent: "center"}}>
        <Header />
        <MainPage />
      </Container>
    </div>
  );
}

export default App;
