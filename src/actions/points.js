import database from '../firebase/firebase';

export const getPoints = (points) => ({
    type: 'GET_POINTS',
    points
});

export const startGetPoints = () => {
    return (dispatch, getState) => {
        database.ref(`users`).once('value').then((snapshot) => {
            const points = [];

            // set writings array same as data on firebase
            snapshot.forEach((childSnap) => {
                writings.push({
                    id: childSnap.key,
                    ...childSnap.val()
                });
            });

            dispatch(getPoints(points));
        })
    };
};