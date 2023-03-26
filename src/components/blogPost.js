export const BlogPost = ({
    id,
    name,
    shortDescription
}) => {
    return (
        <div>
            <div>{name}</div>
            <div>{shortDescription}</div>
        </div>
    );
};