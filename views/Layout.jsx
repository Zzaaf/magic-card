/* eslint-disable react/prop-types */
const React = require('react');

function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/style.css" />
        <title>Magic Card</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
