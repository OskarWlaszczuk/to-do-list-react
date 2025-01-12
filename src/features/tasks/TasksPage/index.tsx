import React from "react";
import Form from "./Form";
import Section from "../../../common/Section";
import { HeaderPanel } from "../../../common/HeaderPanel";
import Stats from "./Stats";
import TasksList from "./TasksList"
import { Search } from "../Search";
import Buttons from "./Buttons";
import { PageTitle } from "../../../common/PageTitle";

export function TasksPage() {
  const titleOfTasksContent = "Lista zadań";

  return (
    <>
      <PageTitle content={titleOfTasksContent} />
      <Section
        body={
          <Form />
        }
      />
      <Section
        body={
          <>
            <HeaderPanel title={titleOfTasksContent} sideContent={<Buttons />} />
            <Stats />
            <Search />
            <TasksList />
          </>
        }
      />
    </>
  );
};
