import React, {useEffect} from 'react';
import styles from './Components/App.module.css';
import  {fetchData} from './Components/API/index';
import image from './images/image.png';
import Appbar from './AppBar/Appbar';


// import Cards from './Components/Cards/Cards';
// import Charts from './Components/Charts/Charts';
// import Countrypicker from './Components/CountryPicker/Countrypicker';

import { Cards, Charts, CountryPicker } from './Components';

// function App() {
  class App extends React.Component{

    state = {
      data: {},
      country: '',
    }


  async componentDidMount() {
    const fetchdData = await fetchData();
    // console.log(data);
    this.setState({ data: fetchdData });
    
  }
  
    


  handleCountryChange = async (country) => {
    console.log(country);
    
    const fetchdData = await fetchData(country);
    console.log(fetchdData);
    this.setState({ data: fetchdData, country: country });

  }

render(){
  const {data, country} = this.state;
  return (
    <div>
      <Appbar/>
    <div className={styles.container}>
      
      <img className={styles.image} src={image}/>
       <Cards data={data}/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Charts data={data} country={country}/>
      
    </div> 
    </div>
  )
}
  }

export default App;
