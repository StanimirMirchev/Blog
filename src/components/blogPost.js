export const BlogPost = ({
    id,
    name,
    shortDescription
}) => {

    return (
        <div className="blog-post">
            <div className="blog-post_title">{name}</div>
            <div className="blog-post_description">{shortDescription}</div>
        </div>
    );
};