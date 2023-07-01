# Polling-api
## Introduction
Introducing our cutting-edge Polling System API! 
Now, anyone can effortlessly create engaging polls, 
add multiple questions with customizable options, and gather insightful votes. 
Powered by Express, Node.js, and MongoDB, our API provides a seamless and efficient solution for all your polling needs.
<br />

## Features
1.Create Questions: Users have the freedom to create multiple questions, providing a versatile platform to gather opinions and insights from their audience.
2.Add Options: Enhancing the flexibility of the polling system, users can effortlessly add customizable options to each question, ensuring a comprehensive range of choices.
3.Register Votes: Empowering users to engage with the poll, our API enables them to cast their votes on specific options within a question, ensuring accurate representation of opinions.
4.Delete Questions: While maintaining data integrity, users have the ability to delete questions. However, a question cannot be deleted if any of its options have received votes, preserving the integrity of the voting process.
5.Delete Options: Users can seamlessly remove specific options from a question. However, an option cannot be deleted if it has received even a single vote, guaranteeing transparency and preserving the collected data.
6.View Question Details: Our API provides a comprehensive view of each question, displaying its associated options and all votes received. This comprehensive view enables users to analyze and understand the voting patterns and preferences of their audience.

<br />
## Important Links :-


## Requirements
To start developing, make sure you have the following installed in your environment:

Node.js
Ubuntu: Go to the official Node.js website and download the installer. Make sure to include .git in your PATH as npm might require it. You can download Git from here.
Other operating systems: You can find installation instructions for your specific OS on the official Node.js website and NPM website.
Once the installation is complete, you can verify it by running the following commands in your terminal:

bash
Copy code
$ node --version
v16.13.0

$ npm --version
8.2.0
If you need to update npm, you can use npm itself. Just run the following command and then reopen your terminal:

bash
Copy code
$ npm install npm -g
Running the Project Locally
To run the project on your local machine, follow these steps:

Open your terminal.

Navigate to the directory where you want to clone the project.

bash
Copy code
$ git clone https://github.com/<user_profile>/Polling_System_API
Install all the dependencies by running the following command:

bash
Copy code
$ npm install
Start the project on your local host using port 7000:

bash
Copy code
$ npm start
The project will now be running locally on http://localhost:7000.

Now you're all set to start developing and exploring the Polling System API on your local machine. Happy coding!





