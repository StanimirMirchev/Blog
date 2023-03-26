import { useState } from 'react';

export const CreatePostDialog = () => {
    
    const [values, setValues] = useState({
        postName: '',
        shortDescription: ''
    });
    
    const onSubmitHandler = (e) => {
        e.preventDefault();

        console.log(values);
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