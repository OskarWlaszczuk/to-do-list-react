import React from "react";
import MainHeader from "./MainHeader";
import Form from "./Form";
import Section from "./Section";
import HeaderContent from "./HeaderContent";
import Buttons from "./Buttons";
import Stats from "./Stats";
import Tasks from "./Tasks";

const tasks = [
  { id: 1, content: "Nakarmić psa", done: true },
  { id: 2, content: "Przygotować obiad", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <React.Fragment>
      <MainHeader />
      <Form />
      <Section
        children={
          <React.Fragment>
            <HeaderContent title="Lista zadań" children={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />} />
            <Stats tasks={tasks} />
            <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
          </React.Fragment>}
      />
    </React.Fragment >
  );
};

export default App;
