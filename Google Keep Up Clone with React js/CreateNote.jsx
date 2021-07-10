import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote=(props)=>{

    const[expand, setExpand] = useState(false);

    const [note,setNote] = useState({
        title:'',
        content:''
    });

    const InputEvent = (event) =>{

        //const value = event.target.value;
        //const name = event.target.name;

        const {name,value} = event.target;

        setNote((preData)=>{
            return {
                ...preData,
                [name]:value,
            };
        });
        console.log(note);
    }

    const addEvent =() =>{
        props.passNote(note);
        setNote({
            title:'',
            content:''
        });
    }

    const expandIt = () =>{
        setExpand(true);
    }
    const shrinkIt = () =>{
        setExpand(false)
    }

    return(
        <React.Fragment>
            <div className='main_note'>
                <form>
                    
                    <input type="text" 
                        name="title"
                        value={note.title}
                        onChange={InputEvent} 
                        placeholder="Title" 
                        autoComplete="off"
                        onClick={expandIt}
                        onDoubleClick={shrinkIt}
                        />
                    {expand?<textarea rows=""
                        name="content" 
                        value={note.content}
                        onChange= {InputEvent}
                        column="" 
                        placeholder="Write a note"
                        >
                    </textarea>:null}
                    {expand?<Button className="MuiButton-root" onClick={addEvent}>
                        <AddIcon className="plus_sign"/>
                    </Button>:null}
                </form>
            </div>
        </React.Fragment>
    );
};

export default CreateNote;