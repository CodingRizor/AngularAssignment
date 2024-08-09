# AuthPage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


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

Technologies Used
Angular: Framework for building the application.
NgRx: State management for handling data across the application.
CSS: Styling for the user interface.