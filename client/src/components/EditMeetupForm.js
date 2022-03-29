import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import { EDIT_MEETUPS } from "../utils/mutations";
import { useParams } from "react-router-dom";
import { SINGLE_MEETUP } from "../utils/queries";
import { Form, Button, Alert } from "react-bootstrap";


const EditMeetupForm = ({meetup}) =>{
    // const {id: meetupID, body: meetupBody, title:meetupTitle } = useParams();
    // console.log({meetupID});

    // const { loading, data } = useQuery(SINGLE_MEETUP, {
    //     variables: {id: meetupID,  body: meetupBody, title:meetupTitle},
    // });
    console.log(meetup);
    const [editFormData, setEditFormData] = useState({
        id: meetup._id,
        title: meetup.title, 
        body: meetup.body,
    });
    console.log(editFormData);
    const [validated] = useState(false);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);

    const [editMeetup, { error }] = useMutation(EDIT_MEETUPS);

    const handleMeetupChange = (event) => {
        const { name, value } = event.target;
        setEditFormData({ ...editFormData, [name]: value });
    };

    const handleEditSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            await editMeetup({
                variables: {
                    _id: editFormData.id,
                    body: editFormData.body,
                    title: editFormData.title
                },
            });
            // Auth.login(data.editMeetup.token);
        } catch (err) {
            console.error(error);
            setShowAlert(true);
        }

        // setEditFormData({
        //     title: "",
        //     body: "",
        // });
    };

    return (
        <>
            {/* This is needed for the validation functionality above */}
            <Form noValidate validated={validated} onSubmit={handleEditSubmit}>
                {/* show alert if server response is bad */}
                <Alert
                    dismissible
                    onClose={() => setShowAlert(false)}
                    show={showAlert}
                    variant="danger"
                >
                    Something went wrong with your signup!
                </Alert>

                <Form.Group>
                    <Form.Label htmlFor="username">Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Your username"
                        name="title"
                        onChange={handleMeetupChange}
                        defaultValue={meetup.title}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Username is required!
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Your email address"
                        name="body"
                        onChange={handleMeetupChange}
                        defaultValue={meetup.body}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Email is required!
                    </Form.Control.Feedback>
                </Form.Group>
                <Button
                    disabled={
                        !editFormData
                    }
                    type="submit"
                    variant="success"
                >
                    Submit
                </Button>
            </Form>
        </>
    );
}

export default EditMeetupForm;