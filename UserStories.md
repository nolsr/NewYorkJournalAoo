# User Story

## As a User

As a user, I want to add a date and a photo to my diary entries so that I can document special events that happened during my trip and relive the memories visually and chronologically later on.

## As a Developer

- Rework the UI to look "New Yorky"
  - Remove the Navigation-Header and Implement own Buttons for the navigation
  - Add Error messages for failing http requests
    - Add them as action types to the postReducer
    - Add them to context
- Add a Datepicker
  - Add it to `CreateScreen`
  - The Datepicker will need an `onChange` listener and a `changeHandler` function that will update the Posts date property
  - Add the date information to the display of each Post
  - Make posts automatically sort by date so that theyre in chronological order
  - Add the date field to the `postReducer`
- Add a Image Upload
  - Add it to `CreateScreen`
  - Implement an `onChange` listener with a `changeHandler` function that encodes the image data to base64
  - Display the images by passing the base64 string to an image
  - Add the image field to the `postReducer`

# What did I forget

- First off: unfortunately the react-native-datepicker library does not work with expo go (https://github.com/henninghall/react-native-date-picker -> Search for "expo go" on this page) so i just used a text input...
- Add the date and image fields to the `postReducer`
- Adding the parameters of the new fields to the `CreateScreen` and the `EditScreen` because i thought it would be enough to add them to the `PostForm`

# Slidedeck

https://www.figma.com/deck/dDiEgdTIB99rqMmk4ACpM3/AppDev-Final-Pitch?node-id=1-30&t=5Lc2Rcnbjek49izW-1
