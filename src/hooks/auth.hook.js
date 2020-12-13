import {useState, useEffect, useContext} from 'react';
import {FirebaseContext} from "../context/firebase";

function useAuth(props) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
    const {firebase} = useContext(FirebaseContext);

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                localStorage.setItem('authUser', JSON.stringify(user));
                setUser(user);
            } else {
                // No user is signed in.
                localStorage.removeItem('authUser');
                setUser(null);
            }
        });

        // clear
        return () => listener();
    }, [firebase]);


    return {user}
}

export default useAuth;