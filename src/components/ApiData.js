import React from 'react';



// for each image return div....
const FetchApiData = ({data}) =>{
    if(data){
        let val = data.show?.summary;
        let replacedStr = "";

    if(val){
        replacedStr = (val.replace("<b>", "").replace("<p>", "").replace("</p>", "").replace("<i>", "")).replace("</i>", "").replace("</b>", "")
    }
    return (
    <div className = "view-div">
        <img style={{display: data.show?.image?.medium? "block": "none"}} src={data.show?.image?.medium} alt=""></img>
        <div className="fig-content">
            <p style={{display: data.show?.image?.medium? "block": "none"}} >Type: {data.show?.type} </p>
            <p style={{display: data.show?.image?.medium? "block": "none"}} >Language: {data.show?.language}</p>
            <p style={{display: data.show?.image?.medium? "block": "none"}} >Summary:  {replacedStr}</p>
        </div>
    </div>
            ) 
    } 
        
}




export default FetchApiData
