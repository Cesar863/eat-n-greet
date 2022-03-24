import React, { useState } from "react";
import Auth from "../utils/auth";
import Posts from "../components/Posts";



const meetups = () => {
    return (
        <>
            <Jumbotron fluid className="text-light bg-dark">
                <Container>
                    <h1>Meetups</h1>
                </Container>
            </Jumbotron>
        </>
    );
};

export default meetups;




