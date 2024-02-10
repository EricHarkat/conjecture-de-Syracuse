
const h3 = document.querySelector("h3")
const btn1 = document.querySelector("#btn1")

let answer = ""
let tab=[]

function conjectureDeSyracuse(nb){
    tab.push(nb)
    console.log("tab " +tab)
    while (nb!= 1){
        if(nb%2 == 0){
           nb =  nb/2
            tab.push(nb)
        }else{
           nb =  (nb * 3) + 1
            tab.push(nb)
        }
        console.log(nb)
    }
    for(let i = 0; i<tab.length; i++ ){
    h3.textContent += tab[i] +","}

}

btn1.addEventListener("click", () =>{
    answer = prompt("Entrez valeur")
    conjectureDeSyracuse(answer)
})





