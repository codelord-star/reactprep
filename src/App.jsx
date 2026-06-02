function App(){
  return(
    <>
      <Header/>
      <ContactForm/>
      <Footer/>
    </>
  );
}

function Header(){
  return(
    <div>
      <h1>CONTACT FORM</h1>
      <p>Feel free to share your concerns with us by filling out the form below</p>
    </div>
  );
}

function ContactForm(){
  return(
    <form action="">
        <TextField label="Full Name"/>
        <TextField label="Email"/>
        <MessageArea/>
        <SubmitButton/>
    </form>
  );
}

function TextField({label, value, onChange}){
  return(
      <div>
        <label htmlFor="">{label}</label>
        <input type="text" value={value} onChange={onChange} />
      </div>
  );
}

function MessageArea(){
  return(
    <div>
      <label htmlFor="">Message</label>
      <textarea name="" id="" cols={30} rows={10} ></textarea>
    </div>
  );
}

function SubmitButton(){
  function handleClick() {
    alert("Message Submitted!");
  }
  return(
    <button type="submit" onClick={handleClick}>Submit</button>
  );
}

function Footer(){
  return(
    <div>
      <p>Accepting change is what makes us better.</p>
    </div>
  );
}

export default App