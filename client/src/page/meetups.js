//To Do:
//Tops of the page "Meetups"
//Populates Meetups made by users
//Ability to show only user meetups (by ID) to make edits and delete

//Basic React imports
import React, { useState } from "react";
import Auth from "../utils/auth";
import "./style.css";

const Meetups = () => {


    {
        <>
            <Jumbotron fluid className="text-light bg-dark">
                <Container>
                    <h1>Meetups</h1>
                </Container>
            </Jumbotron>
            <Container>
                <h2>
                    {userData.savedMeetups.length
                        ? `Viewing ${userData.savedMeetups.length} saved ${userData.savedMeetups.length === 1 ? "meetup" : "meetups"
                        }:`
                        : "You have no saved meetups!"}
                </h2>
                <CardColumns>
                    {userData.savedMeetups.map((meetup) => {
                        return (
                            <Card key={meetup.meetupId} border="dark">
                                {meetup.image ? (
                                    <Card.Img
                                        src={meetup.image}
                                        alt={`The cover for ${meetup.title}`}
                                        variant="top"
                                    />
                                ) : null}
                                <Card.Body>
                                    <Card.Title>{meetup.title}</Card.Title>
                                    <Card.Text>{meetup.description}</Card.Text>
                                    <Button
                                        className="btn-block btn-danger"
                                        onClick={() => handleDeleteMeetup(meetup.meetupId)}
                                    >
                                        Delete this meetup!
                                    </Button>
                                </Card.Body>
                            </Card>
                        );
                    })}
                </CardColumns>
            </Container>
        </>
    }
}

export default Meetups;