import "./Item.css"


export const Item =  (props) => {
    return (
        <div className="item">
            <p>{props.itemKey} : {props.value}</p>
            <button onClick={props.onRemove(props.itemKey)}>Delete</button>
        </div>
    )
}