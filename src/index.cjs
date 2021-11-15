require("babel-polyfill"); // https://webpack.js.org/guides/shimming/

let {loadable} = require("@loadable/component"); // https://github.com/gregberge/loadable-components

// node-fetch config index.js
require('./fetch-polyfill.js');

let serve = require('./Server.ts');
let token = require('./Token.ts');
let pipeline = require('./Pipeline.ts');
let express = require('express');
// import { serve } from "./Server";
// import {token} from './Token';
// import {pipeline} from './Pipeline';

var leafletToken = serve();

// import {* as functions} from 'firebase-functions';
// import express from 'express';
// var express = require("express");
let fs = require('fs');
// import fs from "fs";

var index = fs.readFileSync("./index.html", "utf8");

var {html} = require("./App.tsx");

// Import the functions you need from the SDKs you need
let initializeApp = require('firebase/app');
//import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyA2Cr15e6v75at9vZwpO_gadOkjhYTeDs8",
  authDomain: "poligonosapp-356a7.firebaseapp.com",
  projectId: "poligonosapp-356a7",
  storageBucket: "poligonosapp-356a7.appspot.com",
  messagingSenderId: "1000159702201",
  appId: "1:1000159702201:web:781f0b3958633aacf7ff68",
  measurementId: "G-FTHXQ39622",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

var app = express();
app.get("**", (req, res) => {
  getPolygons().then((polygons) => {
    // let html = renderToString({ jsx });
    // res.send(html);
    res.set("Cache-Control", "public, max-age=600, s-maxage=1200");
  });
});
