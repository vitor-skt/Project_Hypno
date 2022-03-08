import './App.scss';
import Routes from './routes';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar navbarName="Andreia Hipno" />
        <Routes />
      </Router>
    </>
  );
}

export default App;
