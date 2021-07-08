import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListCom from './ListCom';
const ToDoList=()=>{

    const [item,setitem]= useState("");
    const [newitem,setNewitem]= useState([]);

    const itemEvent=(event)=>{
        setitem(event.target.value);
    }
    const listofItems=()=>{
        setNewitem((preValue)=>{
            return [...preValue,item]
        });
        setitem(" ")
    };


    return (
   <> 
        <div className='main_div'>
            <div className='center_div'>
                <br/>
                <h1>ToDo List</h1>
                <br/>
                <input type='text'
                placeholder='Add an item'
                onChange={itemEvent}
                value={item}
                />
                <Button className='newBtn'
                onClick={listofItems}>
                    <AddIcon/>
                </Button>
                <br/>
                <ol>
                    
                    {newitem.map((val,index)=>{
                        return <ListCom key={index} text={val}/>
                    })}
                </ol>
                <br/>
            </div>
        </div>
    </>
    );
};

export default ToDoList;