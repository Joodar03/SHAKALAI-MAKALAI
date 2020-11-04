import Item from "./item";
import React, {Component} from "react";

// const List = () => {
//     return (
//         <ul className="list-group">
//             <Item label={"Do home work"}/>
//             <Item label={"Read a book"}/>
//         </ul>
//     )
// }
//
//
// export default List;
class List extends Component {
    state = {
        data: [
            {id:0,label:"Mongol",active:false},
            {id:1,label:"Shurik",active:false},
            {id:2,label:"Shegol",active:false},
        ]
    }
    onChangeActive = (id) =>()=>{
        this.setState(({data})=>{
            const index = data.findIndex((item) => item.id === id)
            if (index !== -1){
            const newObj = {...data[index]}
            newObj.active = !newObj.active
            // const obj = {...data[Index]}
            return {data:[...data.slice(0,index),...data.slice(index+1)]}
            }
        })
    }
    onChangeDone = (id) =>()=>{
        this.setState(({data})=>{
            const index = data.findIndex((item) => item.id === id)
            if (index !== -1){
                const newObj = {...data[index]}
                newObj.done = !newObj.done
                // const obj = {...data[Index]}
                return {data:[...data.slice(0,index),...data.slice(index+1)]}
            }
        })
    }
    onDeleteItem = (id) => () => {
        this.setState(({data}) => {
            const index = data.findIndex((item) => item.id === id)
            return {data:[...data.slice(0,index), ...data.slice(index+1)]}
        })
    }
    render(){
        return (
            <ul className="list-group">
                {this.state.data.map((item) =>{
                    return <Item onChangeDone={this.onChangeDone(item.id)}
                                 onChangeActive={this.onChangeActive(item.id)}
                                 onDeleteItem={this.onDeleteItem(item.id)}
                                 key={item.id} active={item.active} label={item.label}/>
                })}
            </ul>
        )
    }
}
export default List;