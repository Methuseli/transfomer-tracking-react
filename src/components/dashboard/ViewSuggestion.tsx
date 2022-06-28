import React from 'react'
import {
  Modal,
  useDisclosure,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

type Props = {
    suggestion: any
}

export default function ViewSuggestion({suggestion}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();


  

  return (
    <>
      <button className="btn btn-secondary" onClick={onOpen}>
        View Suggestions
      </button>

      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className='h4'>Suggestion Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            
                <div className="card px-4 py-4">
                  <br/>
                  <div className="text-muted">{suggestion}</div>
                </div>
                <br />
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}