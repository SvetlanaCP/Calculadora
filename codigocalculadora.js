
let num1=0
let num2=0
let suma=0
let resta=0
let multiplicacion=0
let division=0

function aritmetico(operador){
    var expre
    num1=Number(document.getElementById("Resultado").value)
    console.log(num1)
    if(num1==""){
        if(operador==2){
            expre=document.getElementById("Resultado").value+"-"
        }
    }else{
        switch(operador){
            case 1:
                expre=document.getElementById("Resultado").value+" + "
                suma=suma+1
                break;
            case 2:
                expre=document.getElementById("Resultado").value+" - "
                resta=resta+1
                break;
            case 3:
                expre=document.getElementById("Resultado").value+" * "
                multiplicacion=multiplicacion+1
                break;
            case 4:
                expre=document.getElementById("Resultado").value+" / "
                division=division+1
                break;
        }
        num1=document.getElementById("Resultado").value
        

    }
    console.log(expre)
        document.getElementById("Resultado").value=expre
    
}


function numero(num){
    var expre=document.getElementById("Resultado").value+num
    console.log(expre)
    document.getElementById("Resultado").value=expre
}

function coma(){
    var expre=document.getElementById("Resultado").value+"."
    document.getElementById("Resultado").value=expre
}

function borrar(){
    document.getElementById("Resultado").value=""
    num1=0
    num2=0
    suma=0
    resta=0
    multiplicacion=0
    division=0
}

function igual(){
    var expre=(document.getElementById("Resultado").value).split(' ')
    console.log(expre[0])
    console.log(expre[1])
    console.log(expre[2])
    num2=Number(expre[2])

    if(suma>0){
        document.getElementById("Resultado").value=Number(num1)+Number(num2)
    }else if(resta>0){
        document.getElementById("Resultado").value=Number(num1)-Number(num2)
    }else if(multiplicacion>0){
        document.getElementById("Resultado").value=Number(num1)*Number(num2)
    }else if(division>0){
        document.getElementById("Resultado").value=Number(num1)/Number(num2)
    }else{
        switch(expre[1]){
            case '+':
                document.getElementById("Resultado").value=Number(expre[0])+Number(expre[2])
                break;
            case '-':
                document.getElementById("Resultado").value=Number(expre[0])-Number(expre[2])
                break;
            case '*':
                document.getElementById("Resultado").value=Number(expre[0])-Number(expre[2])
                break;
            case '/':
                document.getElementById("Resultado").value=Number(expre[0])+Number(expre[2])
                break;
        }
    }
    
    suma=0
    resta=0
    multiplicacion=0
    division=0
}
