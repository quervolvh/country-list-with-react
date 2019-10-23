import React from 'react';
// import logo from './logo.svg';
import Header from './components/header.js';
import Filter from './components/filter.js';
import CountryDisplay from './components/countryDisplay.js';
import './App.css';
import Request from './request/calls';
import Country from './components/country';
import debounce from 'lodash.debounce';
import NoResult from './components/no-result';

export default class App extends React.Component{

  constructor(props) {
    super(props)

    this.handler = this.handler.bind(this)
    var a = [];
  }

  handler(value) {
    this.setState({countries: this.a.filter(country=>{
        if(country.region.toLowerCase().includes(value.toLowerCase())){
          return true;
        }
        return false;
      })
    }
  );
  }

  state = {
    searchString: '',
    countries: [],
    error: null,
    show: 'none',
    mode: 'light'
  }

  async componentDidMount(){
    this.emitChangeDebounced = debounce(this.emitChange, 150);
    const request = new Request();
    this.a = await request.getCountries().then(result=> result.data);
    this.responser(this.a);
  }

  componentWillUnmount() {
    this.emitChangeDebounced.cancel();
  }

  handleChange = (event) =>{
    this.emitChangeDebounced(event.target.value);
  };

  handleMode = (event) =>{

    if(this.state.mode === 'light'){
      document.documentElement.setAttribute('data-theme','dark');
      this.setState({mode: 'dark'});
    }else{
      document.documentElement.setAttribute('data-theme','light');
      this.setState({mode: 'light'});
    }
  }

  handleClick = (event) =>{
    if(this.state.show === 'none'){
      this.setState({show: 'block'});
    }else{
      this.setState({show:'none'});
    }
  }
  emitChange(value) {
    this.setState({countries: this.a.filter(country=>{
          if(country.name.toLowerCase().includes(value.toLowerCase())){
            return true;
          }
          return false;
        })
      }
    );
  }

  responser(res){
    if(res === undefined){
      console.log('error');
      console.log(res.status);
    }else if(res !== null || res.length > 0){
      this.setState({countries : res})
      console.log('good to go');
    }
  }


  render(){
    return(
      <div>
        < Header onClick={this.handleMode} switchText={this.state.mode}/>
        < Filter handler={this.handler} onChange={this.handleChange} onClick={this.handleClick} visibility={this.state.show}/>
        <CountryDisplay>
          {this.state.countries.length ? this.state.countries.map(country =>
            <Country key={country.name} country={country}/>
          ) :
          < NoResult/>
          }
          </CountryDisplay>
      </div>
    )
  }

}
