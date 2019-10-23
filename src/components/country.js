import React, { Component } from 'react';

class Country extends Component{
	
	render(){
		const { country } = this.props;
		return(
			<div id='country'>
				<div id='country_icon' style={{backgroundImage: `url(${country.flag})`}}></div>
				<div id='country_details'>
					<p id='country_name'> {country.name} </p>
					<p id='population'> Population: {country.population} </p>
					<p id='Region'> Region: {country.region} </p>
					<p id='capital'> Captial: {country.capital} </p>
				</div>
			</div>
		)
	}
}

export default Country;