import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import { EDIT_MEETUPS } from "../utils/mutations";
import { useParams } from "react-router-dom";
import { SINGLE_MEETUP } from "../utils/queries";
import { Form, Button, Alert } from "react-bootstrap";
import { Modal } from 'react-bootstrap';
import SingleMeetup from "./SingleMeetup";

const EditMeetupForm = ({ meetup, closeModal }) => {
    console.log(meetup);
    const [editFormData, setEditFormData] = useState({
        // id: meetup._id,
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
                    id: meetup._id,
                    body: editFormData.body,
                    title: editFormData.title
                },
            });
        } catch (err) {
            console.error(error);
            setShowAlert(true);
        }
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
                    Something went wrong with your meetup!
                </Alert>

                <Form.Group>
                    <Form.Label htmlFor="username">Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder=""
                        name="title"
                        onChange={handleMeetupChange}
                        defaultValue={meetup.title}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Title is required!
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="email">Body</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder=""
                        name="body"
                        onChange={handleMeetupChange}
                        defaultValue={meetup.body}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Body is required!
                    </Form.Control.Feedback>
                </Form.Group>
                <button onClick={() => closeModal(false)}>Submit</button>
            </Form>
        </>
    );
}

export default EditMeetupForm;