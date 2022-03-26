import React from 'react';

const MeetupList = ({ meetups, title }) => {
    if (!meetups.length) {
    return <h3>No Thoughts Yet</h3>;
    }
  
    return (
      <div>
        <h3>{title}</h3>
        {meetups &&
          meetups.map(meetup => (
            <div key={meetup._id} className="card mb-3">
              <p className="card-header">
                {meetup.username}
                meets {meetup.createdAt}
              </p>
              <div className="card-body">
                <p>{meetup.body}</p>
              </div>
            </div>
          ))}
      </div>
    );
  };
  
  export default MeetupList;