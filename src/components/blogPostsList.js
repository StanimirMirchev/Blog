import { BlogPost } from './blogPost';

export const BlogPostsList = () => {
    //const [posts, setPosts] = useState([]);

    var posts =[
        {id: "1", name: "Name 1", shortDescription: "Short Description1"},
        {id: "2", name: "Name 2", shortDescription: "Short Description2"}
      ];

    return (
        <div>
             {posts.map(x => <BlogPost key={x.id} {...x} />)}
        </div>
    );
};