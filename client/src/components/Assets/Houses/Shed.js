import React, { Component } from 'react';
import Navbar from '../../Navbar.js';
import axios from 'axios';

class Shed extends Component {

    state = {
        sheds: [],
        housename: ''
    }


    /***
     * * Fetch API
     */
    componentDidMount() {
        axios(`http://localhost:5000/api/house`)
        .then(data => {
             
            //pityu this is when you would like to set new object from api and pass  it to shed array
            this.setState({ 
              sheds: data.data,
              housename: data.data.housename
            })

          //  console.log(this.state.sheds);
        
        })
        .catch((error) => {
            console.log('Error: ', error);
           // console.log(error.response.status);
            
        });

        
    }

   

    render() {
        const { sheds } = this.state;
        console.log(sheds);
    

        const mapedSheds = sheds.map((shed, index) => {
            
            return (
                <div key={index} class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://static.thenounproject.com/png/1170643-200.png" class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{shed.houseName}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
                
        )
        })
        
        return(
            <>
            <Navbar />
            <div className="main">
            
                { mapedSheds }
            </div>
            </>
        )
    }
    
}

export default Shed;