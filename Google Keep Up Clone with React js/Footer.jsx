import React from 'react';

const App=()=>{

const year = new Date().getFullYear();

    return(
        <>
        <footer>
            <p>Copyright ©️ {year}</p>
            </footer>
        </>
    );
};

export default App;