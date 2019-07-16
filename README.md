# WATS 3020: Document Object Model 2
### **Walkthrough Video**
[DOM-2](https://www.youtube.com/watch?v=jKHv54n0WB0)
***

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
```JavaScript
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

**1-data-fetch-local** 
Use the JavaScript `fetch` command to retrieve local data  
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
    personList.appendChild(createPersonEl(person.title, person.firstname,       person.lastname, person.email))
  }
  ```
**Final Display**
<div>
<img src="./images/fetch-local.png" style="display:inline-block;border:1px solid black" width="300" />
</div>


**2-data-fetch-internet** 
Use the JavaScript `fetch` command to retrieve internet data 
This code is similar to fetching locally except the URI is and internet path.  Note that this returns 3 random people so your data may not match the image below. Also, the data does not contain any formatting, so there is no capitalization or punctuation.  
  - TODO add a uri that fetches 3 people from the randomuser.me api
  ```JavaScript
fetch('https://randomuser.me/api/?results=3')

  ```

**Final Display**
<div>
<img src="./images/fetch-internet.png" style="display:inline-block;border:1px solid black" width="300" />
</div>

**3-data-jquery-internet**   
Use jquery to get the data and process it.    
This code will look similar to the code that uses fetch, but with jQuery syntax.  In addition there won't be the extra step of extra JSON from the body of the response. Note that a link to the jQuery version 3 CDN has been added to the index.html.

  - TODO use jQuery `get` command to request 3 results from the randomuser.me api
  ```JavaScript
$.get( "https://randomuser.me/api/", { results: 3 } )
  ```
**Final Display**
<div>
<img src="./images/jquery-internet.png" style="display:inline-block;border:1px solid black" width="300" />
</div>  

**4-data-driven-doc** 
Create a data driven document.   
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
Push your code to the forked repository in your account.  

Turn in 2 URL's on Canvas which should be of the format:
* https://github.com/{account name}/{repo name}
* https://{account name}.github.io/{repo name}


## Attributes

[Random User API](https://randomuser.me/)  
[Star Wars API](https://swapi.co/)
