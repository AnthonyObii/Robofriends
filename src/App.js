import React from "react";
import Cardlist from "./cardlist";
import Searchbox from './Searchbox.js';
import {robots} from './robots';
import './app.css'


class App extends React.Component {
    constructor(){
        super()
        this.state = {
         robots: robots, 
        searchfield: ''
        }
    }
    
  onSearchChange = (events) => {
    this.setState({searchfield: events.target.value})
    
  }


    render (){
        const filteredRobots = this.state.robots.filter(robots=>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            })
        if (this.state.robots.length === 0){
            return <h1>loading</h1>
        } else{
        return(
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <Cardlist robots={filteredRobots}/>
            </div>
    
    );
}
    }
}
export default App;