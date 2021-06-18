import React, { Component } from 'react';
import {Table} from 'react-bootstrap'
class RestaurantList extends Component {
    constructor()
    {
        super();
        this.state={list:null,
        }
    }
    componentDidMount()
    {
        fetch("http://localhost:3000/restaurant").then((Response)=>
        {
            Response.json().then((result) =>
            {
               // console.warn(result)
                this.setState({list:result})
            })
        })
    }
    render() {
        return (
            <div>
                <h1>Restaurant List</h1>
                {
                    this.state.list?
                    <div>
                    <Table striped bordered hover>
  <thead>
  
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>email</th>
      <th>Rating</th>
      <th>Address</th>
    </tr>
  </thead>
  <tbody>
                        {
                          this.state.list.map((item,i)=>
                         
     <tr>
      <th>{item.id}</th>
      <th>{item.name}</th>
      <th>{item.email}</th>
      <th>{item.rating}</th>
      <th>{item.address}</th>
    </tr>
                          )  
                        }
                        </tbody>
                        </Table>
                    </div>
                    :
                    <p>Please Wait.....</p>
                }
            </div>
        );
    }
}

export default RestaurantList;