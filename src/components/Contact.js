import React, { useState } from "react";
import { Link } from "react-router-dom";





function Contact(){

    const[initialContactValue, setContactValue] = useState({
        name: "",
        email: "",
        desc: ""
    })

    function handleChange(event){
        const{contactValue, name } = event.target;
        setContactValue(previousVal =>{
            if(name === "username"){
                return {
                    name: contactValue,
                    email:previousVal.email,
                    desc:previousVal.desc
                }
            } else if(name === "email"){
                return {
                    name: previousVal.name,
                    email:contactValue,
                    desc:previousVal.desc
                }
            } else{
                return {
                    name: previousVal.name,
                    email:previousVal.email,
                    desc:contactValue
                }
            }
        })
    }

    return (<div className="input-div">
        <form className = "contact-form-section">
            <input className="form-input" type="text" onChange={handleChange} name="username" placeholder="Name" value={initialContactValue.name}></input>
            <input className="form-input" type="text" onChange={handleChange} name = "email" placeholder="Email Address" value={initialContactValue.email}></input>
            <textarea className="form-input desc" name="text" onChange={handleChange} placeholder="Description" value={initialContactValue.desc}></textarea>
            <Link to = "/my-app/feedback"> <button type="submit" className="btn">Submit</button></Link>
        </form>
    </div>)
}

 export default Contact