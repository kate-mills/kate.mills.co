import React from 'react'
import Title from '../Title'
import styles from '../../css/contact.module.css'
import PhoneNumber from '../PhoneNumber'
const Contact = () => {
const asterisk = (
    <span style={{ color: 'var(--primaryColor)', paddingRight: '2px' }}>&lowast;</span>
  )
  return (
    <section className={styles.contact}>
      <Title title="get a free" subtitle="quote" />
      <div className={styles.center}>
        <div className={styles.instructions}>
          <p>Please give us a call at
             <PhoneNumber/>  or contact us via the submission form and we'll get back to you as soon as we can.</p>
          <p className={styles.thanks}> Thank you!</p>
        </div>
        <form
          className={styles.form}
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
              className={styles.formControl}
              required
            />
          </div>

          <div>
            <label htmlFor="email">{asterisk}email:</label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
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
                className={styles.formControl}
                required
              />
            </label>
          </div>
            <label htmlFor="message">message:</label>
            <textarea
              name="message"
              id="message"
              rows="10"
              className={styles.formControl}
              placeholder="Tell us about your project..."
            />
          </div>
          <div>
            <input type="submit" value="send" className={styles.submit} />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
