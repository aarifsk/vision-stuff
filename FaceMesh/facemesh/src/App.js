import './App.css';
import FaceLandmarks from './FaceLandmarks'
import {Route} from 'react-router-dom'
import NavBar from './NavBar'

function App() {
  return(
    <div>
      <NavBar />
      <Route exact path='/FaceLandmarks' component={FaceLandmarks}/>
    </div>
  );
}

export default App;
