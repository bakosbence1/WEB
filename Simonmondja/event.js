var t = []
var si
var kattinthat=false
var i

function randomsz(a,f){
    return Math.floor(Math.random()*(f-a+1))+a
}

function vizsgal(mit){
    if (kattinthat) {
        document.querySelector("#a"+mit).style.backgroundColor="green"
        setTimeout(()=>{
            document.querySelector("#a"+mit).style.backgroundColor=""
            if (mit == t[i]) {
                i++
                if (i == t.length) {
                    kovetkezoSzint()
                }
            }
            else{
                alert("U r shit")
                csinal()
            }
        },500)
    }
}

function kovetkezo(){
    if (i>=t.length) {
        clearInterval(si)
        kattinthat=true
        i = 0
    }
    else{
        document.querySelector("#a"+t[i]).style.backgroundColor="yellow"
        setTimeout(()=>{
            document.querySelector("#a"+t[i]).style.backgroundColor=""
            i++
        },500)
    }
}

function kovetkezoSzint(){
    kattinthat=false
    t.push(randomsz(1,4))
    i=0
    si = setInterval(kovetkezo,1000)
}

function csinal(){
    t = []
    kovetkezoSzint()
}