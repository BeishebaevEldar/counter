let count = 0
const s1 = new Audio('./ys.mpeg')
const onPlus = ()=>{
    count++
    if(count == 9){
        alert('Через один клик на "+" запустится мелодия')
    }
    if(count == 10){
        s1.play()
    }
    if(count > 10){
        s1.pause()
    }

    document.getElementById('result').innerHTML=count
}
const off=()=>{
    count--
    if(count >= 0){
          document.getElementById('result').innerHTML=count
    }
    if(count == 10){
        s1.play()
    }
} 
