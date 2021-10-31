import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { CustomSpan } from "./styles";
export default function ModalCustom({
  name,
  email,
  phone,
  oportunidades,
  showModal,
  setShowModal,
}) {
  return (
    <Modal
      show={showModal}
      onHide={(e) => setShowModal(!showModal)}
      size="lg"
      centered
      className="customModal"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <CustomSpan>More Information</CustomSpan>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CustomSpan>Name: {name}</CustomSpan>
        <CustomSpan>Email: {email}</CustomSpan>
        <CustomSpan>Phone: {phone}</CustomSpan>
        <CustomSpan>Opportunities: {oportunidades.join(", ")} </CustomSpan>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={(e) => setShowModal(!showModal)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
