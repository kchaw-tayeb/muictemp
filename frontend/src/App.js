import "./App.css";
import CrudCompanies from "./ReduxImplementaion/CrudCompanies";
import CrudEmployees from "./ReduxImplementaion/CrudEmployees";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Link } from "react-router-dom";
import TcompnaiesScreen from "./screens/TcompnaiesScreen";
import Header from "../src/components/Header";
import EditCompany from "./screens/EditCompany";
import AddCompany from "./screens/AddCompany";
import { useState } from "react";
import CompanyDetail from "./screens/CompanyDetail";
import Application from "./Application";
function App() {
  return (
    <Router>
      {/* <Header /> */}
      <div className="App">
        <Application>
          <Routes>
            <Route exact path="/" element={<TcompnaiesScreen />} />
            <Route exact path="/add" element={<AddCompany />} />
            <Route exact path="/edit/:id" element={<EditCompany />} />
            <Route exact path="/company/:id" element={<CompanyDetail />} />
          </Routes>
        </Application>
      </div>
    </Router>
  );
}

export default App;
