import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore"; 
import {useNavigate} from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";

import { db } from "../firebase";

export const CreatePostDialog = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        postName: '',
        shortDescription: ''
    });
    
    const onSubmitHandler = async (e) => {
        e.preventDefault();

        if(values["postName"] && values["shortDescription"]) {
            console.log(values);
            //createPost();

            try {
                await addDoc(collection(db, "blogs"), {
                  ...values,
                  timestamp: serverTimestamp(),
                  author: "Test",
                  userId: "TestUserId"
                });

              } catch(err) {
                console.log(err);
              }


        } else {
            console.log("All fields are mandatory!")
        }
        
        console.log(values);

        navigate("/");
    };

    const createPost = async () => {
        
        const firebaseConfig = {
            apiKey: "AIzaSyCEt6Qe9ZtLDjqDq0ofnzquXj2XjXtjxHc",
            authDomain: "blog-e166d.firebaseapp.com",
            projectId: "blog-e166d",
            storageBucket: "blog-e166d.appspot.com",
            messagingSenderId: "158377363623",
            appId: "1:158377363623:web:5f2ca1b5824fe4e9437382"
        };

        const app = initializeApp(firebaseConfig);
            
        const db = getFirestore(app);
       
        const docRef = await addDoc(collection(db, "posts"), {
            name: values?.postName,
            shortDescription: values?.shortDescription,
          });
          console.log("Document written with ID: ", docRef.id);
    };

    

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
    };

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="postName">Post Name</label>
                    <input
                        type="text"
                        name="postName"
                        id="postName"
                        value={values.postName}
                        onChange={onChangeHandler}
                    />
                </div>

                <div>
                    <label htmlFor="shortDescription">Short Description</label>
                    <input
                        type="text"
                        name="shortDescription"
                        id="shortDescription"
                        value={values.shortDescription}
                        onChange={onChangeHandler}
                    />
                </div>

                <div>
                    <button type="button" onClick={onSubmitHandler}>Create new</button>
                </div>

            </form>
        </div>
    );
};