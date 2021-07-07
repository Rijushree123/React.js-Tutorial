import React, { useState } from 'react'

const ToDoList=(props)=>{
    
    const [num, setNum] = useState(0);
    const incNum = () => {
        console.log(num+1);
        setNum(num+1);
    }

    const decNum = () => {
        if(num==0 || num<0)
        {
            alert('Sorry, Zero Limit Reached!!!')
        }
        else{
        setNum(num-1);
        }
    }

    return (
    <>
        <div className='main_div'>
            <div className='center_div'>
                <h1>{num}</h1>
                <div className='btn_div'>
                    <button onClick={incNum}>Increm</button>
                    <button onClick={decNum}>Decrem</button>
                </div>
            </div>
        </div>
    </>
    )
}
export default ToDoList;