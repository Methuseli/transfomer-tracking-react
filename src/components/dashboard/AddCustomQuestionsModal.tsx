import React, { useEffect, useState } from "react";
import { Spinner, Modal, useDisclosure, Button, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter, Alert, AlertIcon, Select } from "@chakra-ui/react";
import axios from "axios";


export default function AddCustomQuestionsModal(){
    const { isOpen, onOpen, onClose } = useDisclosure();


    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        question: "",
        website: ""
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
    const [websites, setWebsites] = useState([{
        id: "",
        company_name: "",
        created: "",
        url: "",
        average_rating: 0,
        ratings_count: 0,
        website_name: "",
        company: ""
    }]);

    useEffect(() => {
        // let user = localStorage.getItem("user")
        axios
        .get(
          `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_API_VERSION}websites`,
          { 
            headers: {
              'Authorization': `${localStorage.getItem('access_token')}`,
              'Content-Type': 'application/json',
              'accept': 'application/json'
            } 
          }
        )
        .then((res) => {
          if (res.status === 200) {
            setWebsites(res.data);
          }
        })
        .catch((err) => {
          console.log(err)
        });
    }, [])

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

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        if (data.question === "" || data.website === "") {
        setLoading(false);
        setError("Fill all the required fields!");
        return;
        }
        axios
        .post(
            `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_API_VERSION}questions/`,
            data,
            {withCredentials: true}
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
        "Add Question"
    );

    return(
        <>
            <Button onClick={onOpen}>Add Custom Question</Button>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <>{errorValue}</>
                    <>{successComponent}</>
                    <ModalHeader>Add a question to your website</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <form onSubmit={handleSubmit}>
                            <FormControl>
                                <FormLabel>Question</FormLabel>
                                <Input type="text" name="question" placeholder="Question" onChange={handleChange} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Website</FormLabel>
                                <Select id='website' name="website" placeholder='Select Website' onChange={handleChange}>
                                    {websites.map((website) =>
                                            <option key={website.id} value={website.id}>{website["url"]}</option>
                                        )
                                    }
                                </Select>
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

// export default forwardRef(AddCustomQuestionsModal)