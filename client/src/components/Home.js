import MeetupsList from './MeetupsList';
import useFetch from './useFetch';
import React from 'react'


const Home = () => {
    const {data: posts, isPending, error} = useFetch ('http://localhost:3000/posts');
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <MeetupsList posts={posts} title="All Posts"/>
        </div>
    );
}

export default Home;