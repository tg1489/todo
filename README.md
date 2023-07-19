[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# To-Do App

The To-Do App is a simple web application designed to help users manage their tasks and create a personalized to-do list. Users can add, update, and delete tasks as needed, providing a seamless and efficient task management experience.

## Table of Contents

 • [Features](#features)

 • [Installation](#installation)

 • [Technologies Used](#technologies-used)

 • [Usage](#usage)

 • [Contributing](#contributing)

 • [Questions](#questions)

 • [License](#license)

## Features

+ Add new tasks: Users can add new tasks to their to-do list by entering the task description and clicking the "Add New Item" button.
+ Update tasks: Users can update the task description by clicking the "Edit" button and entering the new text for the task.
+ Delete tasks: Users can remove tasks from the to-do list by clicking the "Delete" button associated with each task.
+ Persistent data storage: The app utilizes MongoDB to store the to-do list items, ensuring that tasks are saved and accessible across sessions.

## Installation

To run the To-Do App, follow these steps:

1. Clone or download the repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies by running the following command:

```bash
npm install
```

1. Make sure you have MongoDB installed and running.
2. Start the server by running the following command:

```bash
npm start
```

1. Open your web browser and visit http://localhost:5000 to access the To-Do App.

## Technologies Used

The To-Do App is built using the following technologies:

+ Node.js: Provides the server-side runtime environment for the application.
+ Express: Used to create a web server and handle HTTP requests.
+ MongoDB: Serves as the database to store and manage the to-do list items.
+ Axios: Enables asynchronous communication between the front-end and back-end for tasks' creation, update, and deletion.
+ Bootstrap: Utilized for responsive and mobile-friendly design components.

## Usage

1. Upon opening the To-Do App, you will see a title "To-Do App" and an input field where you can add new tasks.
2. Type the task description in the input field and click the "Add New Item" button to add the task to your to-do list.
3. Your tasks will be displayed in a list format, with options to "Edit" or "Delete" each task.
4. To update a task, click the "Edit" button for the respective task, enter the new task description, and press "OK."
5. To remove a task from the list, click the "Delete" button for the corresponding task.
6. Your to-do list items will be automatically saved to the MongoDB database, allowing you to access them even after closing or refreshing the application.

## Contributing

Contributions to the To-Do App project are welcome! If you have any ideas, bug fixes, or improvements, please open an issue or submit a pull request.

## Questions

If you have any questions about this program or would like to report a bug, please contact the author through GitHub:
[GitHub](https://github.com/tg1489/)

Alternatively, you may reach out and email me down below if you have any additional questions about the program:
[Email](mailto:tonyguarino1489@gmail.com)

## License

This application is licensed under the MIT License. See the LICENSE file for more information.
