import React, { useState } from "react";
import { Spinner, Modal, useDisclosure, Button, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter, Alert, AlertIcon } from "@chakra-ui/react";
import axios from "axios";


export default function AddWebsite(){
    const { isOpen, onOpen, onClose } = useDisclosure();


    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        name: "",
        url: ""
    })

    const handleChange = (e: { target: { name: any; value: any } }) => {
        setError("");
        setData({
        ...data,
        [e.target.name]: e.target.value,
        });
    };

    const [error, setError] = useState("");
    const [successful, setSuccessful] = useState(true);

    const errorComponent = (
        <Alert status="error">
            <AlertIcon />
            {error}
        </Alert>
    );

    const success = (
        <Alert status="error">
            <AlertIcon />
            "Successfully added question to website questionaire"
        </Alert>
    )
    

    const hasError = error === "";

    const errorValue = hasError ? "" : errorComponent;

    const successComponent = successful ? "" : success;

    const token = localStorage.getItem('access_token');
    const accessToken = token !== null ? JSON.parse(token) : null;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        if (data.name === "" || data.url === "") {
        setLoading(false);
        setError("Fill all the required fields!");
        return;
        }
        axios
        .post(
            `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_API_VERSION}websites/`,
            data,
            {
                headers: {
                    'Authorization': `JWT ${accessToken}`,
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                }  
            }
        )
        .then((res) => {
            if (res.status === 200) {
                setTimeout(() => {
                    setSuccessful(true);
                }, 3000);
            }
        })
        .catch((err) => {
            console.log(err);
            setTimeout(() => {
                setError("Something went wrong. Try again");
                setLoading(false);
            }, 3000);
            }
        );
    };


    const isLoading = loading ? (
        <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        />
    ) : (
        "Add Website"
    );

    return(
        <>
            <Button onClick={onOpen}>Add Your website</Button>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <>{errorValue}</>
                    <>{successComponent}</>
                    <ModalHeader>Add website</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <form onSubmit={handleSubmit}>
                            <FormControl>
                                <FormLabel>Website Url</FormLabel>
                                <Input type="text" name="url" placeholder="Website Url" onChange={handleChange} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Website Name</FormLabel>
                                <Input type="text" name="name" placeholder="Website Name" onChange={handleChange} />
                            </FormControl>
                            <Button colorScheme='blue' mr={3} type="submit" style={{marginTop : "10px"}}>
                                    {isLoading}
                            </Button>
                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

// export default forwardRef(AddWebsite)