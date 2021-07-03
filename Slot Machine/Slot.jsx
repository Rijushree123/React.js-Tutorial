import React from 'react'

const Slot = (props)=> {
    
     /*let x = props.x;
     let y = props.y;
     let z = props.z;*/
     
     let {x,y,z}=props;

     if((x==y) && (y==z))
     {
         return(
             <>
                 <div className='slot_inner' style={{textAlign: 'center' }}>
                     <h1>
                         {x} {y} {z} {" "}
                     </h1>
                     <h1>This is matching!</h1>
                     <hr/>
                 </div>
             </>
         )
     }else{
         return(
             <>
                 <div className='slot_inner' style={{textAlign: 'center' }}>
                     <h1>
                         {x} {y} {z} {" "}
                     </h1>
                     <h1>This is not matching!</h1>
                     <hr/>
                 </div>
             </>
         )
     }
 }

 export default Slot;