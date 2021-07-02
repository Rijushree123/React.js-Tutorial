import React from 'react';
import Card from './Cards.jsx';
import Sdata from './Sdata';
import Netflix from './Netflix';

/*const favSeries = 'netflix';
const FavSeries=()=>{
    if(favSeries=== 'netflix'){
        return <Netflix/>;
    }else{
        return (<Card 
            key={Sdata[2].id}
            imgsrc={Sdata[2].imgsrc}
            title={Sdata[2].title}
            sname={Sdata[2].sname}
            link={Sdata[2].link}
          />);
    }
}*/


const App=()=>(
   <> 
   <h1 className="heading_style">List of Top 5 Netflix Series in 2020</h1>
   {Sdata.map((val,index)=>{
          console.log(index);
      return (<Card 
      key={val.id}
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />)
    })}
   </>
);
export default App;