import React, { PureComponent } from 'react';

class Filter extends PureComponent{

    constructor(props){
        super(props);
        this.state = {value : 'africa'};
        console.log(this.props);
    }

    render(){
        const { visibility } = this.props;        
        return (
            <div id='Bell'>
                <div id='search'>
                    <div id='search_icon'></div>
                    <input id='count_search' type='class' placeholder='search for a country' onChange={this.props.onChange}/>
                </div>
                <div id='filter' onClick={this.props.onClick}>
                    <p id='filter_p'> filter by region </p>
                    <div id='drop_down'></div>
                    <div id='filter_results_box' style={{display:visibility}}>
                        <p onClick={() => this.props.handler('africa')}> Africa </p>
                        <p onClick={() => this.props.handler('americas')}> Americas </p>
                        <p onClick={() => this.props.handler('asia')}> Asia </p>
                        <p onClick={() => this.props.handler('europe')}> Europe </p>
                        <p onClick={() => this.props.handler('oceania')}> Oceania </p>
                    </div>
                </div>
            </div>
        );
    }
        
}

export default Filter;