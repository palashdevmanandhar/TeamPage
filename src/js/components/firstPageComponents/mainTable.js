import React,{Component} from "react";


export default class MainTable extends Component{
  render(){
    return(
      <table className="table">{/* first left table */}
        <thead>
            <tr className="shadow">
              <th>Name</th>
              <th>Job Title</th>
              <th>Duration</th>
              <th>1-10 avg</th>
            </tr>
        </thead>
        <tbody>
          <tr className="shadow">
            <td>John</td>
            <td>Business Analyst</td>
            <td>10:20</td>
            <td>7</td>
          </tr>
          <tr className="shadow">
            <td>Sally</td>
            <td>Doe</td>
            <td>5:23</td>
            <td>9</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
