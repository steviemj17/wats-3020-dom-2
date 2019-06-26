function createPersonEl(title,firstname,lastname,email) {
  let nameEl = $("<li>")[0]
  nameEl.append(`${title} ${firstname} ${lastname} ${email}`)
  return nameEl
}
$.get( "https://randomuser.me/api/", { results: 3 } )
  .done(function (response) {
    let personList = $(".person-api-list")[0]
    for (let person of response.results) {
      personList.append(createPersonEl(person.name.title, person.name.first, person.name.last, person.email))
    }
  })
  