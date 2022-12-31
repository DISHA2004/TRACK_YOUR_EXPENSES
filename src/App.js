import './App.css';
import AddnewTransaction from './components/AddnewTransaction';
import  Balancefile  from './components/Balancefile';
import  Headerfile  from './components/Headerfile';
import IncomeExp from './components/IncomeExp';
import Transactionlist from './components/Transactionlist';
import {GlobalProvider} from './context/GlobalState';
function App() {
  return (
<GlobalProvider>
  <Headerfile/>
  <div className='container'>
    <Balancefile/>
    <IncomeExp/>
    <Transactionlist/>
    <AddnewTransaction/>
  </div>
</GlobalProvider>   )
}

export default App;
