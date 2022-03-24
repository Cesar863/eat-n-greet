import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';
import React from 'react'
import blogs from './data'


const SingleMeetup = () => {
    const { id } = useParams();
    const { data: error, isPending } =  useFetch('/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('/blogs/'+ blogs.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <article >
                <h2>{blogs.title}</h2>
                <p>Written by {blogs.author}</p>
                <div>{blogs.body}</div>
                <button onClick={handleClick}>Delete</button>
            </article>
        </div>
    );
}
export default SingleMeetup;