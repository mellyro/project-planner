const initState = {
    projects: [
        {id: '1', title: 'help me find jake', content: 'find where jake is hiding'},
        {id: '2', title: 'find dog toys', content: 'walk the house and search for all dog toys then put them away'},
        {id: '3', title: 'walk dogs', content: 'walk the dogs around the park'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default: 
            return state;
    }
}

export default projectReducer;
