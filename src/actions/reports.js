import database from '../firebase/firebase';

export const getReports = (reports) => ({
    type: 'GET_REPORTS',
    reports
});

export const startGetReports = () => {
    // console.log('triggered')
    return (dispatch, getState) => {
        database.ref(`reports`).once('value').then((snapshot) => {
            const reports = [];

            // set writings array same as data on firebase
            snapshot.forEach((childSnap) => {
                reports.push({
                    id: childSnap.key,
                    ...childSnap.val()
                });
            });

            dispatch(getReports(reports));
        })
    };
};

// adds report to existing reports in store
export const addReport = (report) => {
    type: 'ADD_REPORT',
    report
};

export const watchTaskAddedEvent = () => {
    return (dispatch, getState) => {
        database.ref('/reports').on('child_added', (snap) => {
            console.log('snap triggered')
            dispatch(addReport(snap.val()))
        })
    };
}