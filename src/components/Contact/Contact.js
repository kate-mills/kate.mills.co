import React from 'react'
import Title from '../Title'
import styled from 'styled-components'


const Contact = () => {
  const asterisk = <span className="required">&lowast;</span>;
  return (
    <ContactWrapper>
      <Title title="contact" subtitle="Me" />
      <div className="center">
        <div className="instructions">
          <p>Please contact me via the submission form and I'll get back to you as soon as possible.</p>
        </div>
        <form
          className="form"
          name="contact"
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          action="/thankyou/"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label htmlFor="name">
              {asterisk}name:</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              required
            />
          </div>

          <div>
            <label htmlFor="email">{asterisk}email:</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              required
            />
          </div>
          <div>
          <div>
            <label htmlFor="phone">
              {asterisk}Phone:
              <input
                type="tel"
                name="phone"
                id="phone"
                className="form-control"
                required
              />
            </label>
          </div>
            <label htmlFor="message">message:</label>
            <textarea
              name="message"
              id="message"
              rows="12"
              className="form-control"
              placeholder=""
            />
          </div>
          <div>
            <input type="submit" value="send" className="submit"/>
          </div>
        </form>
      </div>
    </ContactWrapper>
  )
}

const ContactWrapper = styled.section`
    padding: 0 1rem 3rem;
    max-width: 100%;
    margin: auto auto;

  & .center{
    textarea, input:not([type="submit"]) {
      background-color: var(--clr-secondary-50);
      color: var(--bg-light-txt);
      outline: none;
    }
    margin: 0 auto;
    max-width: 90%;
    .instructions {
      display:flex;
      flex-direction: column;
      justify-content: center;
      max-width: 85%;
      margin: 0 auto .5rem;
      *{ width: 100%;}
      p:nth-child(1){
        margin: 0 auto;
        text-align: center;
      }
      p:nth-child(2){
        margin: 1rem auto 2.5rem;
        text-align: center;
    }
  }
  label {
    display: block;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }
  .required {
    color: var(--clr-primary-dark);
    background-color: var(--clr-secondary-50) !important;
    background: var(--clr-secondary-50) !important;
    font-size: 1.5rem;
    padding-right: 2px;
  }
  .form-control,
  .submit {
    border: 1px solid var(--clr-secondary-color);
    border-radius: 0.25rem;
    font-size: 1rem;
    margin-bottom: 1rem;
    padding: 0.375rem 0.75rem;
    width: 100%;
    transition: var(--mainTransition);
  }
  .submit {
    background-color: var(--clr-secondary-50);
    outline: none;
    border-color: var(--bg-light-txt);
    text-transform: uppercase;
    transition: var(--mainTransition);
    cursor: pointer;
    padding: 0.65rem 0.75rem;
    width: 100% !important;
  }
  input:focus,
  textarea:focus{
    outline-color: var(--clr-primary-color);
  }
  .submit:hover,
  .submit:focus{
    background-color: var(--clr-secondary-light);
    color: var(--bg-light-txt);
  }
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--bg-light-txt);
    opacity: 0.8; /* Firefox */
  }
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: var(--bg-light-txt);
    opacity: 0.8;
  }
  ::-ms-input-placeholder { /* Microsoft Edge */
    color: var(--bg-light-txt);
    opacity: 0.8;
  }


  @media(min-width: 992px){
    &{
      max-width: 70%;
    }
    & .center{
      margin: 0 auto;
      width: 80%;
    }
  }
`
export default Contact
