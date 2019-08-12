'use strict'

function parseURL() {
    let inputURL = 'http://telerikacademy.com/Courses/Courses/Details/239',
        protocol = inputURL.slice(0, inputURL.indexOf("://"));
    console.log(`[protocol] = ${protocol}`);

    let server = inputURL.slice(inputURL.indexOf("://") + 3);
    server = server.slice(0, server.indexOf("/"));
    console.log(`[server] =  ${server}`);

    let resource = inputURL.slice(inputURL.indexOf("/", inputURL.indexOf("://") + 3))
    console.log(`[resource] = ${resource}`);
}

parseURL();