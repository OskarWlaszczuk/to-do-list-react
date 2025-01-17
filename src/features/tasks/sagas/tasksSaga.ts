import { call, CallEffect, put, PutEffect, select, SelectEffect, takeEvery, takeLatest, Effect } from "redux-saga/effects";
import { downloadExampleTasks, selectTasks, setTasks } from "../slices/tasksSlice";
import { getExampleTasksJson } from "../functions/getExampleTasksJson";
import { saveTasksInLocaleStorage } from "../functions/tasksLocaleStorage";
import { tasksListKey } from "../../../common/constants/tasksListKey";
import { TaskData } from "../../../common/aliases/interfaces/TaskData";

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
    yield call(saveTasksInLocaleStorage, tasks, tasksListKey);
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