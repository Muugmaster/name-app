import Footer from './components/footer/Footer';
import SearchBar from './components/searchBar/SearchBar';
import Totalnames from './components/totalnames/Totalnames';

import './styles.css';

function App() {
  return (
    <>
    <div className="container">
      <h1>Solita Names App</h1>
      <Totalnames />
      <SearchBar />
    </div>
      <Footer />
    </>
  );
}

export default App;
