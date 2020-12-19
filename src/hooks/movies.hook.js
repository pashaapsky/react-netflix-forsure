import {useContext, useState, useEffect} from 'react';
import {FirebaseContext} from "../context/firebase";

function useMovies(target) {
    const [content, setContent] = useState([]);
    const {firebase} = useContext(FirebaseContext);

    useEffect(() => {
        firebase
            .firestore()
            .collection(target)
            .get()
            .then((snapshot) => {
                const allContent = snapshot.docs.map((doc) => ({
                        ...doc.data(),
                        docId: doc.id
                    }
                ));

                setContent(allContent);
            })
            .catch(error => {
                console.error(error.message);
            })

    }, [firebase, target]);


    return {[target]: content};
}

export default useMovies;