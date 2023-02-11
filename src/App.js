import { Component } from "react";

import { Searcher } from "./services/api";
let INITIAL_STATE= {
  search:"",
  list:[]
}
export default class ArticlesList extends Component{
    state = {
...INITIAL_STATE
    }
handleSubmit = async (event) => {
await event.preventDefault();
const response = await Searcher(this.state.search)
console.log(response)
this.setState({list:response})
}
inputVal = async (event) =>{
  const { value } = event.target;
  this.setState({ search: value });
}
render(){
  return(
    <div>
        <input
          placeholder="search"
          type="text"
          name="search"
          value={this.state.search}
          onChange={this.inputVal}
        />
        
        <button onClick={this.handleSubmit}>
          
          Login
        </button>
        {this.state.list.map((data) => {return(
          <li key={data.objectID}>
            <h2><a href={data.url} target="blank">{data.title}</a></h2>
            <p>Автор: {data.author}</p>
          </li>
        )})}
</div>
  )
}
}