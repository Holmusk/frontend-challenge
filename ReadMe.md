Front-end engineer challenge
============================
This challenge is designed to assess the ability of a front-end candidate to write component-based UIs.

## Submission instructions
1. Fork this repository on github.
2. Complete the project as described below within your fork.
4. Push all of your changes to your fork on github and submit a pull request to this repository.

## Project description

Write a component that renders arbitrary component tree of checkboxes and radios state.

This component should have an input box and three buttons:
1. when clicked, the first button will serialize the full state of the application and copy it to the clipboard. 
2. This state then can be pasted to the input box and reset the current application state on the click of the second button.
3. Click on third button should load state from remote endpoint and render it (no need to implement server side, just assume there is webservice returns valid app state)

Refer to the image below for a simple (but not complete) example.

[![example](example.gif)](example.gif)

## Implementation instructions

1. Use VueJs
2. Use best practices in front-end development

## Evaluation criteria

1. Code quality and organization
2. Code readability
3. Commit history
4. Test coverage