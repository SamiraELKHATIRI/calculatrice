let element =document.getElementsByClassName("calc_btn")
document.getElementsByClassName("calc_resultat")[0].value = "0"
let arr = []
let val=""
for (let i = 0 ; i<element.length ; i++){
    element[i].addEventListener("click" , myFct)
}
function myFct(e){
    console.log(e.target.value)
val = e.target.value
if(document.getElementsByClassName("calc_resultat")[0].value !== ""){
   arr.push(val)
}
console.log(arr)
console.log(arr.join(""))
document.getElementsByClassName("calc_resultat")[0].value=arr.join("")
}
document.getElementsByClassName("RESET")[0].addEventListener("click",fctRESET)
 function fctRESET(){
    arr=[]
    document.getElementsByClassName("calc_resultat")[0].value = "0"

 }

 document.getElementsByClassName("DELETE")[0].addEventListener("click",fctDELETE)
 function fctDELETE(){
   arr.splice(arr.length-1 , 1)
   document.getElementsByClassName("calc_resultat")[0].value=arr.join("")
   if(arr==[] || document.getElementsByClassName("calc_resultat")[0].value=="" ){
    document.getElementsByClassName("calc_resultat")[0].value=0
   }
   console.log(arr)
 }
 document.getElementsByClassName("EGAL")[0].addEventListener("click",fctEGALE)
 function fctEGALE(){
    const arrSymbol = ["+","*","/",".","-"]
    arrSymbol.map(item=> {
        if(arr[arr.length-1] == item){
            document.getElementsByClassName("calc_resultat")[0].value = "undefined " 
            arr=[]
        }
    })
    const resultat = eval(arr.join(""))
    document.getElementsByClassName("calc_resultat")[0].value= resultat
    arr=[]
  arr.push(resultat)
 }