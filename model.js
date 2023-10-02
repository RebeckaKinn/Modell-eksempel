const model = {

    app: {
        page: [
            'startPage',
            'allActivites',
            'searchActivities',
            'addActivities',
            'showActivities',
        ],

        popUpSettings: false,
        filterPopUp: false, 

    },

    input: {
        addActivity: {
                id: null,
                title: '',
                dificulty: null,
                timeInMinutes: null,
                category: [],
                equipment: [], 
                how: '',
                img: ''
        }

    },

    data: {
        category: [],

        activityList: [
            {
                id: 1,
                title: 'Jogge',
                dificulty: '',
                timeInMinutes: '',
                category: [],
                equipment: [], 
                how: '',
                img: ''
            },
            {
                id: null,
                title: '',
                dificulty: '',
                timeInMinutes: '',
                category: [],
                equipment: [], 
                how: '',
                img: ''
            },

        ],
    }


}