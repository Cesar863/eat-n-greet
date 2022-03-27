import React, {useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';

// import ReactionList from '../components/ReactionList';
// import ReactionForm from '../components/ReactionForm';

import Auth from '../utils/auth';
import { useQuery, useMutation, } from '@apollo/client';
import { MEETUPS, GET_ME } from '../utils/queries';
import { DELETE_MEETUPS } from '../utils/mutations';



const SingleMeetup = (props) => {
    const {id: meetupID } = useParams();
    const { loading, data } = useQuery(GET_ME, {
        variables: {id: meetupID },
    });
    const [isPending, setIsPending] = useState(false);


    const meetup = data?.meetup || {};
    // const userData = data?.me || [];
    const history = useHistory();

    const [deleteMeetup, { error }] = useMutation(DELETE_MEETUPS);

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
            // removeMeetupId(meetupId);
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
                <h2>{meetup.title}</h2>
                <p>Written by {meetup.author}</p>
                <div>{meetup.body}</div>
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

