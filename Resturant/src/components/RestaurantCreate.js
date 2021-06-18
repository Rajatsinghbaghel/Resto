import React, { Component } from 'react';

class RestaurantCreate extends Component {
    constructor() {
        super();
        this.state=
        {
            name:null,
            email:null,
            rating:null,
            address:null

        }
        
    }
    create()
    {

        fetch('http://localhost:3000/restaurant',{method:"Post",headers:{'Content-type':'application/json'},
               body:JSON.stringify(this.state)}).then((result)=>
        {
            result.json().then((resp) =>
            { alert("Restaurant has been added")
              
            })
        })
        
    }
    render() {
        return (
            <div>
                <h1>Restaurant Create</h1><br/> <br/> 
                <div> 
                <input onChange={(event)=>{this.setState({name:event.target.value})}}
                placeholder="Resturant Name" /> <br/> <br/> 
                  <input onChange={(event)=>{this.setState({email:event.target.value})}}
                placeholder="Resturant Email" /> <br/> <br/> 
                  <input onChange={(event)=>{this.setState({rating:event.target.value})}}
                placeholder="Resturant Rating" /> <br/> <br/> 
                 <input onChange={(event)=>{this.setState({address:event.target.value})}}
                placeholder="Resturant Address" /> <br/> <br/> 
                <button onClick={()=>{this.create()}}>Add Resturant</button>
                </div>
            </div>
        );
    }
}

export default RestaurantCreate;