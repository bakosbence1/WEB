var idozito
var sor, oszlop

function indexhely(i,j,o){
    return i*o+j
}

function randomsz(min,max){
    return Math.floor(Math.random()*(max-min+1))+min
}

function feltolt(sor,oszlop){
    const t = []
    for (let i = 0; i < sor*oszlop-1; i++) {
        t.push(0)
    }
    t.push("X")
    return t
}

function kever(t){
    for (let i = 0; i < t.length; i++) {
        const r1 = randomsz(0,t.length-1)
        const r2 = randomsz(0,t.length-1)
        let s = t[r1]
        t[r1] = t[r2]
        t[r2] = s
    }
    return t
}

function felbukkan(i,j,o,td,t,d){
    clearInterval(idozito)
    t[indexhely(i,j,o)] = 0
    let ujindex 
    do {
        ujindex = randomsz(0,t.length - 1)
    } while (ujindex === "X");
    t[ujindex] = "X"
    megjelenit(t,sor,oszlop,d)
    idomero(t,sor,oszlop,d)
}

function idomero(t,s,o,d){
    idozito = setInterval(function() {
        let xindex = t.indexOf("X")
        if (xindex != -1) {
            t[xindex] = 0
        }
        let ujindex 
        do {
            ujindex = randomsz(0,t.length - 1)
        } while (ujindex === "X");
        t[ujindex] = "X"
        megjelenit(t,s,o,d)
    },10000)
}

function megjelenit(t,s,o,d){
    d.innerHTML=""
    for (let i = 0; i < s; i++) {
        const tr = document.createElement("tr")
        for (let j = 0; j < o; j++) {
            const td = document.createElement("td")
            td.innerText=t[indexhely(i,j,o)]
            if (td.innerText=="X") {
                td.addEventListener("click",function(){
                    felbukkan(i,j,o,this,t,d)
                })
            }
            tr.appendChild(td)
        }
        d.appendChild(tr)
    }
}


function csinal(){
    sor = parseInt(document.querySelector("#sor").value)
    oszlop = parseInt(document.querySelector("#oszlop").value)
    const doboz = document.querySelector("table")

    const tabla = kever(feltolt(sor,oszlop))

    megjelenit(tabla,sor,oszlop,doboz)
    idomero(tabla,sor,oszlop,doboz)
}