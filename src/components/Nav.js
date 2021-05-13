import { Link } from "react-router-dom";


function Nav(props){
    return(
        <nav>
            <div className="nav">
                <div className="logTitle-div">
                <Link to="/my-app">
                <h3>FINDTVSHOW</h3></Link>
                </div>
                <div>
                <Link to="/my-app/contact"><button className="btn">{props.title}</button></Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav;