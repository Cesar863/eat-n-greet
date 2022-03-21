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
import { removeRestaurantId, saveRestaurantIds } from "../utils/localStorage";
import { GET_ME } from "../utils/queries";
import { REMOVE_RESTAURANT } from "../utils/mutations";

const SavedRestaurants = () => {
    const { loading, data } = useQuery(GET_ME);
    const userData = data?.me || [];

    const [removeRestaurant, { error }] = useMutation(REMOVE_RESTAURANT);

    const handleDeleteRestaurant = async (restaurantId) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        if (!token) {
            return false;
        }
        try {
            const response = await removeRestaurant({
                variables: { restaurantId: restaurantId },
            });

            if (!response) {
                throw new Error("something went wrong!");
            }
            removeRestaurantId(restaurantId);
        } catch (err) {
            console.error(error);
        }
    };

    if (loading) {
        return <h2>LOADING...</h2>;
    }

    const savedRestaurantIds = userData.savedRestaurants.map((restaurant) => restaurant.restaurantId);
    saveRestaurantIds(savedRestaurantIds);

    return (
        <>
            <Jumbotron fluid className="text-light bg-dark">
                <Container>
                    <h1>Viewing saved restaurants!</h1>
                </Container>
            </Jumbotron>
            <Container>
                <h2>
                    {userData.savedRestaurants.length
                        ? `Viewing ${userData.savedRestaurants.length} saved ${userData.savedRestaurants.length === 1 ? "restaurant" : "restaurants"
                        }:`
                        : "You have no saved restaurants!"}
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
                                        Delete this restaurant!
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

export default SavedRestaurants;