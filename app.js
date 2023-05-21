const dys =document.getElementById('dys');
const hrs =document.getElementById('hrs');
const mins =document.getElementById('mins');
const  secs =document.getElementById('secs');


const futureDate  = new Date("2023-06-28T00:00:00")


setInterval(()=>{
    const date = new Date();

const differneceTime = futureDate.getTime() - date.getTime();
console.log(futureDate.getTime())
console.log( date.getTime())
console.log(differneceTime)

dys.innerHTML = Math.floor(differneceTime/1000/60/60/24)
hrs.innerHTML = Math.floor(differneceTime/1000/60/60) - (Math.floor(differneceTime/1000/60/60/24)*24)
mins.innerHTML = Math.floor(differneceTime/1000/60) - (Math.floor(differneceTime/1000/60/60)*60)
secs.innerHTML = Math.floor(differneceTime/1000) - (Math.floor(differneceTime/1000/60)*60)


},1000)


