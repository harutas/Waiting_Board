import './App.css';
import { Container } from '@mui/system';
import Header from './components/Header';
import MainPage from './components/MainPage';


function App() {
  return (
    <div className="App">
      <Header />
      <Container sx={{justifycontent: "center"}}>
        <MainPage />
      </Container>
    </div>
  );
}

export default App;
