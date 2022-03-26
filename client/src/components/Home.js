import React from 'react';
import { useQuery } from '@apollo/client';
import { MEETUPS } from '../utils/queries';
import MeetupsList from './MeetupsList';

const Home = () => {
    const {loading, data} = useQuery(MEETUPS);
    const meetups = data?.meetups || [];
    console.log(meetups);

    return(
        <main>
            <div>
                {loading ? (
                <div>Loading...</div>
                ) : (
                    <MeetupsList meetups={meetups} title="meetups..."/>
                )}
            </div>
        </main>
    )
};

export default Home;