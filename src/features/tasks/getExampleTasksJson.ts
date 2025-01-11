import axios from "axios"

export const getExampleTasksJson = async () => {    
    const response =
        await axios.get("/to-do-list-react/exampleTasks.json");

    if (response.status !== 200) {
        throw new Error(response.statusText);
    }
    return response.data;
};