import NameTable from './components/nameTable/NameTable';
import { names } from './data/names'; 

function App() {
  return (
    <NameTable names={names.names} />
  );
}

export default App;
