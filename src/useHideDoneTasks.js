import { useState } from "react";

export const useHideDoneTasks = (tasks) => {
  const [hideDoneTasks, setHideDoneTasks] = useState(false);

  const toggleHideDoneTasks = () => {
    setHideDoneTasks((hideDoneTasks) =>
      tasks.some(({ done }) => done)
        ? (hideDoneTasks = !hideDoneTasks)
        : hideDoneTasks
    );
  };

  return [hideDoneTasks, toggleHideDoneTasks];
};
