
import reactLogo from './assets/react.svg'
import './App.css'
import List from './Components/List/List'
import Eventhandling from './Components/Event/Eventhandling'
import PassingArgument from './Components/Event/PassingArgument'


function App() {
  
  return (
   <>
    <div className="App">
    <Eventhandling/>
    <List/>
    <PassingArgument/>
    </div>
   
    </>
  )
}

export default App
