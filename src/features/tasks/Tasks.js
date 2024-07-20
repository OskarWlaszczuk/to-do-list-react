import React from "react";
import Title from "../../common/Title";
import Form from "./Form";
import Section from "../../common/Section";
import HeaderContent from "../../common/HeaderContent";
import Stats from "./Stats";
import TasksList from "./TasksList"

export function Tasks() {
  return (
    <>
      <Title />
      <Section body={
        <Form title="Dodaj nowe zadanie" />
      } />
      <Section body={
        <>
          <HeaderContent title="Lista zadań" />
          <Stats title="Dane zadań 📊" />
          <TasksList />
        </>
      } />
    </>
  );
};
