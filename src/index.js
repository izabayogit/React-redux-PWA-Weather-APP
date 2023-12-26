import React from 'react';
import ReactDom from "react-dom";
import App from "./App";
import Store from "./Store"

ReactDom.render(<Store><App /></Store>, document.getElementById('root'));
