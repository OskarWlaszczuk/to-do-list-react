import React from "react";
import Title from "../../../common/Title";
import Form from "./Form";
import Section from "../../../common/Section";
import HeaderContent from "../../../common/HeaderContent";
import Stats from "./Stats";
import TasksList from "./TasksList"
import { Search } from "../Search";

export function TasksPage() {
  return (
    <>
      <Title title="Lista zadań" />
      <Section body={
        <Form title="Dodaj nowe zadanie" />
      } />
      <Section body={<Search title="Wyszukuj" />} />
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
