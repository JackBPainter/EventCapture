import React, { useState } from "react";

import Reset from "./components/Reset";
import EventAttendeeList from "./components/EventAttendeeList";
import FirstDataCaptureForm from "./components/FirstDataCaptureForm";
import SecondDataCaptureForm from "./components/SecondDataCaptureForm";
import MailDispatch from "./components/MailDispatch";
import Thanks from "./components/Thanks";
import Save from "./components/Save";

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmedEmail, setConfirmedEmail] = useState("");
  const [postcode, setPostcode] = useState("");
  const [optIn, setOptIn] = useState(false);

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
    const optIn = (props.opt);
    setOptIn(optIn);
  };

  const save = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(confirmedEmail);
    console.log(postcode);
    console.log(optIn);
    setCount(count + 1);;
  };

  const countSetter = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
    setName("");
    setEmail("");
    setConfirmedEmail("");
    setPostcode("");
    setOptIn("");
  };

  const components = [
    <EventAttendeeList getCount={getCount} />,
    <FirstDataCaptureForm name={name} email={email} getEmail={getEmail} countSetter={countSetter} />,
    <SecondDataCaptureForm countSetter={countSetter} getPostOpt={getPostOpt} />,
    <Thanks countSetter={countSetter} name={name} confirmedEmail={confirmedEmail} postcode={postcode} optIn={optIn} />,
    <Save save={save}  />,
    <Reset reset={reset}/>,
  ];

  return (
    <div className="App">
      <div>{components[count]}</div>
    </div>
  );
};

export default App;
