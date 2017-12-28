import React,{Component} from "react";
import TopSection from"./firstPageComponents/topSection";
import MainTable from "./firstPageComponents/mainTable";
import Logo from "./firstPageComponents/logo";

export default class TopApplicant extends Component{
  render(){
    return(
      <div className="top-applicants">

        <div className="flex-box-one">

          <div className="box-one-top">
            <TopSection />
          </div>

          <div className="box-one-bottom">
              <div className="box-one-bottom-left">
                <h1>Top 3 </h1>
              </div>
              <div className="box-one-bottom-right">
                <MainTable/>
              </div>
          </div>

        </div>

        <div className="flex-box-two">

          <div className="line-ko-lagi">
          </div>

          <div className="content-ko-lagi">

          <div className="box-one-bottom">
              <div className="box-one-bottom-left">
                <h1>Refers</h1>
              </div>
              <div className="box-one-bottom-right">
                <MainTable/>
              </div>
          </div>

          </div>

        </div>
        <div className="flex-box-three">
            <div className="for-job-title">
              <h1>Business</h1>
              <h1>Intelligence</h1>
            </div>
            <div className="for-logout">
              <p>Log Out</p>
            </div>
            <div className="for-company-logo">
               <Logo />
            </div>
        </div>
      </div>
    )
  }
}
