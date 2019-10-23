import React, { PureComponent } from 'react';

class Header extends PureComponent{
	render(){
        const { switchText } = this.props;
		return(
			<div id='Bar'>
                <div id='where'>
                    <p> Where in the world? </p>
                </div>
                <div id='mode' onClick={this.props.onClick}>
                    <div id='mode_icon'></div>
                    <p> {switchText} </p>
                </div>
            </div>
		)
	}
}

export default Header;