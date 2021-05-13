import React from 'react';


function UseForm({inputValue, setInputValue, onFormSubmit}){

    function handleChange(e){
        const {name, value} = e.target;
        setInputValue(previousValue=>{
            if(name === "search"){
                return{
                    search: value,
                    contactName:previousValue.contactName,
                    contact:previousValue.contact   
                }
            }
        })
    }


    return ( 
            <div className="input-div">
                <form className = "form-section" onSubmit={onFormSubmit}>
                    <input className="form-input" onChange={handleChange} type="text" name="search" value={inputValue.search} placeholder="Search TV Shows" required/>
                   <button type="submit" className="btn">Submit</button>
                </form>   
            </div>
        )
}



export default UseForm;
