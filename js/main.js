var masofa = document.querySelector(".masofa");
var piyoda = document.querySelector(".piyoda");
var samalyot = document.querySelector(".samalyot");
var velosipedchi = document.querySelector(".velosipedchi");
var mashina = document.querySelector(".mashina");
var button = document.querySelector(".button");





button.addEventListener('click', function (evt) {
    evt.preventDefault();
    const content = {
        s: masofa.value
    }
        // let a = (content.s/800).toFixed(1)
        // let c=(a-0).toFixed(0)
        // let x=(a*10%10);
        // let h=(x-0).toFixed(0)
        // console.log(x)
    function tekshirish(n) {
        if (typeof content.s !== 'number' && isNaN(content.s - 0))
            return false;
        return true;

    }

    function hisob(b) {
        if(tekshirish(content.s))
        {
        let a = (content.s/b).toFixed(1)
        let c=(a-0).toFixed(0)
        let x=(a*10%10)*6;
        let h=(x-0).toFixed(0)
        return c+" soat "+h+" min";
        }
        else{
        alert("son kirit")
        throw new Error("son kirit");
        
}

    }

    var p = hisob(3.6)
    piyoda.textContent = p + " ";
    
    
    var o = hisob(70)
    mashina.textContent = o + " ";

    var l = hisob(20.1)
    velosipedchi.textContent = l + " ";

    var j = hisob(800)
    samalyot.textContent = j + " ";


})
