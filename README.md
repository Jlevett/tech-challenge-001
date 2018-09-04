# Tech Challenge

## ABOUT

A simple React app based around a component that renders different forms depending on the contents of a JSON-based form definition.
Returns an object containing the form data on submission.

For the purpose of verification and validation, there are three form components on the page that have different JSON-based form definitions.

'Individually' when each form is complete and the submit button is selected, an alert box displays a stringify of the object (form data) returned of that form. It is also printed on the console and matches the example format below.

# HOW TO RUN

### [APP HOSTED HERE. CLICK TO TRY IT OUT!](https://jlevett.github.io/tech-challenge-001/ "Live App Hosted Here")

### Run:
1. Download
2. npm install
2. npm start
3. Open  http://localhost:3000

### Run build version:
1. Download
2. npm install
3. npm run build
3. serve -s build
4. Open  http://localhost:5000

## CHALLENGE NOTES

Purpose:
We want you to create a component that will allow someone to render a number of different forms, e.g. sign up, mailing list registration, feedback form. Given the proposed range of forms to support, so we want to create a single component that can be easily adapted.

Details:
Create a dynamic React component that can accept a JSON-based form definition (via a prop) and produce a form specific enough to be used for collecting a person’s details. The form should include the following fields:
```
name
    text based
    should enforce the need for a first and last name (separated by a space)
date of birth
    date based
    required, should be older than 18
gender
    options based (male/female)
    optional
contact number
    text based
    optional
    allow for multiple values (e.g. mobile, home, etc)
require guardian consent
    checkbox
    optional
guardian details (name, contact)
    text based
    required/applicable if consent checkbox is ticked
```
The form should provide the resulting form data on successful submission. A valid output for the form might be the following:
```
{
    name: "John Foo",
    dob: "1990-01-01",
    gender: 1,
    contact: [{
        type: "mobile",
        value: "0400123123"
    },{
        type: "home",
        value: "610000000"
    }],
    guardian: {
        name: "Jane Foo",
        contact: "0400123123"
    }
}
```
The form should be generated at runtime based on a JSON schema that you devise. Changing the schema should alter what fields are shown and what data is returned on submit.

Please ensure the code is original - please don't not use an existing form library.
