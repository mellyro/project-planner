export const createProject = (project) => {
    return (dispatch, getState, { getFirestore }) => {
        // make async call to db
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project, 
            authorFirstName: 'Melly',
            authorLastName: 'Dask',
            authorId: 123,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        });  
    }
};

export default createProject;
