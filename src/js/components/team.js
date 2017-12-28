import React,{Component} from "react";
import NameTab from "./firstPageComponents/nameSection";

export default class TeamPage extends Component{
render(){
  return(
    <section className="teampage-area">
      <div className="leftpad"></div>
      <div className="box-section">
          <div className="main-box">
          <div className="hr-line">
          <hr />
          </div>
            <div><h1> Business</h1></div>
            <div><h1> Intelligence</h1></div>
            <div className="name-input-box">
                <NameTab />
                <div className="icon-boxes">
                  <div className="envelope-icon">
                    <i className="fa fa-envelope-o col-md-6"></i>
                  </div>
                  <div className="phone-icon">
                    <i className="fa fa-phone col-md-6"></i>
                  </div>
                </div>
            </div>
          </div>
      </div>
      <div className="rightpad"></div>

    </ section>

  )
}
}
