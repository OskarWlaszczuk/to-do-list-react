import axios, { AxiosResponse } from "axios"
import { TaskData } from "../../common/TaskData";

export const getExampleTasksJson = async () => {
    const response: AxiosResponse<TaskData[]> = await axios.get("/to-do-list-react/exampleTasks.json");

    if (response.status !== 200) {
        throw new Error(response.statusText);
    }

    return (response.data);
};