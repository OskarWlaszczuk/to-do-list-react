import React from "react";
import Form from "./Form";
import Section from "../../../common/Section";
import { HeaderContent } from "../../../common/HeaderContent";
import Stats from "./Stats";
import TasksList from "./TasksList"
import { Search } from "../Search";
import Buttons from "./Buttons";
import { Title } from "../../../common/Title";

export function TasksPage() {
  const titleOfTasksContent = "Lista zadań";

  return (
    <>
      <Title content={titleOfTasksContent} />
      <Section
        body={
          <Form />
        }
      />
      <Section
        body={
          <>
            <HeaderContent title={titleOfTasksContent} sideContent={<Buttons />} />
            <Stats title="Dane zadań 📊" />
            <Search />
            <TasksList />
          </>
        }
      />
    </>
  );
};
