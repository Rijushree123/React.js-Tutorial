import React, {useState} from 'react';
import ToDoList from './ToDoList';

const App=()=>{
    const [state, setstate] = useState(" ");
    const [items,setItems] = useState([]);

    const inputEvent=(event)=>{
        console.log(event.target.value);
        setstate(event.target.value);
    };

    const listOfItems=()=>{
        setItems((oldItems)=>{
            return [...oldItems,state];
        })
        setstate("");
    };

    const deleteItems=(id)=>{
        console.log("clicked");

        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index!==id;
            })
        })
    }

    return(
    <>
        <div class="main_div">
            <div className="center_div">
                <br/>
                <h1>ToDo List</h1>
                <br/>
                <input type="text" 
                placeholder="Add Items" 
                value={state}
                onChange={inputEvent}/>
                <button onClick={listOfItems}>+</button>

                <ol>
                   
                   {items.map((itemval,index)=>{
                       return <ToDoList 
                       key={index} 
                       id={index}
                       text={itemval}
                       onSelect={deleteItems}
                       />                       
                   })}
                </ol>
            </div>
        </div>
    </>
    )
};

export default App;