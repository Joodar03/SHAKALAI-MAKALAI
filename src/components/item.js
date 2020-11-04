import React, {Component} from "react";

class Item extends Component {

    // state = {
    //     active: false
    // }
    //
    // onClick = () => {
    //     // if (this.state.active === true) {
    //     //     this.setState({active: false})
    //     // } else {
    //     //     this.setState({active: true})
    //     // }
    //     this.setState((state)=>{
    //         return {active: !state.active}
    //     })
    // }

    render() {
        const {onDeleteItem,done,onChangeActive,onChangeDone,label,active} = this.props
        const style = {}
        if (done) {
            style.textDecoration = "line-through"
        }
        return (
            <div style={{display:"flex"}}>
                <li style={style} onClick={onChangeActive}
                    className={"list-group-item " + (active ? "active" : "")}>{label}
                </li>
                <button style={{float:"right"}} onClick={onDeleteItem} className="btn btn-danger">X</button>
                <button style={{float:"right", marginRight:"10px"}} onClick={onChangeDone} className="btn btn-success">!</button>
            </div>
        )
    }
}


export default Item;