import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
const App=()=>{

    
    const [addItem, setAddItem] = useState([]);
    const addNote = (note) =>{
        //alert("I am clicked");
        setAddItem((preData)=>{
            return [...preData,note]
        });
    };

    const onDelete=(id)=>{
        setAddItem((oldData)=>
            oldData.filter((currentdata, index)=>{
                return index!==id;
            })
        );
    };

    return(
        <>
            <Header/>
            <CreateNote passNote={addNote}/>
            
            {addItem.map((val, index)=>{
                return (<Note
                    key={index}
                    id={index}
                    title={val.title}
                    content={val.content}
                    deleteItem={onDelete}
                />
                );
            })}
            <Footer/>
        </>
    );
};

export default App;