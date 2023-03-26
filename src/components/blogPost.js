export const BlogPost = ({
    id,
    name,
    shortDescription
}) => {
    return (
        <div className="blog-post">
            <div>{name}</div>
            <div>{shortDescription}</div>
        </div>
    );
};