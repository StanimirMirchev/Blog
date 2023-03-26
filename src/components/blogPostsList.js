import { BlogPost } from './BlogPost';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

import { useState } from 'react';

export const BlogPostsList = () => {
    const [posts, setPosts] = useState([]);

    console.log("Entered");

    const firebaseConfig = {
        apiKey: "AIzaSyCEt6Qe9ZtLDjqDq0ofnzquXj2XjXtjxHc",
        authDomain: "blog-e166d.firebaseapp.com",
        projectId: "blog-e166d",
        storageBucket: "blog-e166d.appspot.com",
        messagingSenderId: "158377363623",
        appId: "1:158377363623:web:5f2ca1b5824fe4e9437382"
    };

    const getPosts = async () => {
        const app = initializeApp(firebaseConfig);

        const db = getFirestore(app);

        //const citiesRef = collection(db, "posts");
        debugger;
        
        const querySnapshot = await getDocs(collection(db, "posts"))
        
        const posts = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            posts.push(doc.data());
        });

        setPosts(posts);

    };

    getPosts();

    debugger;

    /*
    var posts = [
        { id: "1", name: "Name 1", shortDescription: "Short Description1" },
        { id: "2", name: "Name 2", shortDescription: "Short Description2" }
    ];
    */



    return (
        <div>
            {posts.map(x => <BlogPost key={x.id} {...x} />)}
        </div>
    );
};