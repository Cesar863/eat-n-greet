import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { ADD_MEETUPS } from '../utils/mutations';
import { useMutation } from '@apollo/client';



const CreateMeetup = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Shubham');
    // const [loadingStatus, setLoadingStatus] = useState(null);
    // add image
    const [isPending, setIsPending] = useState(false);
    // const history = useHistory();

    const [addMeetup, { data, loading, error }] = useMutation(ADD_MEETUPS)


    const handleSubmit = async (e) => {
        e.preventDefault();

        // const meetup = { title, body, author };

        setIsPending(true);

        // fetch('http://localhost:8000/meetups', {
        //     method: 'POST',
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify(meetup)
        // }).then(() => {
        //     setIsPending(false);
        //     history.push('/');
        // })
        await addMeetup({
            variables: {
                title: title,
                body: body,
                author: author
            }
        })
        console.log(data);
        console.log(error);
    }


    return (
        <div className="create">
            <h2>Add a New Meetup</h2>
            <form onSubmit={handleSubmit}>
                <label>Meetup Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Meetup Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Meetup Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Shubham">Shubham</option>
                    <option value="Satyam">Satyam</option>
                    <option value="Anmol">Anmol</option>
                </select>
                {!isPending && <button>Add Meetup</button>}
                {isPending && <button disabled>Adding Meetup</button>}
            </form>
        </div>
    );
}
// add form reset once data has been entered
// if failed/successful routes
export default CreateMeetup;