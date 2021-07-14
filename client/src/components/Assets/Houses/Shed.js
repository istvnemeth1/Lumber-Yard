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
                <div key={index} class="card" >
  <img src="https://lh3.googleusercontent.com/proxy/M_eYRtK5qBj3nXf62Quo-TcH3kPiihZ331rW1JcAUPLW4nYdDWm1oNVHAFxAwfwpXTUaYZes8RIGufmOqAkyw1h406rCwtjrUiSoKvu8gxwMeXfOwCEgEUi_bPd0zrPhmv0Uz2BlWP2gjXhT9o3dd8y9XsxWwbiqAHs" class="card-img-top house-img" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{shed.houseName}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
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