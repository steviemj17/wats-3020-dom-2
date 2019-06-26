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

## Project Resources
- [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)  
- [$.get](https://api.jquery.com/jquery.get/)
- [JSON](https://developer.mozilla.org/en-US/docs/Glossary/JSON)  
- [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

## Basic Requirements
There are 3 directories with code that contains TODO's that you will update using instructions below.  For 4th directory, **4-data-driven-doc**, you will be required to used what you learned in the first three tutorials to create your own data driven page.  

1. Use the JavaScript `fetch` command to retrieve local data  
There is a local file in the directory **1-data-fetch-local** named **data.json** that contains data about 3 people.  You'll use the `fetch` command to read that data and display it as a list on the web page.  You'll find TODO's in the `js/main.js` file. 
- xxx
- xxx

Final Display - note that data may not match what you see because this api returns random names
<img src="./images/fetch-local.png" style="display:inline-block;border:1px solid black" width="300" />


2. Use the JavaScript `fetch` command to retrieve internet data

3. Use the jQuery Ajax `$get()` command to retrieve internet data

4. Create a data driven document

## Stretch Goals

## Attributes

