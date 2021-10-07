import React,{ useState} from "react";
import Modal from "react-modal";

const OptionModal = () => {
  const [modal, handelModal] = useState(undefined);
     handelModal(!modal);
return (
    <Modal
    isOpen={false}
    // * onRequestClose allow us to close the modal when we click the background
    onRequestClose={handelModal}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected Option </h3>
 
      <p className="modal__body">modal body</p>

    <button onClick={handelModal} className="button">
      okay
    </button>
  </Modal>
)
}


export default OptionModal;