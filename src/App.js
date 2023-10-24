import React from "react";
// import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
//import Dashboard from "./Components/Dashboard";
// import Product from "./Components/Product";
// import Account from "./Components/Account";
import Login from "./Components/Login";

function App() {
  return (
    <>
    {/* <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/reports" element={<Dashboard/>}/>
        <Route path="/reports/daily-report" element={<Dashboard/>}/>
        <Route path="/reports/weekly-report" element={<Dashboard/>}/>
        <Route path="/reports/yearly-report" element={<Dashboard/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/accounts" element={<Account/>}/>
        <Route path="/settings" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router> */}
    <Login/>
    </>
  )
}

export default App;
