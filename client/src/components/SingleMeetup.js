import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';
import React from 'react'
import Posts from './Posts'


const SingleMeetup = () => {
    const { id } = useParams();
    const { data: error, isPending } =  useFetch('/meetups/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('/meetups/'+ Posts.id, {
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
                <h2>{Posts.title}</h2>
                <p>Written by {Posts.author}</p>
                <div>{Posts.body}</div>
                <button onClick={handleClick}>Delete</button>
            </article>
        </div>
    );
}
export default SingleMeetup;