import React from 'react';
import { Link } from 'react-router-dom';

const MeetupList = ({ meetups }) => {
    if (!meetups.length) {
        return <h3>No Thoughts Yet</h3>;
    }
    return (
        <div>
            {meetups &&
                meetups.map(meetup => (
                    <div key={meetup._id} className="card mb-3">
                        <p className="card-header">
                            {meetup.username}
                            meets {meetup.createdAt}
                        </p>
                        <div className="card-body">
                            <Link to={`/meetup/${meetup._id}`}>
                                <p>{meetup.title}</p>
                            </Link>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default MeetupList;