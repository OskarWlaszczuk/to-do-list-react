import { call, CallEffect, put, PutEffect, select, SelectEffect, takeEvery, takeLatest, Effect } from "redux-saga/effects";
import { TaskData } from "../../common/aliases/interfaces/TaskData";
import { getExampleTasksJson } from "./getExampleTasksJson";
import { downloadExampleTasks, selectTasks, setTasks } from "./tasksSlice";
import { TASKS_LIST_KEY } from "../../common/constants/TASKS_LIST_KEY";
import { saveTasksInLocaleStorage } from "../../common/functions/tasksLocaleStorage";


function* downloadExampleTasksHandler(): Generator<
    PutEffect | CallEffect<TaskData[]>,
    void,
    TaskData[]
> {
    try {
        const exampleTasks = yield call(getExampleTasksJson);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        console.error(error)
    };
};

function* saveTasksInLocaleStorageHandler(): Generator<
    SelectEffect | CallEffect<void>,
    void,
    TaskData[]
> {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocaleStorage, tasks, TASKS_LIST_KEY);
};

type DownloadExampleTasksAction = ReturnType<typeof downloadExampleTasks>;

export function* tasksSaga(): Generator<
    Effect,
    void,
    DownloadExampleTasksAction
> {
    yield takeLatest<DownloadExampleTasksAction>(
        downloadExampleTasks.type,
        downloadExampleTasksHandler
    );
    yield takeEvery("*", saveTasksInLocaleStorageHandler)
};