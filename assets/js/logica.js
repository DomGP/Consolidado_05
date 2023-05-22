/* let response = fetch("https://swapi.dev/api/people/1/")
response.then(resp => resp.json())
    .then(json => {
        console.log(json)
    })
    .catch(error => {
        console.log(error)
    }) */

//PERSONAJES DEL 1-5
let myRequest = request();
document.getElementById("mouseOver1").addEventListener('mouseover',  async function () {
    /* let requests = []
    for (let i = 1; i < 6; i++) {
        requests.push(getData(i))
    }

    Promise.all(requests)
        .then(results => {
            results.forEach(json => {
                injectHtml(json)
            })
        })
        .catch(error => {
            console.log(error)
        }) */

    let data = await myRequest.next();
    if(data.value){
        injectHtml(data.value)
    }
})

async function* request(){
    
    let url = "https://swapi.dev/api/people/"

    for(let i=1; i<6; i++){
        try{
            let resp = await fetch(url + i);
            let json = await resp.json();
            yield json;
        }
        catch (error){
            console.log(error)
        }
    }
}

/* function getData(id) {
    return fetch(`https://swapi.dev/api/people/${id}`)

    response.then(resp => resp.json())
        .then(json => {
            injectHtml(json)
        })
        .catch(error=>{
            console.log(error)
        })
} */


function injectHtml(json) {
    const { name, height, mass } = json
    let card = `<div id="personaje-rojo" class="content2 content2-style card animate__animated animate__bounce">
                    <div>
                        <div class="circulo-rojo"></div>
                    </div>
                    <div>
                        <h2 class="h2-style">${name}</h2>
                        <h3>Estatura: ${height} cm. - Peso: ${mass} kg.</h3>
                    </div>
                </div>`
    document.getElementById("personajesPrincipales").innerHTML += card 
}


//PERSONAJES DEL 6-10
let myRequest2 = request2();
document.getElementById("mouseOver2").addEventListener('mouseover',  async function () {
    let data = await myRequest2.next();
    if(data.value){
        injectHtml2(data.value)
    }
})

async function* request2(){
    
    let url = "https://swapi.dev/api/people/"

    for(let i=6; i<11; i++){
        try{
            let resp = await fetch(url + i);
            let json = await resp.json();
            yield json; //Retorno
        }
        catch (error){
            console.log(error)
        }
    }

}

function injectHtml2(json) {
    const { name, height, mass } = json
    let card = `<div class="content2 content2-style card animate__animated animate__bounce">
                    <div>
                        <div class="circulo-verde"></div>
                    </div>
                    <div>
                        <h2 class="h2-style">${name}</h2>
                        <h3>Estatura: ${height} cm. - Peso: ${mass} kg.</h3>
                    </div>
                </div>`
    document.getElementById("personajesPrincipales2").innerHTML += card
}

//PERSONAJES DEL 11-15
let myRequest3 = request3();
document.getElementById("mouseOver3").addEventListener('mouseover',  async function () {
    let data = await myRequest3.next();
    if(data.value){
        injectHtml3(data.value)
    }
})

async function* request3(){
    
    let url = "https://swapi.dev/api/people/"

    for(let i=11; i<16; i++){
        try{
            let resp = await fetch(url + i);
            let json = await resp.json();
            yield json;
        }
        catch (error){
            console.log(error)
        }
    }

}

function injectHtml3(json) {
    const { name, height, mass } = json
    let card = `<div class="content2 content2-style card animate__animated animate__bounce">
                    <div>
                        <div class="circulo-azul"></div>
                    </div>
                    <div>
                        <h2 class="h2-style">${name}</h2>
                        <h3>Estatura: ${height} cm. - Peso: ${mass} kg.</h3>
                    </div>
                </div>`
    document.getElementById("personajesPrincipales3").innerHTML += card
}