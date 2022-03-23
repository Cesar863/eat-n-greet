import React, { useState } from "react";
import Auth from "../utils/auth";
import Posts from "../components/Posts";



const meetups = () => {
    return (
        <div className="flex-row justify-space-between">
            <h1>Meetups</h1>
            <Posts />
        </div>
    );
};

export default meetups;




//Can I have generated posts on the Posts.js page as well as add, edit, and delete posts?
//Need bootstrap on this page