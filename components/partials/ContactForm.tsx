import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { Lottie } from '@crello/react-lottie';
import { P } from '@/components/text/Text';
import {
  updateContactFormName,
  updateContactFormEmail,
  updateContactFormPhone,
  updateContactFormMessage,
  submitContactForm,
  showErrorFormValidation,
} from '@/redux/actions/index';
import cx from 'classnames';
import { sendMail } from '../../services/mail';
import sendButton from '../../public/animations/send-button.json';

const StyledContactForm = styled.form`
  width: 100%;
  max-width: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 5fr auto;
  gap: 15px;
  grid-template-areas:
    "name name"
    "email phone"
    "message message"
    "button button"
    "errorMessage errorMessage";

    @media (max-width: 1100px) {
      max-width: 750px;
    }

    @media (max-width: 800px) {
      max-width: 100%;
    }

    @media (max-width: 700px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr  1fr 5fr auto auto;
      grid-template-areas:
      "name"
      "email" 
      "phone"
      "message"
      "button"
      "errorMessage";
    }

  input, textarea {
    padding: 15px;
    border: none;
    outline: none;
    border-radius: 5px;
    position: relative;
    font-family: 'Helvetica Neue 55 Roman', serif;
     font-size: 20px;

    &::placeholder {
      position: absolute;
      top: 15px;
      color: ${(p) => p.theme.darkGrey};
      font-size: 20px;
      font-family: 'Helvetica Neue 55 Roman', serif;
    }
  }

  button {
    border: none;
    outline: none;
    padding: 0px;
    background-color: transparent;
  }

  .errorMessage {
    background-color: ${(p) => p.theme.white};
    padding: 7.5px 15px;
    border-radius: 5px;
    text-align: center;
    font-size: 0px;
    height: 0px;
    padding: 0 15px;
    transition: all 0.25s ease;
    &.active {
      font-size: 20px;
      padding: 15px;
      height: unset;
    }
  }

.name { grid-area: name; }
.email { grid-area: email; }
.phone { grid-area: phone; }
.message { grid-area: message; }
.button { grid-area: button; }
.button { grid-area: button; }
.errorMessage { grid-area: errorMessage; }

`;

const ContactForm: React.FunctionComponent = () => {

  const dispatch = useDispatch();
  const name = useSelector((state: RootStateOrAny) => state.contactForm.name);
  const email = useSelector((state: RootStateOrAny) => state.contactForm.email);
  const phone = useSelector((state: RootStateOrAny) => state.contactForm.phone);
  const message = useSelector((state: RootStateOrAny) => state.contactForm.message);
  const isSent = useSelector((state: RootStateOrAny) => state.contactForm.isSent);
  const showError = useSelector((state: RootStateOrAny) => state.contactForm.showError);

  const inputHandler = (event: any, type: string): void => {

    switch (type) {
      case 'name': {

        dispatch(updateContactFormName(event.target.value)); break;

      }
      case 'email': {

        dispatch(updateContactFormEmail(event.target.value)); break;

      }
      case 'phone': {

        dispatch(updateContactFormPhone(event.target.value)); break;

      }
      case 'message': {

        dispatch(updateContactFormMessage(event.target.value)); break;

      }
      default: {

        dispatch(updateContactFormName(event.target.value));

      }
    }

  };

  const formHandler = (event) => {

    event.preventDefault();
    if (name && email && message) {

      dispatch(submitContactForm());
      sendMail(name, email, phone, message);

    } else {

      dispatch(showErrorFormValidation(true));

    }

  };

  return (
    <StyledContactForm>
      <input type="text" className="name" placeholder="*Name" value={name} onChange={(event) => inputHandler(event, 'name')} />
      <input type="email" className="email" placeholder="*Email" value={email} onChange={(event) => inputHandler(event, 'email')} />
      <input type="number" className="phone" placeholder="Telefonnummer" value={phone} onChange={(event) => inputHandler(event, 'phone')} />
      <textarea className="message" id="" placeholder="*Schiess los!" value={message} onChange={(event) => inputHandler(event, 'message')} />
      <button className="button" type="button" onClick={(event) => formHandler(event)}>
        <Lottie
          config={{ animationData: sendButton, autoplay: false }}
          playingState={isSent ? 'playing' : 'paused'}
          speed={1}
          width="100%"
          height="100%"
          style={{ margin: '0 auto' }}
        />
      </button>
      <div className={cx(`errorMessage ${showError ? 'active' : null}`)}>
        <P color="darkGrey" size="small">Fülle zuerst alle *Felder aus.</P>
      </div>
    </StyledContactForm>
  );

};

export default ContactForm;
