const advice = document.getElementById("advice_id")
const paragraph = document.getElementById("paragraph")
const BTN =  document.getElementById("btn")


BTN = addEventListener("click", function reload(){
    FuncAdvice()
})

async function FuncAdvice(){
    const respuesta = await fetch('https://api.adviceslip.com/advice')

    console.log(respuesta);

    const datos = await respuesta.json();
    
    advice.innerHTML = (`${datos.slip.id}`)
    paragraph.innerHTML = (`"${datos.slip.advice}"`)

}