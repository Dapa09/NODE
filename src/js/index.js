// IMPORTACIONES   Controlador
import {Sum, Menos, Entre, Por} from "./models/index.js";

import * as sumView from "./views/index.js";      

document.querySelector("#sumar").addEventListener(("click"), () => {
    event.preventDefault()                                       
    sumView.clearArea()
    console.log("entro");
    const numA = sumView.parseInputs(sumView.getInputNumA)       
    const numB = sumView.parseInputs(sumView.getInputNumB)
    const resultado = Sum(numA, numB)                         
    return sumView.renderSumView(resultado)                       
});


document.querySelector("#restar").addEventListener(("click"), () => {
    event.preventDefault()                                       
    sumView.clearArea()
    const numA = sumView.parseInputs(sumView.getInputNumA)        
    const numB = sumView.parseInputs(sumView.getInputNumB)
    const resultado = Menos(numA, numB)                         
    return sumView.renderSumView(resultado)                        
});

document.querySelector("#dividir").addEventListener(("click"), () => {
    event.preventDefault()                                        
    sumView.clearArea()
    const numA = sumView.parseInputs(sumView.getInputNumA)       
    const numB = sumView.parseInputs(sumView.getInputNumB)
    const resultado = Entre(numA, numB)                         
    return sumView.renderSumView(resultado)                       
});

document.querySelector("#multiplicar").addEventListener(("click"), () => {
    event.preventDefault()                                       
    sumView.clearArea()
    const numA = sumView.parseInputs(sumView.getInputNumA)      
    const numB = sumView.parseInputs(sumView.getInputNumB)
    const resultado = Por(numA, numB)                         
    return sumView.renderSumView(resultado)                        
});