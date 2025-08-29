# Bajaj Finserv Health Test API

## Submitted By:

- Name: Manas Maheshwari
- Registration Number: 22BCE10492

## Description

This is a Node.js REST API built as part of the Bajaj Finserv Health Test. The API accepts a POST request at `/bfhl` with an array input and returns categorized data including even numbers, odd numbers, uppercase alphabets, special characters, sum of numbers, and an alternating-caps reversed alphabet string.

## Features

- Separates input into even numbers, odd numbers, uppercase alphabets, and special characters
- Returns sum of all numbers as a string
- Generates a reversed alphabetical concatenation string with alternating uppercase and lowercase letters
- Provides user details such as user_id, email, and roll number in the response
- Proper error handling and response status codes

## Usage

Send a POST request to `/bfhl` with JSON body containing key `"data"` mapped to an array of strings/numbers.
