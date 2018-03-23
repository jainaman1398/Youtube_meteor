import React,{Component} from "react";
import ReactDOM from "react-dom";

import Youtube from "../../ui/Youtube";


export default class App extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Youtube/>
        )
    }
}







Meteor.startup(()=>{
    ReactDOM.render(<App />,document.querySelector('.render-target'));
})