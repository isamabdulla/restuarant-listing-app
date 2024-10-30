import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Restuarantlist from './components/Restuarantlist'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      </header>
      <Restuarantlist/>
      <Footer/>
    </div>
  );
}

export default App;
