import React, { useEffect, useState } from "react";
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
    useToast,
    Radio,
    RadioGroup
} from "@chakra-ui/react";
import axios from "axios";

export default function EditTransformer({ setReload, record }: any) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any>({});
    const [status, setStatus] = useState<string>("");

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
            "Successfully edited transformer"
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
        const payload = {
            ...data,
            status: status === "active" ? true : false
        }
        axios
            .patch(
                `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_API_VERSION}transformers/${record.id}/`,
                payload,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "application/json",
                        accept: "application/json",
                    },
                }
            )
            .then((res) => {
                if (res.status === 200) {
                    setTimeout(() => {
                        setSuccessful(true);
                        setLoading(false);
                        setError("");
                        setData({});
                        onClose();
                        setReload(true);
                        toast({
                            title: "Successfully edited transformer",
                            status: "success",
                            isClosable: true,
                        });
                    }, 500);
                }
            })
            .catch((err) => {
                console.log(err);
                setTimeout(() => {
                    setError("Failed to update transformer");
                    setLoading(false);
                }, 500);
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

    useEffect(() => {
        if (record) {
            record.status
                ? setStatus("active")
                : setStatus("inactive");
        }
    }, [record]); 

    return (
        <>
            <button className="btn btn-warning" onClick={onOpen}>
                Edit
            </button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <>{errorValue}</>
                    <>{successComponent}</>
                    <ModalHeader className="h4">Edit Transformer</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <form onSubmit={handleSubmit}>
                            <FormControl>
                                <FormLabel className="">Location</FormLabel>
                                <Input
                                    type="text"
                                    name="location"
                                    placeholder={`${record?.location}`}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <br />
                            <FormControl>
                                <FormLabel>City</FormLabel>
                                <Input
                                    type="text"
                                    name="city"
                                    placeholder={`${record?.city}`}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <br />
                            <FormControl>
                                <FormLabel>Transformer Id</FormLabel>
                                <Input
                                    type="text"
                                    name="transformer_identity"
                                    placeholder={`${record?.transformer_identity}`}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <br />
                            <RadioGroup
                                onChange={setStatus}
                                value={status}
                            >
                                <Radio value='active'>
                                    Active
                                </Radio>
                                <Radio value='inactive'>
                                    InActive
                                </Radio>
                            </RadioGroup>
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
            </Modal >
        </>
    );
}