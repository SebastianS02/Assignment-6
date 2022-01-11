import './App.css';
import ZipForm from"./components/ZipForm.js"
import CitySearch from "./components/CitySearch.js"

function App() {

    return (
        <div style={{
          backgroundImage: "url('https://media.cntraveller.com/photos/615ee85b4c2ae7f03412f97e/16:9/w_3200,h_1800,c_limit/Best%20Cities%20in%20the%20World%20-%20Grid.jpg')"
        }}>
          <div class="city-container"><CitySearch/></div>
          { <div class="zip-conatiner"><ZipForm/></div> }
        </div>
      
    );
  }


export default App;