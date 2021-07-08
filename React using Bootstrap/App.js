import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App=()=>{
    return(
        <React.Fragment>
            <h1 className="text-center text-danger text-capitalize my-5">Welcome to my Channel</h1>
            <div class="container">
            <div className="row">
                <div className="col">
                <div class="card" style={{width: "18rem"}}>
                <img src="https://picsum.photos/id/1/200/300" class="card-img-top" alt="..." height="200"/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                </div>
                <div className="col">
                <div class="card" style={{width: "18rem"}}>
                <img src="https://picsum.photos/id/78/200/300" class="card-img-top" alt="..." height="200"/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                </div>
                <div className="col">
                <div class="card" style={{width: "18rem"}}>
                <img src="https://picsum.photos/id/1000/200/300" class="card-img-top" alt="..." height="200"/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    );
};

export default App;