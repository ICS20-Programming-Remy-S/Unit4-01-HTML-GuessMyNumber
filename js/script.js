// Copyright (c) 2023 Skelton All rights reserved
//
// Created by: Remy Skelton
// Created on: Mar 2023
// This file contains the JS functions for index.html
"use strict"

function enterClicked () {
  
  let result = "";
  const MAX = 6;
  const MIN = 1;

  // Number User Guessed
  let userGuess = parseInt(document.getElementById("user-guess").value);
  // Random Number Generator
  let generator = Math.floor((Math.random() * MAX) + MIN);
  
  // Display for correct and incorrect guess
  if (userGuess == generator) {
    result = "Congratulations you have correctly gussed my number."
  }
  if ( userGuess != generator){
    result = "Sorry that is incorrect try again."
  }
  // Display Results back to User
  document.getElementById('result').innerHTML = result
}