import React, {useState} from "react";
import { Spinner, Modal } from "@chakra-ui/react";

export default function AddCustomQuestionsModal(){
    const[modalVisible, setModalVisible] = useState(false);
    const[loading, setLoading] = useState(false);

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
            {/* <Modal
                style={{ marginTop: "-80px" }}
                visible={modalVisible}
                footer={false}
                onCancel={() => {
                setModalVisible(false);
                }}
                closable={false}>
                <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header" style={{ background: "#e02539" }}>
                    <h5 className="modal-title" style={{ color: "white" }} id="submitTicketModalLabel">
                        Add Custom question
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => {
                        setModalVisible(false);
                        }}
                        data-bs-dismiss="modal"
                        aria-label="Close">
                        <span aria-hidden="true"></span>
                    </button>
                    </div>
                    <form role="form text-left">
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Question" aria-label="Question" aria-describedby="question-addon"/>
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon"/>
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon"/>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn bg-gradient-dark w-100 my-4 mb-2">{oading}</button>
                        </div>
                    </form>
                </div>
                </div>
            </Modal> */}
        </>
    )
}