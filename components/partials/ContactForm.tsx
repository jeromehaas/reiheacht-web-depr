import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { Lottie } from '@crello/react-lottie';
import {
  updateContactFormName,
  updateContactFormEmail,
  updateContactFormPhone,
  updateContactFormMessage,
  submitContactForm,
} from '@/redux/actions/index';
import sendButton from '../../public/animations/send-button.json';
import { sednMail } from '';

const StyledContactForm = styled.form`
  width: 100%;
  max-width: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 5fr auto;
  gap: 15px;
  grid-template-areas:
    "name name"
    "email phone"
    "message message"
    "button button";

    @media (max-width: 700px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr  1fr 5fr auto;
      grid-template-areas:
      "name"
      "email" 
      "phone"
      "message"
      "button"; 
    }

  input, textarea {
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;

    &::placeholder {
      color: ${(p) => p.theme.darkGrey};
      font-family: ${(p) => p.theme.helvetica55}
    }
  }

  button {
    border: none;
    outline: none;
    padding: 0px;
    background-color: transparent;
  }


.name { grid-area: name; }
.email { grid-area: email; }
.phone { grid-area: phone; }
.message { grid-area: message; }
.button { grid-area: button; }
`;

interface Props { }

const ContactForm: React.FunctionComponent<Props> = () => {
  const dispatch = useDispatch();
  const name = useSelector((state: RootStateOrAny) => state.contactForm.name);
  const email = useSelector((state: RootStateOrAny) => state.contactForm.email);
  const phone = useSelector((state: RootStateOrAny) => state.contactForm.phone);
  const message = useSelector((state: RootStateOrAny) => state.contactForm.message);
  const isSent = useSelector((state: RootStateOrAny) => state.contactForm.isSent);

  const inputHandler = (event: any, type: string): void => {
    switch (type) {
      case 'name': { dispatch(updateContactFormName(event.target.value)); break; }
      case 'email': { dispatch(updateContactFormEmail(event.target.value)); break; }
      case 'phone': { dispatch(updateContactFormPhone(event.target.value)); break; }
      case 'message': { dispatch(updateContactFormMessage(event.target.value)); break; }
      default: { dispatch(updateContactFormName(event.target.value)); }
    }
  };

  const formHandler = (event) => {
    event.preventDefault();
    dispatch(submitContactForm());
  };

  return (
    <StyledContactForm>
      <input type="text" className="name" placeholder="*Name" value={name} onChange={(event) => inputHandler(event, 'name')} />
      <input type="text" className="email" placeholder="*Email" value={email} onChange={(event) => inputHandler(event, 'email')} />
      <input type="text" className="phone" placeholder="Telefonnummer" value={phone} onChange={(event) => inputHandler(event, 'phone')} />
      <textarea className="message" id="" placeholder="*Schiess los!" value={message} onChange={(event) => inputHandler(event, 'message')} />
      <button className="button" onClick={(event) => formHandler(event)}>
        <Lottie
          config={{ animationData: sendButton, autoplay: false }}
          playingState={isSent ? 'playing' : 'paused'}
          speed={1}
          width="100%"
          height="100%"
          style={{ margin: '0 auto' }}
        />
      </button>
    </StyledContactForm>
  );
};

export default ContactForm;
