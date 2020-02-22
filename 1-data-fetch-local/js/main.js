
function createPersonEl(title, firstname, lastname, email) {
  let nameEl = document.createElement('li')
  nameEl.innerHTML = `${title} ${firstname} ${lastname}, ${email}`
  return nameEl
}
fetch('data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    let personList = document.querySelector('.person-list')
    for (let person of myJson.persons) {
      personList.appendChild(createPersonEl(person.title, person.firstname, person.lastname, person.email))
    }
  });

