import { useState } from "react";

function Contact() {
  // the client's password
  const password = "swordfish";

  // stays false until the right password is entered
  const [authorized, setAuthorized] = useState(false);

  // turns on if someone types the wrong password
  const [error, setError] = useState(false);

  // checks what was typed against the password when the form is submitted
  function handleSubmit(e) {
    e.preventDefault();
    const enteredPassword = e.target.querySelector(
      'input[type="password"]',
    ).value;
    const auth = enteredPassword === password;
    setAuthorized(auth);
    setError(!auth);
  }

  // login form people see first
  const login = (
    <form action="#" onSubmit={handleSubmit}>
      <input type="password" placeholder="Password" />
      <input type="submit" />
      {error && <p>Incorrect password, try again.</p>}
    </form>
  );

  // contact details, hidden until the password is right
  const contactInfo = (
    <ul>
      <li>client@example.com</li>
      <li>555.555.5555</li>
    </ul>
  );

  // show the form or the contact info depending on authorized
  return (
    <div id="authorization">
      <h1>{authorized ? "Contact" : "Enter the Password"}</h1>
      {authorized ? contactInfo : login}
    </div>
  );
}

export default Contact;
