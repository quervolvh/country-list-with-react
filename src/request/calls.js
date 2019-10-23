import axios from 'axios';

class Requests{

  getCountries(){

    return axios.get(`https://restcountries.eu/rest/v2/all`)
      .then(res => {
        // console.log(res.data)
        console.log(res.status);
         return res;
      })
      .catch(err =>{
        console.log('error-occured');
        return err;
      });
  }

  searchCountries(searchterm){
    return axios.get(`https://restcountries.eu/rest/v2/name/${searchterm}`)
      .then(res=> {
        console.log(res.data)
        return res;
      })
      .catch(err =>{
        console.log('error-occured');
        console.log(err);
        return err;
      });
  }

  filterby(filter){
    return axios.get(`https://restcountries.eu/rest/v2/region/${filter}`)
    .then(res =>{
      return res;
    })
    .catch(err =>{
      console.log('error-occured');
      return err;
    });
  }
}

export default Requests;