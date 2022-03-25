import { Link } from 'react-router-dom';
import React from 'react'
import Posts from './Posts'
import { useMutation } from '@apollo/client';
import { ADD_MEETUPS } from '../utils/mutations';


const MeetupsList = ({title}) => {
    // const addMeetup = useMutation(ADD_MEETUPS)

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {Posts.map(post => (
                <div className="blog-preview" key={post.id}>
                    <Link to={`/meetups/${post.id}`}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <p>Written by {post.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default MeetupsList;