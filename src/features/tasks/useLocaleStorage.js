export const useLocaleStorage = () => {
    const getInitialTasks = () => {
        const localeStorageParsed = JSON.parse(localStorage.getItem('tasksListItems'))
        if (localeStorageParsed) {
            return localeStorageParsed;
        };

        return [];
    };

    return getInitialTasks;
};