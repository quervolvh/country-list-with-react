import React, { PureComponent } from 'react';

class CountryDisplay extends PureComponent{
	render(){
		return(
			<div id='BarBell'>
                {this.props.children}
            </div>
		)
	}
}

export default CountryDisplay;