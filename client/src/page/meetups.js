import React from "react";
import {
    Jumbotron,
    Container,
    CardColumns,
    Card,
    Button,
} from "react-bootstrap";
import { useQuery, useMutation } from "@apollo/react-hooks";

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
            <Container>
                <h2>
                    {/* {userData.savedRestaurants.length
                        ? `Viewing ${userData.savedRestaurants.length} saved ${userData.savedRestaurants.length === 1 ? "restaurant" : "restaurants"
                        }:`
                        : "You have no saved restaurants!"} */}
                </h2>
                <CardColumns>
                    {userData.savedRestaurants.map((restaurant) => {
                        return (
                            <Card key={restaurant.restaurantId} border="dark">
                                {restaurant.image ? (
                                    <Card.Img
                                        src={restaurant.image}
                                        alt={`The cover for ${restaurant.title}`}
                                        variant="top"
                                    />
                                ) : null}
                                <Card.Body>
                                    <Card.Title>{restaurant.title}</Card.Title>
                                    {/* <p className="small">Authors: {book.authors}</p> */}
                                    {/* <Card.Text>{book.description}</Card.Text> */}
                                    <Button
                                        className="btn-block btn-danger"
                                        onClick={() => handleDeleteRestaurant(restaurant.restaurantId)}
                                    >

                                    </Button>
                                </Card.Body>
                            </Card>
                        );
                    })}
                </CardColumns>
            </Container>
        </>
    );
};

export default meetups;



