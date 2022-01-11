import react from "react";

function ComponentWithProps(props){
    return (
        <div>
        <h1>{props.nome}</h1>
        <h2>{props.cargo}</h2>
    </div>
    )
}

export default ComponentWithProps;