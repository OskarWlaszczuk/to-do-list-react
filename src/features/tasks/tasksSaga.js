import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { downloadExampleTasks, selectTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocaleStorage } from "./tasksLocaleStorage";
import { tasksListKey } from "../../tasksListKey";

function* downloadExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert("Coś poszło nie tak"));
    };
};

function* saveTasksInLocaleStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocaleStorage, tasks, tasksListKey);
};

export function* tasksSaga() {
    yield takeLatest(downloadExampleTasks.type, downloadExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocaleStorageHandler)
};