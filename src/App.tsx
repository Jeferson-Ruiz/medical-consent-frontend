import './App.css'
import HeaderInfo from './components/header/HeaderInfo';
import ListConsents from './components/listOfConsents /ListConsents';
import type { ConsentType } from './constants/consentType';

function App() {
  return (
    <>
      <HeaderInfo/>
      <ListConsents onChange={function (value: ConsentType): void {
        throw new Error('Function not implemented.');
      } }/>
    </>
  );
}
export default App;