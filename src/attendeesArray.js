import Attendees from "./example_data.json";

const AttendeesArray = () => {
  return (
      Object.keys(Attendees).map(key => Attendees[key])
      );
};

export default AttendeesArray;