import React from "react";
import "./bootstrap.min.css";
import "./App.css";
import Event from "./components/Event";
import dbJason from "./dbJason";

function App() {
  return (
    <>
      <div className="container my-5">
        <h1 className="my-2">Events</h1>
        <Event events={dbJason} event_details = "Event Details" />
      </div>
    </>
  );
}

export default App;
