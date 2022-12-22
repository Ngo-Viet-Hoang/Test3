import React, { Component } from "react";

export class DemoAPI extends Component{
    constructor(props){
        super(props);
        this.state={
            productList: []
        }
    }
    componentDidMount = () => {
        fetch('https://order-foods.herokuapp.com/')
        .then(res => res.json()
        .then(res => this.setState({productList: res})))
    }
    render(){
        const {productList} = this.state;
        console.log(productList);
        return(
            <div>
                <h1>Product</h1>
                <ul>
                    {
                        productList.map(item=>{
                            return(
                               <ul>
                                   <li>{item.postId}</li>
                                   <li>{item.id}</li>
                                   <li>{item.name}</li>
                                   <li>{item.email}</li>
                                   <li>{item.body}</li>

                               </ul>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

