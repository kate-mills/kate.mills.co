import React from 'react'
import Title from '../Title'
import PhoneNumber from '../PhoneNumber'
import styled from 'styled-components'


const Contact = () => {
  const asterisk = <span className="required">&lowast;</span>;
  return (
    <ContactWrapper>
      <Title title="contact" subtitle="us" />
      <div className="center">
        <div className="instructions">
          <p>Call/text us at<PhoneNumber/>or contact us via the submission form and we'll get back to you as soon as we can.</p>
          <p> Thank you!</p>
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
              rows="10"
              className="form-control"
              placeholder="Tell us about your project..."
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
  &{
    padding: 3rem 0;
  }
  & .center{
    margin: 0 auto;
    width: 80vw;
    .instructions p:nth-child(2){
      margin-bottom: 2.5rem;
    }
  }
  label {
    display: block;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }
  .required {
    color: var(--favoriteColor);
    font-size: 1.5rem;
    padding-right: 2px;
  }
  .form-control,
  .submit {
    border: 1px solid var(--primaryBlack);
    border-radius: 0.25rem;
    font-size: 1rem;
    margin-bottom: 1rem;
    padding: 0.375rem 0.75rem;
    width: 100%;
    transition: var(--mainTransition);
  }
  .submit {
    background-color: var(--primaryBlack);
    outline: none;
    border-color: var(--primaryBlack);
    text-transform: uppercase;
    color: var(--primaryWhite);
    transition: var(--mainTransition);
    cursor: pointer;
    padding: 0.65rem 0.75rem;
    width: 100% !important;
  }
  input:focus,
  textarea:focus{
    outline-color: var(--primaryColor);
  }
  .submit:hover,
  .submit:focus{
    background: transparent;
    color: var(--primaryBlack);
  }
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--primaryBlack);
    opacity: 0.8; /* Firefox */
  }
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: var(--primaryBlack);
    opacity: 0.8;
  }
  ::-ms-input-placeholder { /* Microsoft Edge */
    color: var(--primaryBlack);
    opacity: 0.8;
  }


  @media(min-width: 992px){
    & .center{
      margin: 0 auto;
      width: 50vw;
    }
  }
`
export default Contact
