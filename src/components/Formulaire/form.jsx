import './form.css'
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar'

function Form() {
  return (
    <div id="container">
      <h1 className="title-form">&#x261B; Contact &#x261A;</h1>
      <div className="underline"></div>
      <div className="icon_wrapper">
        <div className="icon">
          <PermContactCalendarIcon />
        </div>
      </div>
      <form action="#" method="post" id="contact_form">
        <div className="name">
          <label htmlFor="name"></label>
          <input
            type="text"
            placeholder="Mon nom"
            name="name"
            id="name_input"
            required
          />
        </div>
        <div className="telephone">
          <label htmlFor="name"></label>
          <input
            type="text"
            placeholder="Mon numéro"
            name="telephone"
            id="telephone_input"
            required
          />
        </div>
        <div className="email">
          <label htmlFor="email"></label>
          <input
            type="email"
            placeholder="Mon Email"
            name="email"
            id="email_input"
            required
          />
        </div>
        <div className="subject">
          <label htmlFor="subject"></label>
          <select
            placeholder="Subject line"
            name="subject"
            id="subject_input"
            required
          >
            <option disabled hidden value>
              Sujet
            </option>
            <option>j'aimerai commencer un projet</option>
            <option>J'aimerai poser une question</option>
            <option>J'aimerai faire une offre</option>
          </select>
        </div>
        <div className="message">
          <label htmlFor="message"></label>
          <textarea
            name="message"
            placeholder="J'aimerai parler de :"
            id="message_input"
            cols="30"
            rows="5"
            required
          ></textarea>
        </div>
        <div className="submit">
          <input type="submit" value="Envoyer un message" id="form_button" />
        </div>
      </form>
    </div>
  )
}

export default Form
