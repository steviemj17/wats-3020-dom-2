function createPersonEl(title,firstname,lastname,email) {
  let nameEl = document.createElement('li')
  nameEl.innerHTML = `${title} ${firstname} ${lastname} ${email}`
  return nameEl 
}
//TODO add the URL to fetch data from the randomuser.me api
fetch('https://randomuser.me/api/?results=3')
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    let personList = document.querySelector('.person-api-list')
    for (let person of myJson.results) {
      personList.appendChild(createPersonEl(person.name.title, person.name.first, person.name.last, person.email))
    }
  });