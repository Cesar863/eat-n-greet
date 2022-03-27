import { useHistory } from 'react-router-dom';
import React from 'react'
import { DELETE_MEETUPS } from '../utils/mutations';
import { useMutation, useQuery } from '@apollo/client';
import Posts from './Posts'


const SingleMeetup = () => {

    const { loading, data } = useQuery(GET_ME);
    const userData = data?.me || [];
    const history = useHistory();

    const [deleteMeetup, { error }] = useMutation(DELETE_BOOK);

    const handleDeleteMeetup = async (meetupId) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        if (!token) {
            return false;
        }
        try {
            const response = await deleteMeetup({
                variables: { meetupId: meetupId },
            });

            if (!response) {
                throw new Error("something went wrong!");
            }
            removeMeetupId(meetupId);
        } catch (err) {
            console.error(error);
        }
    };

    history.push('/');


    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <article >
                <h2>{Posts.title}</h2>
                <p>Written by {Posts.author}</p>
                <div>{Posts.body}</div>
                {/* <button onClick={handleClick}>Edit</button> */}
                <button onClick={() => handleDeleteMeetup(meetup.meetupID)}>Delete</button>
            </article>
        </div>
    );
}
export default SingleMeetup;





    // const [ID] = useState('');
    // const [isPending, setIsPending] = useState(false);


    // 

    // const handleClick = () => {
    //     fetch('/meetups/' + Posts.id, {
    //         method: 'DELETE'
    //     }).then(() => {
    //         history.push('/');
    //     })
    // }

