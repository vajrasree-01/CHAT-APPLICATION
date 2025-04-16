# CHAT-APPLICATION

Company : CODTECH IT SOLUTIONS

Name : Pasumarthi Vajrasree

intern ID : CT06WU89

Domain : Full Stack DEvelopment

Duration : 6weeks

Mentor : Neela Santhosh

I created a real-time chat application entirely on my own using Node. js and Socket. io. This project was intended to showcase my knowledge of web sockets and real-time interactions via the internet. The project's overall framework includes a backend developed with Node. js and Express, along with a frontend that features HTML and JavaScript to enable users to send and receive messages instantaneously. The application allows two or more users to engage in real-time communication via web sockets, eliminating the need for page refreshes or employing a conventional database for message storage. I utilized Visual Studio Code as my development environment, and the server operates locally at http://localhost:3000.
I started by establishing a project folder to hold all the files and code pertinent to the application. Inside this directory, I initialized a Node. js project by executing the command npm init -y, which automatically generated a package. json file for managing project dependencies. I subsequently installed the two key libraries for the backend: express, which is utilized for configuring the web server, and socket. io, which manages real-time communication between users through web sockets. These installations formed the basis for the server-side code that drives the chat app's real-time features.
The primary backend logic was scripted in a file named server. js. This file begins by importing the necessary modules, including Express, HTTP, and Socket. io. I developed an Express app and an HTTP server instance using http. createServer(), which was then linked to Socket. io. I set up the server to serve static files from a folder named public, where the frontend files such as HTML, CSS, and client-side JavaScript are located. The Socket. io configuration involves event listeners for when users connect to the chat and when they disconnect. Upon a user sending a message, the server listens for the chat message event and broadcasts the message to all connected users using io. emit(). This broadcasting capability is what facilitates real-time updates for every user currently in the chat room.
On the frontend, I created a file titled index. html and positioned it within the public directory. This HTML file outlines the structure and visual design of the chat interface. It features an unordered list to showcase messages, an input field for composing new messages, and a submit button to send them. The page is styled with fundamental CSS to guarantee a neat and user-friendly interface. The form is designated with id="form", the input field with id="input", and the message list with id="messages", simplifying the selection and manipulation of these elements using JavaScript.
The real-time communication on the frontend is managed through a

OUTPUT:

![Image](https://github.com/user-attachments/assets/2cd3f1e7-03bd-40b5-a92f-a2c144cd0829)
