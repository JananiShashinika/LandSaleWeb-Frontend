import React, { useRef, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import {Form,Button,FloatingLabel,} from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
export default function Email() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    
    emailjs
      .sendForm( "service_z9askpu", "template_vap9lks", form.current, "EHvcBHlnA4FYn_YTK" )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const heading_style = {color: "#1a0d27",fontWeight: "bold",fontFamily: "initial", textUnderlinePosition: "under",};

  return (
    <div>

      <Offcanvas
        show={show}
        onHide={handleClose}
        backdrop="static"
        style={{ color: "darkslateblue" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="mt-5 fw-bold text-decoration-underline">
            Hellow Every One
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="fst-italic mb-4">
            If you need any helps or If you like to share your ideas please
            contact us
          </p>
          <Form className="container" ref={form} onSubmit={sendEmail}>
            <Form.Group
              className="mb-4 mx-4 align-content-center"
              controlId="formBasicEmail"
            >
              <Form.Label className="text-center fw-semibold">
                Email address
              </Form.Label>
              <Form.Control
                type="email"
                name="user_email"
                placeholder="example@gmail.com"
              />
              <Form.Text className="text-muted fst-italic fw-lighter">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group
              className="mb-4 mx-4 align-content-center"
              controlId="ContactUsSubject"
            >
              <Form.Label className="text-center fw-semibold">
                Subject
              </Form.Label>
              <Form.Control placeholder="" type="text" name="user_subject" />

              <FloatingLabel
                controlId="floatingTextarea"
                label="Comments"
                className="mb-3 mt-2"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  name="message"
                />
              </FloatingLabel>
            </Form.Group>

            <Button
              variant="outline-primary"
              className="mb-2 col-5"
              style={{ marginLeft: "30%" }}
              onClick={sendEmail}
              type="submit"
              value="Send"
            >
              Send
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

