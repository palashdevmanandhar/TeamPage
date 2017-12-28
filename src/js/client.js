import React from "react";
import ReactDOM from "react-dom";


import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import TeamPage from "./components/team";
import Applications from "./components/newApplication";
import Table from "./components/table";
import TopApplicant from "./components/topApplicant";


const app = document.getElementById('app');
ReactDOM.render(<TopApplicant/>, app);
