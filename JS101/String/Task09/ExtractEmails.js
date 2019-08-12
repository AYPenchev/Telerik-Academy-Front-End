'use strict'

function extractEmails() {
    let text = ['ivan.Petkov@gmail.com', 'petyo@petkov.bg', 'mail.com'];
    let emails = [];

    for (let email of text) {
        if (validateEmail(email)) {
            emails.push(email + "\n");
        }
    }
    console.log(emails);
}

extractEmails();

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}