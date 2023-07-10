# Polling-api
## Introduction
Introducing our cutting-edge Polling System API! 
Now, anyone can effortlessly create engaging polls, 
add multiple questions with customizable options, and gather insightful votes. 
Powered by Express, Node.js, and MongoDB, our API provides a seamless and efficient solution for all your polling needs.
<br />

## Features
1.Create Questions: Users have the freedom to create multiple questions, providing a versatile platform to gather opinions and insights from their audience.<br />
2.Add Options: Enhancing the flexibility of the polling system, users can effortlessly add customizable options to each question, ensuring a comprehensive range of choices.<br />
3.Register Votes: Empowering users to engage with the poll, our API enables them to cast their votes on specific options within a question, ensuring accurate representation of opinions.<br />
4.Delete Questions: While maintaining data integrity, users have the ability to delete questions. However, a question cannot be deleted if any of its options have received votes, preserving the integrity of the voting process.<br />
5.Delete Options: Users can seamlessly remove specific options from a question. However, an option cannot be deleted if it has received even a single vote, guaranteeing transparency and preserving the collected data.<br />
6.View Question Details: Our API provides a comprehensive view of each question, displaying its associated options and all votes received. This comprehensive view enables users to analyze and understand the voting patterns and preferences of their audience.<br />

<br />



## Requirements
To start developing, make sure you have the following installed in your environment:

Node.js
Ubuntu: Go to the official Node.js website and download the installer. Make sure to include .git in your PATH as npm might require it. You can download Git from here.
Other operating systems: You can find installation instructions for your specific OS on the official Node.js website and NPM website.

Once the installation is complete, you can verify it by running the following commands in your terminal:
$ node --version<br />
v16.13.0<br />

$ npm --version<br />
8.2.0<br />
If you need to update npm, you can use npm itself. Just run the following command and then reopen your terminal:<br />

$ npm install npm -g<br />
Running the Project Locally<br />
To run the project on your local machine, follow these steps:<br />

Open your terminal.<br />

Navigate to the directory where you want to clone the project.<br />

[$ git clone https://github.com/<user_profile>/Polling_System_API](https://github.com/Ngp55/pollingapi.git)
Install all the dependencies by running the following command:<br />
$ npm install<br />
Start the project on your local host using port 7000:<br />

$ npm start<br />
The project will now be running locally on http://localhost:7000.<br />

Now you're all set to start developing and exploring the Polling System API on your local machine. Happy coding!
## Screenshot
1. http://localhost:7000/api/v1/questions/create
![1](https://github.com/Ngp55/pollingapi/assets/40921926/96ecf9fa-f39a-4d81-ae49-f48a9d41291a)
2.http://localhost:7000/api/v1/questions/64aae4dbb2aacd818f8bfa48/create-option
![2](https://github.com/Ngp55/pollingapi/assets/40921926/f56246bc-dc10-4fe1-8bf5-4e431aca0cbe)
3.http://localhost:7000/api/v1/options/64aae53ab2aacd818f8bfa51/addVote

4.http://localhost:7000/api/v1/options/64aae51fb2aacd818f8bfa4b/delete

5.http://localhost:7000/api/v1/questions/64aae4b1b2aacd818f8bfa46/delete
![5](https://github.com/Ngp55/pollingapi/assets/40921926/4c2bf97f-44e9-494e-a77a-8d60a52dc9d9)
6.http://localhost:7000/api/v1/questions/64aae4dbb2aacd818f8bfa48
![6](https://github.com/Ngp55/pollingapi/assets/40921926/db88539d-19e6-4ab5-8c68-7bf54505b63a)
![7](https://github.com/Ngp55/pollingapi/assets/40921926/bc6df06c-6066-4418-b102-7d1206b45044)
![8](https://github.com/Ngp55/pollingapi/assets/40921926/313f3444-666a-453d-9c19-850035c4d957)
