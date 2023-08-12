const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
.then( res =>  res.json())
.then(data => getData(data)) 



function getData (users) {

    const usersContainer = document.querySelector('.main')
    

  for(const user of users )  {
    
    const div = document.createElement('div');
    div.classList.add('item')
    div.innerHTML=`
    <h1>${user.id}</h1>
    <h2>${user.name}</h2>
    <p>${user.email}</p>
    <button onclick="details(${user.id})" >Show Details</button>
    `
    usersContainer.appendChild(div)
  }

}

function details(id){
    const url = `https://jsonplaceholder.typicode.com/users/${id}`
    fetch(url)
    .then( res =>  res.json())
    .then(data => getData(data)) 
    function getData (users, $id){
      const userDetails = document.querySelector (".user_details");

      for (const userdetails of users. $id){
      
        userDetails.innerHTML = `
        
        `
      }
    }


}



