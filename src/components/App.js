import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from "./Nav";
import UseForm from "./Form"
import FetchApiData from './ApiData'
import axios from 'axios';
import Contact from "./Contact"
import Feedback from "./Feeback"

function App(){
    //fetching values typed by the user
const [inputValue, setInputValue] = useState({
        search: ""
    });


//when form is submitted run this
function onFormSubmit(event){
    if(inputValue){
        setInputValue(inputValue.search)
        event.preventDefault();
    }   
    }

//fetching Api data from TV Maze    
const [data, setData] = useState([{}])
    useEffect(() => {
    async function fetchData() {
    try {
        const request = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${inputValue}`
        );
        let appData = request.data.map(innerData => innerData)
        setData(appData)
    } catch (err) {
        console.log("please search another");
    }
    }
    fetchData();
  }, [inputValue]);


    return (
        <Router>
    <div>
        <Nav 
        src={`${process.env.PUBLIC_URL}/images/logo.png`}
        title = "CONTACT US"
        />
        <Switch>
        <Route exact path="/my-app">
        <UseForm inputValue={inputValue} setInputValue={setInputValue}
            onFormSubmit = {onFormSubmit}
        />
        <div className="content">
        {data.map((eachData, index)=>{
            return <FetchApiData key={index} data={eachData} id={eachData.show?.id}/>
        })}
        </div>
        </Route>
        <Route path="/my-app/contact">
            <Contact/>
        </Route>
        <Route path="/my-app/feedback">
            <Feedback/>
        </Route>
        </Switch>
    </div>
    </Router>)

}

export default App