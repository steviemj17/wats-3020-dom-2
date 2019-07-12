# WATS 3020: Document Object Model 2
### Data Driven DOM: Using Fetch and jQuery to Retrieve Data

Next to the importance of creating web pages with dynamic HTML and CSS, is the idea of data driven web pages.  Applications are made up of both code and data, and in order to create applications we need to manage data on the page.  In fact, we need to let the data drive the way in which the page is rendered.  If our data contains of list of 5 items, this means our html will probably contain a list (`ul` or `ol`) with 5 list items (`li`).

In order to load data external to the html file, we need to a browser technique was created based on a concept that was developed by Microsoft in 1999 called [XMLHttpRequest or XHR](https://en.wikipedia.org/wiki/XMLHttpRequest).  XHR has been implemented in all modern browsers.  Initially it was designed to return XML (a language similar to HTML) data, but now we usually see data returned as JSON (JavaScript Object Notation) which resembles a JavaScript Object, but requires all keys to be quoted. JSON contains key value pairs in which the keys ar strings and the values maybe an JavaScript type. See an example below of JSON:
```JavaScript
{
  "course": "WATS 3020",
  "credit"s: 5,
  "appliesToCertificate": true
}
```
#### Promises
There are many libaries and a few commands that support data retrieval in the browser. We'll look at how to use a jQuery command `$.get` and the `fetch` command. These command are sometimes called  **AJAX** commands which is a acronym for Asynchronous JavaScript and XML.  jQuery AJAX has been around for many years and the **fetch** command is relatively new.  jQuery version 3 and the fetch command return data in the form of a [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).  The `fetch` promise is more standardized than the jQuery promise. There used to be some argument over which was better: callbacks or promises, but now it is widely accepted that promises are preferred.

In earlier days, AJAX commands would receive response data in callbacks, but promises prevent what's know as "callback hell", a state of code in which there are many nested lines of code.  **Promises** clean up code, by returning a valid response in a function referred to as the **resolve** and errors in a function referred to as the **reject**. The code that receive the promise can deal with valid and error data using chained functions.  The code below shows how to you would receive data via a promise returned by a `fetch` command:
```JavaScript
fetch("http://httpstat.us/500")
    .then(function(response) {
        console.log("ok");
    }).catch(function(error) {
        console.log("error");
    });
```
Compare this to how you would code the same call in jQuery:
```JavaSCript
$.get("http://httpstat.us/500")
    .done(function (response) {
      console.log("ok");
    .fail(function(error) {
      alert( "error" );
  })
```
The syntax is different but the concepts are very similar.

In this assignment we'll process the data returned and use it to drive the creation HTML to make it available on the web page.

### API's
**API** is an acronym that stands for **Application Programming Interface**.  API's link us to resources which usually return data.  The resource is specified by a **URI** (acronym for **Uniform Resouce Indicator**) which looks a lot like a **URL** (acronym for **Uniform Resouce Locator**). URL's are a subset of URI's. 

We'll do 3 tutorial's in which we fetch data from the [Random User Generator](https://randomuser.me).  This api will return data representing one or more people in a random fashion.  The format of the data returned is always the same, but the values differ.  Below is an example of what is returned with a call for a single person:
```JSON
{
    "results": [
        {
            "gender": "female",
            "name": {
                "title": "mrs",
                "first": "vanuza",
                "last": "jesus"
            },
            "location": {
                "street": "7610 rua são sebastiao ",
                "city": "bacabal",
                "state": "bahia",
                "postcode": 83534,
                "coordinates": {
                    "latitude": "-78.5868",
                    "longitude": "82.2891"
                },
                "timezone": {
                    "offset": "+5:30",
                    "description": "Bombay, Calcutta, Madras, New Delhi"
                }
            },
            "email": "vanuza.jesus@example.com",
            "login": {
                "uuid": "e88bcd12-dc0f-4c1e-896e-a546c6d13256",
                "username": "whitemouse399",
                "password": "goldfing",
                "salt": "Yc8Xg3qM",
                "md5": "f18669a17ccbc5688e0309b2e89be74b",
                "sha1": "582f474a7dadf7c43d613c48b5ddeb835df26ad1",
                "sha256": "17f004a241a8b0d8c75137fe419aa57be9e4483dea5cb4ca43acb12e18598c72"
            },
            "dob": {
                "date": "1958-01-11T16:34:20Z",
                "age": 61
            },
            "registered": {
                "date": "2008-12-21T11:17:21Z",
                "age": 10
            },
            "phone": "(48) 0213-4399",
            "cell": "(99) 5558-5305",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/78.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/78.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/78.jpg"
            },
            "nat": "BR"
        }
    ],
    "info": {
        "seed": "d79f73090a290648",
        "results": 1,
        "page": 1,
        "version": "1.2"
    }
}
```
All of the data above can be requested and then displayed on a web page.  The addition of a simple option can allow you to get data on multiple people in a single call.

You'll use the **Star Wars** api in an assignment as well to list all the characters that make up Star Wars.  This api is describe here: [https://swapi.co/](https://swapi.co/). 

## Project Resources
- [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)  
- [$.get](https://api.jquery.com/jquery.get/)
- [JSON](https://developer.mozilla.org/en-US/docs/Glossary/JSON)  
- [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

## Tutorials
Fork this repository.

There are 3 directories with code that contains TODO's that you will update using instructions below.  For 4th directory, **4-data-driven-doc**, you will be required to used what you learned in the first three tutorials to create your own data driven page.  

1. **1-data-fetch-local** Use the JavaScript `fetch` command to retrieve local data  
There is a local file in the directory **1-data-fetch-local** named **data.json** that contains data about 3 people.  You'll use the `fetch` command to read that data and display it as a list on the web page.  You'll find TODO's in the `js/main.js` file. 
  - TODO In order to declutter the code we'll write a function that accepts title, firstname, lastname and email, creates an `li` element and add the data to the element.  It returns the element.
```JavaScript
function createPersonEl(title,firstname,lastname,email) {
  let nameEl = document.createElement('li')
  nameEl.innerHTML = `${title} ${firstname} ${lastname}, ${email}`
  return nameEl
}
```
  - TODO When working with the fetch command, the response is an object for which you must call the the `.json()` method to extract JSON data from the body of the reponse. Through function chaining this is handed off to another `then` function to be processed.
```JavaScript
    return response.json();
```
  - TODO Process the json and by call the create element function and appending list items to the list that is defined in the **index.html**. 
  ```JavaScript

  for (let person of myJson.persons) {
      personList.appendChild(createPersonEl(person.title, person.firstname, person.lastname, person.email))
    }
  ```
**Final Display**
<div>
<img src="./images/fetch-local.png" style="display:inline-block;border:1px solid black" width="300" />
</div>


2. **2-data-fetch-internet** Use the JavaScript `fetch` command to retrieve internet data 
This code is similar to fetching locally except the URI is and internet path.  Note that this returns 3 random people so your data may not match the image below. Also, the data does not contain any formatting, so there is no capitalization or punctuation.  
  - TODO add a uri that fetches 3 people from the randomuser.me api
  ```JavaScript
fetch('https://randomuser.me/api/?results=3')

  ```

**Final Display**
<div>
<img src="./images/fetch-internet.png" style="display:inline-block;border:1px solid black" width="300" />
</div>

3. **3-data-jquery-internet** Use jquery to get the data and process it  
This code will look similar to the code that uses fetch, but with jQuery syntax.  In addition there won't be the extra setp of extra JSON from the body of the repsonse. Note that a link to the jQuery version 3 CDN has been added to the index.html.

  - TODO use jQuery `get` commmand to request 3 results from the randomuser.me api
  ```JavaScript
$.get( "https://randomuser.me/api/", { results: 3 } )
  ```
**Final Display**
<div>
<img src="./images/jquery-internet.png" style="display:inline-block;border:1px solid black" width="300" />
</div>  

4. **4-data-driven-doc** Create a data driven document 
In this exercise, you'll create a list of 10 characters from Star Wars using a call for data to the Starwars API. If you don't specify a "page" for the Star Wars people request, you'll automatically get back the first 10.  The response showing just 1 of the 10 is shown below:
<div>
<img src="./images/star-wars-json.png" style="display:inline-block;border:1px solid black" width="300" />
</div>  

  - add index.html, css and js directories and files to the 4-data-driven-doc directory
  - **hint:** the 2-data-fetch-internet can serve as a good pattern for requesting data
  - the URI for starwars is: `https://swapi.co/api/people`
  - show at least the name of each character returned for 1 page
**Final Display**
<div>
<img src="./images/star-wars-people.png" style="display:inline-block;border:1px solid black" width="300" />
</div> 


## Stretch Goals
1. Add more data to the star wars output
2. Write a function to captialize the first letter, and put a period at the end, of each title from randomuser.me
3. If you used the fetch method in version 4, create a new example that uses jquery to get data from Star Wars API.

## Turn in assignment
# WATS 3020: Document Object Model 1
## Dynamic HTML and CSS: Using Vanilla JavaScript and jQuery

## The DOM: Document Object Model
DOM is an acronym for **Document Object Model**.  The DOM is a hierarchical model with the **window** object at the root, followed by the **document** object.  Within the **document** object are the renderable objects such as **paragraphs**, **sections**, and all the elements that can be coded with HTML tags.  Nesting these objects creates a deeper hierarchy.  

Because all of these elements are available to use as objects, we can programatically interact with them and we use JavaScript to do that.
<div>
<img src="./images/dom.png" style="display:inline-block;border:1px solid black;padding:10px" width="300" />
</div>


## Vanilla JavaScript vs jQuery
The term "Vanilla JavaScript" refers to JavaScript as it is defined by the [ECMAscript](https://en.wikipedia.org/wiki/ECMAScript) organization.  This organization defines the spec that browser developers use to implement JavaScript in their browser product.  Not all browsers have implemented all of the specs.  You can use a website like [Can I Use](https://caniuse.com/) to see if a particular JavaScript feature is implemented in a browser you support.

jQuery is a library that was created created to simplify working with the DOM.  We learn to work with it in this course because it is still is wide use.  For example Bootstrap 4 uses jQuery to implement it's components.

As you work on the exercises in this assignment, compare jQuery syntax with Vanilla JS.  jQuery provides and overloaded function that is aliased with `$`.  When you see `$` think of a function called jQuery that takes as its arguments a string containing a CSS selector.  The result of calling that function is to turn the elements selected into an array of element objects or a single object.  The jQuery call in the code below will return all list items with the class contact.  The items will be returned as an array even if there is only one.
```JavaScript
let listElement = $('li.contact')
```

When using Vanilla JS, you'll use `document.querySelector` and `document.querySelectorAll` to make a call to return elements as objects.  The `document.querySelector` will return just 1 object, and if there are multiple elements that match the selector, only the first will be returned. If no elements are found `document.querySelector` returns null. If you call `document.querySelectorAll`, you will get an array of objects even if the selector only finds 1, and will return an empty array if none are found. 

The fact that both jQuery and Vanilla JS rely on a function that selects elements in the DOM and returns objects with functions that can be call on them is what makes them the same. 

In order to use jQuery you must import the jQuery library into your HTML page while Vanilla JS is available on any browser.  

Note: You can mix Vanilla JS and jQuery in your code.  In general, I would choose to code in Vanilla JS, but you will find jQuery in use so its good to be able to recognize it and use it.

## HTML Must Render Before Creating Objects!
When we make a call like the following
```JavaScript 
let el = document.querySelector("#list")
```
`el` will be undefined even if a tag with `id="list"` exists in the HTML - if the browser has not rendered it to the page before the JavaScript its executed.  That's why you'll see the `<script>` tag coded after the other render-able tags.

Placing the script tag just above the `<body>` tag does not always provide enough time to guarantee all elements are rendered.  For that reason, we can rely up an event that is fired by the browser to let us know the the DOM is ready and all elements are rendered.
In Vanilla JS, we wrap all of our code in a function that is run when the DOM content is loaded.
```JavaScript
document.addEventListener("DOMContentLoaded", event => {
  //work with DOM here
})
```
In jQuery we wrap our code in a call to the `ready` function.
```JavaScript
$(document).ready(event => {
  //work with DOM here
})
```

## User experience of a Web Page

Web pages serve as interactive graphical user interfaces (GUIs).  Because GUI's are interactive, we process events that are generated by the user.  We'll see in a future assignment how the web page can respond to non-user events such as requested data being returned from the internet.  

The simplest event to consider is the user clicking on a button.  In this assignment, we'll use JavaScript to allow a user to build up a list by entering data into an input field and clicking on a button. The list will be updated on the page as the user enter data.   

### Events and Event Handlers
There are many events that can be detected and acted on in the browser.  The code that processes an event is often referred to as a "handler".  The handler is a JavaScript function which by default receives and event argument.  The code below shows setting up a `click` handler using Vanilla JavaScript.  Familiarize yourself with this pattern of detecting an event and calling a function to "do something" in response.
```JavaScript
document.addEventListener("click", function(event) => {
  console.log("event handled")
}
```
In the code above we added a "listener" to the document object by calling the `addEventListener` function that is defined for the document object.  The document object is a global object global object made available by the global variable `document`.  

You may also see the listener attached with an arrow function.  Remember that the arrow function changes the scope of what's in the function block.  If you refer to `this` using `function` in your handler, you're accessing the element on which the event occurred, like a button.  If you refer to `this` using an arrow function, and you refer to `this` it will be the `window` objects since that is block you're in.

You can see a demo of the effect on `this` by running the code in **demo-function-vs-arrow** and at the console looking the console.

#### Script tag
In order to use JavaScript in a web page the JavaScript must be added to the HTML file using the `<script>` tag.  It also possible to add JavaScript commands to and HTML file as event handler attributes in an HTML tag, but in this course, and as best practice, its good to separate JavaScript from HTML and the `<script>` tag helps developers to that.

You will generally find the **script** tag at the bottom of the HTML rendered content, just above the body tag.  If you are providing multiple script tags and there is any dependency among them, the order matters.  The dependent code must follow and code that it is dependent on.

The **script** tag can contain JavaScript commands as in the following code snippet:
```HTML
<script>
alert("hello")
</script>
```

It is a best practice to move JavaScript into an external file.  If I have a file in my project with the following path: **js/index.js**, then I can include it in my HTML file using the `src` attribute with the `script` tag.
```HTML
<script src="js/index.js"></script>
```


## Project Resources
[MDN Vanilla JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[jQuery](https://jquery.com/)
[MDN Script element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
[MDN JavaScript Events](https://developer.mozilla.org/en-US/docs/Web/Events)
[W3 Schools document](https://www.w3schools.com/js/js_htmldom_document.asp)



## Tutorials
Fork this repository.
Replace TODO's with code that will create a TODO list.  
    

### Features of the TODO list
* User enters an activity and presses the button or enter key to add to list
* User clicks the check box to cross out an item when its complete
* Checkbox acts as a toggle so that if it is already checked, clicking it will un-check it

The Final Display is the same for both the #1 & #2 TODO lists, even though #1 is created with Vanilla JS only and #2 uses jQuery.
**Final Display**
<div>
<img src="./images/todo-list.png" style="display:inline-block;border:1px solid black" width="300" />
</div>


1. **1-todo-vanilla** 
  - TODO add "DOMContentLoaded" event to listen for to signal that DOM is ready to access
  - TODO add event listener to signal that user is submitting form.  You must "wrap" all existing code in this event
  ```JavaScript
  document.addEventListener("submit", event => {
    //all code here
  })
  ```
  - call a function to prevent the click from "bubbling up"
  ```JavaScript
    event.preventDefault()
```
- TODO add a selector that selects the input element with the attribute name equal to "item-input" `"input[name=item-input]"`
- TODO create a list item with a checkbox and a label containing the user input string
```JavaScript
  let newItemEl = document.createElement('li');
  let newCheckBox = document.createElement('input')
  newCheckBox.setAttribute("type", "checkbox")
  newItemEl.appendChild(newCheckBox)
  let newLabel = document.createElement('label')
  newLabel.innerHTML = itemValue
  newItemEl.appendChild(newLabel)
```
- TODO add click event toggle that strikes out text in label associated with list item
```JavaScript
 newCheckBox.addEventListener("click", function (event) {
  if (this.nextSibling.style.textDecoration === "line-through") {
    this.nextSibling.style.textDecoration = ""
  } else {
    this.nextSibling.style.textDecoration = "line-through"
  }
})
```
- TODO set up a checkbox toggle to strike out text when clicked.  Note the difference in how we detect that the checkbox has changed and then whether it was checked or not.
```JavaScript
$(':checkbox').change(function (event) {
    event.preventDefault()
    if ($(this).is(':checked')) {
      $(this).siblings("label").css("text-decoration", "line-through")
    } else {
      $(this).siblings("label").css("text-decoration", "none")
    }
})
```

2. **2-todo-jquery** 

  - TODO add document ready `$(document).ready`
  - TODO add event listener to signal that user is submitting form.  You must "wrap" all code related to user clicking submit in this event
  ```JavaScript
  $("#todo-form").submit(event => {
    //all code here
  })
  ```
  - call a function to prevent the click from "bubbling up"
  ```JavaScript
    event.preventDefault()
  ```
  - TODO obtain the user input object and string value   
  ```JavaScript
    let itemInput = $($("input[name=item-input]")[0])
    let itemValue = itemInput.val()
  ```
  - TODO create a new list item value with checkbox and label
  ```JavaScript
    let newItemEl = $("<li>")[0]
    let newCheckBox = $('<input type="checkbox" />')[0]
    let newLabel = $(`<label>`).html(itemValue)[0]
    newItemEl.append(newCheckBox, newLabel)
  ``` 
3. **3-list** 
  TODO: For this exercise you must set up HTML/CSS/JavaScript files and write code to create a list.  Once you've completed the lists above, you an use that code to help you do this.  

  You can use jQuery or Vanilla JS.  Make some visible modification to the list such as labels or effects applied when a label or check box is clicked.  For example you can highlight the text by adding a background color.

  You could also include a button associated with each list item to remove it from the list.


## Turn in assignment
Push your code to the forked repository in your account.  

Turn in 2 URL's on Canvas which should be of the format:
* https://github.com/{account name}/{repo name}
* https://{account name}.github.io/{repo name}






## Attributes

[Random User API](https://randomuser.me/)  
[Star Wars API](https://swapi.co/)
