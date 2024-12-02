
function getCharacters(done) {

    const results = fetch("https://rickandmortyapi.com/api/character");

    results
        .then(response => response.json())
        .then(data => {
            done(data)
            
            
        });


}

getCharacters(data => {
    data.results.forEach(personaje => {

        const article = document.createRange().createContextualFragment(/*html*/ `


 <div class="card" style="width: 18rem;">
  <img src="${personaje.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${personaje.name}</h5>
    <h6 class="card-title"><b>Estatus: </b>${personaje.status}</h6>
    <h6 class="card-title"><b>Especie: </b>${personaje.species}</h6>
      <h6 class="card-title"><b>Género: </b>${personaje.gender}</h6>
    
  
  </div>
</div>
        `);

        const main = document.querySelector("main");
        main.append(article);
          
    });
})


