# Authorization Form

A small React project from Codecademy's Full-Stack Engineer path. The setup: a client loves their new site but doesn't want their contact info out in the open, so I hid the contact page behind a password form.

**Live site:** https://ktforge.github.io/authorization-form/

## What it does

The page opens with "Enter the Password" and a login form.
Typing the right password swaps the form out for the client's email and phone number, and the heading changes to "Contact".
A wrong password leaves the form up and shows "Incorrect password, try again."

The password is swordfish if you want to try it.

## How to run it

1. Install Node.js if you don't have it.
2. In this folder, run npm install.
3. Run npm run dev and open the link it prints.

## What I learned

This was my first time using useState. authorized starts out false, and calling setAuthorized makes React re-render the component on its own, so I never had to touch the page myself.

I saved the login form and the contact list in their own variables first. That kept the return short, and one ternary picks which one to show.

After finishing, I went back and switched == to ===, added e.preventDefault() so the form doesn't try to reload the page, and added a second piece of state for the wrong password message.

This isn't real security. The password is right there in the JavaScript, so anyone can find it with DevTools. A real site would check it on a server.

Built by DeVante Bush
