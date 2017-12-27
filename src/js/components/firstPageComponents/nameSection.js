import React,{Component} from "react";


export default class NameTab extends Component{
render(){
  return(
    <div className="search-wrapper">{/*search section start */}
       <form>
        <input type="text" placeholder="Name" text-align="center" />
       </form>
    </div>
  )
}

}
