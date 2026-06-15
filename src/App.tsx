import './App.css'
import HeaderInfo from './components/header/HeaderInfo';
import { ConsentPage } from './features/consents/pages/ConsentPage';

function App() {
  return (
    <>
      <HeaderInfo/>
      <ConsentPage />;
    </>
  );
}
export default App;