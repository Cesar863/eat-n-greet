import React, {useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';

// import ReactionList from '../components/ReactionList';
// import ReactionForm from '../components/ReactionForm';

import Auth from '../utils/auth';
import { useQuery, useMutation, } from '@apollo/client';
import { SINGLE_MEETUP } from '../utils/queries';
import { DELETE_MEETUPS } from '../utils/mutations';
import EditMeetupForm from './EditMeetupForm';
import { Modal } from 'react-bootstrap';



const SingleMeetup = () => {
    const {id: meetupID } = useParams();
    console.log({meetupID});
    const { loading, data } = useQuery(SINGLE_MEETUP, {
        variables: {id: meetupID },
    });

    // const {loading, data} = useQuery(MEETUPS);
    // const meetups = data?.meetups || [];
    const [isPending, setIsPending] = useState(false);
    const [showModal, setShowModal] = useState(false);



    const meetup = data?.meetup || {};
    console.log({meetup});
    const userData = data?.me || [];
    const history = useHistory();

    const [deleteMeetup, { error }] = useMutation(DELETE_MEETUPS, {
        refetchQueries: [
            'meetups'
        ],
    })

    const handleDeleteMeetup = async () => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        if (!token) {
            return false;
        }
        try {
            const response = await deleteMeetup({
                variables: { id: meetupID },
            });

            if (!response) {
                throw new Error("something went wrong!");
            }
            // removeMeetupId(meetupId);
        } catch (err) {
            console.error(error);
        }
    history.push('/');
    };


    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <article >
                <h2>{meetup.title}</h2>
                <p>Written by {meetup.username}</p>
                <div>{meetup.body}</div>
                <button onClick={() => setShowModal(true)}>Edit</button>
                <button onClick={() => handleDeleteMeetup(meetup.meetupID)}>Delete</button>
            </article>
            <Modal show={showModal}>
                <EditMeetupForm meetup={meetup} closeModal={setShowModal}/>
            </Modal>
        </div>
    );
};
export default SingleMeetup;



// <Modal show={showModal} onHide={() => setShowModal(false)}>
// <EditMeetupForm meetup={meetup} closeModal={setOpenModal}/>
// </Modal>}

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

