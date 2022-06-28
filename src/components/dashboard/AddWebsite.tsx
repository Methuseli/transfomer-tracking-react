import React, { useState } from "react";
import { Spinner, Modal, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter, Alert, AlertIcon } from "@chakra-ui/react";
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
                    setLoading(false);
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
        "Submit"
    );

    return (
      <>
        <button className="btn btn-primary" onClick={onOpen}>
          Add Your website
        </button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <>{errorValue}</>
            <>{successComponent}</>
            <ModalHeader className="h4">Add website</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel className="">Website Url</FormLabel>
                  <Input
                    type="text"
                    name="url"
                    placeholder="Website Url"
                    onChange={handleChange}
                  />
                </FormControl>
                <br/>
                <FormControl>
                  <FormLabel>Website Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Website Name"
                    onChange={handleChange}
                  />
                </FormControl>
              </form>
            </ModalBody>

            <ModalFooter>
              <div className="row">
                <div className="col-md-5 ml-5" style={{ marginLeft: "50px" }}>
                  <button className="btn btn-primary ms-3" type="submit">
                    {isLoading}
                  </button>
                </div>

                <div className="col-md-5">
                  <button className="btn btn-secondary" onClick={onClose}>
                    Cancel
                  </button>
                </div>
              </div>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
}

// export default forwardRef(AddWebsite)