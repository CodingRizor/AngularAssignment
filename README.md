# AngularAssignment
This assignment covers the login and signup functionality created in Angular.
This project is a multi-step Angular application that allows users to either log in or sign up based on their email or phone number. Below is a brief overview of the functionalities from the home page to the second step of the signup process.

Home Page
The home page serves as the entry point of the application, where users are prompted to enter their email or phone number.

Functionality:
Users enter their email address or phone number into a text field.
Upon submission, the input is validated.
If the entered email or phone number matches an existing user in the system, the user is redirected to the login page otherwise signup page.

Login Page
The login page allows users to authenticate by entering their credentials.

Functionality:
Users input their email or phone number and password.
The input is validated against stored user data.
If the credentials match an existing user, the user is logged in and granted access.
If the credentials do not match, an error message is displayed.

Signup Page (Step 1)
The first step of the signup process collects initial user information.

Functionality:
Users fill out a form with their basic details, including email or phone number, name, and password.
The form validates the input to ensure that all required fields are filled out and follow the correct format.
Upon successful validation, the user data is saved temporarily, and the user is redirected to the next signup step.

Signup Page (Step 2)
The second step of the signup process collects additional details.

Functionality:
Users provide additional information, including organization details, designation, birth date, city, and pincode.
The form validates this input, including checks for valid organization names, city names, and pincode formats.
Upon successful validation, the combined user data from both signup steps is saved to local storage.
The user is then redirected to the login page, with a success message indicating that the registration was successful.
All the data is stored in the local storage(cache) so user can verify or check its email address and password from the cache.
Also all the user data is available in the console.
Technologies Used
Angular: Framework for building the application.
NgRx: State management for handling data across the application.
CSS: Styling for the user interface.
