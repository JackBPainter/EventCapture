import React, { useState } from "react";
import EventAttendeeList from "./components/EventAttendeeList";
import FirstDataCaptureForm from "./components/FirstDataCaptureForm";
import SecondDataCaptureForm from "./components/SecondDataCaptureForm";
import MailDispatch from "./components/MailDispatch";
import Thanks from "./components/Thanks";
import Save from "./components/Save";
import Reset from "./components/Reset";

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmedEmail, setConfirmedEmail] = useState("");
  const [postcode, setPostcode] = useState("");
  const [optIn, setOptIn] = useState("");

  const getCount = props => {
    setName(props.name);
    if (props.email) setEmail(props.email);
    setCount(count + 1);
  };

  const getEmail = (e, props) => { 
    e.preventDefault();
    setConfirmedEmail(props.emailText);
  };

  const getPostOpt = (e, props) => {
    e.preventDefault();
    setPostcode(props.post);
    setOptIn(props.opt);
  }

  const countSetter = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const components = [
    <EventAttendeeList getCount={getCount} />,
    <FirstDataCaptureForm name={name} email={email} getEmail={getEmail} countSetter={countSetter} />,
    <SecondDataCaptureForm countSetter={countSetter} getPostOpt={getPostOpt} />,
    <Thanks resetCount={resetCount} />
  ];

  return (
    <div className="App">
      <div>{components[count]}</div>
    </div>
  );
};

export default App;
