import React, { useState } from "react";
import {
  Spinner,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import axios from "axios";


export default function AddCable({setReload} : any) {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
      manhole_id: "",
      location: "",
      city: "",
    });
  
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
      <Alert status="success">
        <AlertIcon />
        "Successfully added cable"
      </Alert>
    );
  
    const hasError = error === "";
  
    const errorValue = hasError ? "" : errorComponent;
  
    const successComponent = successful ? "" : success;
  
    const token = localStorage.getItem("access_token");
    const accessToken = token !== null ? JSON.parse(token) : null;
  
    const handleSubmit = (event: any) => {
      event.preventDefault();
      setLoading(true);
      if (data?.manhole_id === "" || data?.location === "" || data?.city === "") {
        setLoading(false);
        setError("Fill all the required fields!");
        return;
      }
      axios
        .post(
          `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_API_VERSION}manholes/`,
          data,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
              accept: "application/json",
            },
          }
        )
        .then((res) => {
          if (res.status === 201) {
            setTimeout(() => {
              setSuccessful(true);
              setLoading(false);
              setError("");
              setData({
                manhole_id: "",
                location: "",
                city: "",
              });
              onClose();
              setReload(true);
            }, 3000);
          }
        })
        .catch((err) => {
          console.log(err);
          setTimeout(() => {
            setError("Something went wrong. Try again");
            setLoading(false);
          }, 3000);
        });
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
          Add Manhole
        </button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <>{errorValue}</>
            <>{successComponent}</>
            <ModalHeader className="h4">Add Manhole</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel className="">Manhole ID</FormLabel>
                  <Input
                    type="text"
                    name="manhole_id"
                    placeholder="Manhole ID"
                    onChange={handleChange}
                  />
                </FormControl>
                <br />
                <FormControl>
                  <FormLabel>Location</FormLabel>
                  <Input
                    type="text"
                    name="location"
                    placeholder="Location"
                    onChange={handleChange}
                  />
                </FormControl>
                <br />
                <FormControl>
                  <FormLabel>City</FormLabel>
                  <Input
                    type="text"
                    name="city"
                    placeholder="City"
                    onChange={handleChange}
                  />
                </FormControl>
                <br />
              </form>
            </ModalBody>
  
            <ModalFooter>
              <div className="row">
                <div className="col-md-5 ml-5" style={{ marginLeft: "20px" }}>
                  <button
                    className="btn btn-primary ms-3"
                    onClick={handleSubmit}
                    type="submit"
                  >
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
  
  
  