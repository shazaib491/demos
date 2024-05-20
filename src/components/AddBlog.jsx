import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function AddBlog(props) {

    //1 check props.edit has value
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        // check 2   calling reset function 
        // Set default values when props.edit changes
        reset({
            title: props.edit?.title || '',
            description: props.edit?.description || '',
        });
    }, [props.edit, reset]);

    return (
        <div>
            <form onSubmit={handleSubmit((data) => {
                //3 check props.edit has value true 
                
                props.addBlog(data,Object.keys(props.edit).length ? true : false);
                reset();
            })}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" {...register("title", { required: "Title is required" })} className="form-control" />
                    {errors.title && <p className="error-message">{errors.title.message}</p>}
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea {...register("description")} className="form-control"></textarea>
                </div>
                <div className='mt-2'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="button" onClick={() => reset()} className="btn btn-danger ms-2">Reset</button>
                </div>
            </form>
        </div>
    );
}
