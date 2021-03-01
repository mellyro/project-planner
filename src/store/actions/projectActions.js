export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to db
        dispatch({ type: 'CREATE_PROJECT', project });
    }
};

export default createProject;
