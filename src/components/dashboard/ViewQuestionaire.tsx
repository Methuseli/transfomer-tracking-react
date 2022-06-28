import React, { useEffect, useState } from "react";
import { Modal, useDisclosure, Button, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import axios from "axios";

interface DataProps{
    data : any,
}


export default function ViewQuestionaire({data} : DataProps){
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [questions, setQuestions] = useState([{
        question: '',
        question_text: '',
        rating: 0,
        questionaire: ''
    },]);


    useEffect(() => {
        axios
            .get(
                `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_API_VERSION}answers?questionaire=${data.id}`,
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
                    setQuestions(res.data);
                }
            })
            .catch((err) => {
                console.log(err);
                // setTimeout(() => {
                // }, 3000);
                }
            );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const token = localStorage.getItem('access_token');
    const accessToken = token !== null ? JSON.parse(token) : null;

    

    return (
      <>
        <button className="btn btn-secondary" onClick={onOpen}>
          View Questionaire
        </button>

        <Modal isOpen={isOpen} onClose={onClose} size="2xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader className="h3">Questionaire Information</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              {questions.map((question) => (
                <>
                  <div className="card px-4">
                    <p className="h4">{question?.question_text}?</p>
                    <div className="text-muted">
                      {question?.rating} stars / 5
                    </div>
                  </div>
                  <br />
                </>
              ))}
            </ModalBody>

            <ModalFooter>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
}

// export default forwardRef(ViewQuestinaire)