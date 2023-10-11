export default function Contactus(){
  return(
    <form>
      <div>
      <h1>CONTACT US</h1>
      <h5>CONTACT US</h5>
      <p>Get In Touch</p>
    </div>

    <div className="container">
      <div>
        <h2>Send us a message</h2>
        <input type="name" name="name" id="name" placeholder="Name" required/>
        <input type="email" name="email" id="" placeholder="Email"/>
        <input type="message" name="message" id="" placeholder="Message"/>
        <button>Send</button>
      </div>
      <div>
        <h2>Contact info</h2>
        <a href="https://www.flaticon.com/free-icons/phone" title="phone icons">+251909424567</a>
        <a href="https://www.flaticon.com/free-icons/phone" title="phone icons">+251909424567</a>
        <a href="https://www.flaticon.com/free-icons/phone" title="phone icons">+251909424567</a>
        <a href="https://www.flaticon.com/free-icons/phone" title="phone icons">+251909424567</a>
      </div>

    </div>
    </form>
    

  )
}