import react from "react";
import "./Card.css"

function Card (props){
    return (
        <div className="Card">
            <div className="Title">
                {props.title}
            </div>
            <div className="Contents">
                {props.contents}
            </div>
        </div>
    )
}

export default Card;