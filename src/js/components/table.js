import React, {Component} from "react";
import MainTable from "./firstPageComponents/mainTable";

export default class Table extends Component{

  render(){
    return(
      <table className="table-one">{/* first left table */}
        <tbody>

          <tr className="shadow">
            <td>Business Analyst</td>
            <td>14</td>
          </tr>

          <tr className="shadow">
            <td>Research Assistant</td>
            <td>11</td>
          </tr>

          <tr className="shadow">
            <td>Social Scientist</td>
            <td>19</td>
          </tr>

          <tr className="shadow">
            <td>Journalist</td>
            <td>20</td>
          </tr>

        </tbody>
      </table>

    )
  }
}
