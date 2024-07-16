import React from "react";
import MainHeader from "../../common/MainHeader";
import Form from "./Form";
import Section from "../../common/Section";
import HeaderContent from "../../common/HeaderContent";
import Stats from "./Stats";
import TasksList from "./TasksList"

export function Tasks() {
  return (
    <>
      <MainHeader />
      <Form />
      <Section body={
        <>
          <HeaderContent title="Lista zadań" />
          <Stats />
          <TasksList />
        </>
      } />
    </>
  );
};
