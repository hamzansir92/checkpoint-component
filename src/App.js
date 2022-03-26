import logo from './logo.svg';
import './App.css';
import "./style.css";
import address from "./component/profile/address";
import fullname from './component/profile/fullname';
import photoprofile from './component/profile/photoprofile';
function App() {
  return (
    <div className="App">
      <div className="port">
        <photoprofile />
        <fullname />   
        <address />
      </div>
    </div>
  );
}

export default App;
