import React,{Component} from "react";
import Table from "./table";
import TopSection from"./firstPageComponents/topSection";

export default class Applications extends Component{
  render(){
    return(
      <div className="application-page">

        <div className="top-half">
          <TopSection />



          <div className="data-box">

            <div className="new-application-text">
              <h1>New </h1>
              <h1>Applications</h1>
            </div>

            <div className="applicantion-numbers">
              <h1>64</h1>
            </div>

            <div className="job-list">
                <Table />
            </div>

          </div>

          <div className="hr-small">
          <hr />
          </div>
        </div>

        <div className="bottom-half">
          <div className="graph-section">
            <div className="graph-one">aaa</div>
            <div className="graph-two"> ddd</div>
          </div>

          <div className="blank-second"></div>

          <div className="arrow-symbol">
            <i class="fa fa-arrow-down" aria-hidden="true"></i>
          </div>

        </div>
      </div>
    )
  }
}
