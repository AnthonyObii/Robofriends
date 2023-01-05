import React from "react";
import Cardlist from "../components/cardlist";
import Searchbox from '../components/Searchbox.js';
import Scroll from '../components/scroll';
import './app.css';


class App extends React.Component {
    constructor(){
        super()
        this.state = {
         robots: [],
        searchfield: ''
        }
    }
 componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
       return response.json();
    })
    .then(users=> {
        this.setState({robots:users})
    });
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
                <Scroll>
                  <Cardlist robots={filteredRobots}/>
                </Scroll>
           
            </div>
    
    );
}
    }
}
export default App;