import './App.css';
import './css/bootstrap.min.css';
import Navbar from './componentes/Navbar/Navbar.jsx';
import CardConteiner from './componentes/CardConteiner/CardConteiner.jsx';
import Footer from './componentes/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <CardConteiner />
      <Footer />
    </div>
  );
}

export default App;
