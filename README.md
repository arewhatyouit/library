# Book Library Application

A simple JavaScript application to track your book collection with read status management. This project was created as coursework for The Odin Project's JavaScript curriculum.

## Live Preview
Check out the live application: [https://library.octoprismo.com/](https://library.octoprismo.com/)

## Features
- Add books with title, author, and page count information
- Display books in a responsive grid
- Remove books from your collection
- Toggle read/unread status for each book

## Technical Implementation
- **Data Structure**: Array-based storage with constructor-generated book objects
- **OOP Concepts**: Constructor pattern with prototype methods
- **DOM Handling**: Dynamic rendering with event delegation
- **Unique IDs**: Generated with crypto.randomUUID()

## Core JavaScript Techniques Used
- Constructor functions and prototype methods
- Form data collection and processing
- DOM manipulation (querySelector, getElementById)
- Element traversal (closest method)
- Event listeners and callback functions
- Array methods (push, findIndex, splice, find)

## Project Structure
```
Book Constructor → Creates book objects
   ↓
myLibrary Array → Stores all books
   ↓
displayInGrid → Renders books to UI
   ↓
Event Handlers → Manage user interactions
```

## Usage
1. Fill out the form with book details
2. Press submit to add book to library
3. Click "Remove" to delete a book
4. Click "Read?" to toggle read status

## Code Highlights
- Synchronizes data model with UI display
- Memory-efficient prototype methods
- Event delegation for dynamically created elements
- Maintains array and DOM consistency
