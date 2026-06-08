import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Contact(){
  return(
    <div className="contact-page ecommerce-contact container">
      <Navbar/>
      <Header/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

function Header(){
  return(
    <header className="contact-header">
      <h1>Contact Us</h1>
      <p>Feel free to share your concerns with us by filling out the form below.</p>
    </header>
  );
}

function ContactForm(){
  return(
    <form id="contact-form" className="contact-form" onSubmit={(e)=>e.preventDefault()}>
        <TextField label="Full Name" name="name" />
        <TextField label="Email" name="email" />
        <MessageArea/>
        <SubmitButton/>
    </form>
  );
}

function TextField({label, name, value, onChange}){
  return(
      <div className="form-row">
        <label htmlFor={name}>{label}</label>
        <input id={name} name={name} type="text" value={value} onChange={onChange} />
      </div>
  );
}

function MessageArea(){
  return(
    <div className="form-row">
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" cols={30} rows={6}></textarea>
    </div>
  );
}

function SubmitButton(){
  function handleClick(e) {
    e.preventDefault();
    alert("Message Submitted!");
  }
  return(
    <div className="form-row">
      <button className="btn-primary" type="submit" onClick={handleClick}>Submit</button>
    </div>
  );
}

export default Contact