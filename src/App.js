import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import EventAttendeeList from './components/EventAttendeeList';
import FirstDataCaptureForm from './components/FirstDataCaptureForm';
import SecondDataCaptureForm from './components/SecondDataCaptureForm';
import MailDispatch from './components/MailDispatch';
import Thanks from './components/Thanks';
import Save from './components/Save';

const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
      <div>
        <Route path="/" exact component={FirstDataCaptureForm}></Route>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;