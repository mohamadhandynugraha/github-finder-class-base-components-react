import React, { Component } from "react";
import Navbar from "./components/layout/Navbar"
import Users from "./components/users/Users"
import "./App.css";

class App extends Component {
  // iniContohMethodDariClassApp = () => "Test Method";

  // render() {
  //   const name = "John Wall"; // contoh buat variable
  //   const showName = false;
  //   const isLoading = true;

  //   const iniContohMethodDidalamRender = () => `1 + 1 = ${1 + 1}`;
  //   // ini contoh function biasa bukan arrow
  //   function testMethodDalamRender(a, b) {
  //     return a + b;
  //   }

  //   return isLoading ? (
  //     <>
  //       <h1>Please Wait...</h1>
  //     </>
  //   ) : (
  //     <>
  //       <h1>Hello {showName && name.toUpperCase()}!</h1>
  //       <h2>{this.iniContohMethodDariClassApp()}</h2>
  //       <h3>Panggil method didalam render: {iniContohMethodDidalamRender()}</h3>
  //       <h4>Panggil method function biasa: {testMethodDalamRender(5, 5)}</h4>
  //     </>
  //   );
    render () {
      return (
        <div className="App">
          <Navbar />
          <div className="container">
            <Users />
          </div>
        </div>
      )
    }
  }

export default App;
