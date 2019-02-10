import React from 'react';

const HTML = (props) => (
  <html lang="en">
    <head>
      <title>Isomorphic Router Demo</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css"
      />
    </head>
    <body>
      <div
        id="root"
      >{props.children}
      </div>
      <script
        id="initial-data"
        initial-data={props.serverState}
      />
      <script type="application/javascript" src="/main.bundle.js" />
    </body>
  </html>
);

export default HTML;
