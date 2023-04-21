
let hoteletElement = document.getElementById("hotelet");
let checkouthotel = document.getElementById("hoteli");
let kuponButton = document.getElementById("kuponbtn");

let cmimiTotal = 0;

let kuponet = ["test", "amir"];
let kuponInput = document.getElementById("kuponInput");

function shfaqHotelet() {
    hotelet.forEach((hotel) => {
        cmimiTotal = hotel.cmimi;
        
        hoteletElement.innerHTML += `
                
        <div id="hoteldiv">
            <p1 id="hotelId">&nbsp ID: ${hotel.id} </p1>        
            <h1 id="hotelname"> ${hotel.emri} </h1>
            <img id="hotelFoto" src="${hotel.img}" alt="${hotel.emri}">
            <p id="hoteldistanca">Description: ${hotel.description} </p>
            
            <p id="lokacioni">&nbsp Lokacioni: ${hotel.lokacioni} </p>
            <p id="cmimi">Cmimi: ${cmimiTotal} den</p>

            <button id="rezervobtn" type="submit" onclick="checkout()"> Rezervo </button>

            
    </div>
        `;

    });

    kuponButton.addEventListener("click", kuponet());
    function kuponet(){
    kuponet.forEach((kupon)=>{
        if(kuponInput == kuponet){
            cmimiTotal -= 200;
        }
    });
}
}
shfaqHotelet();

let rezervimiDiv=document.getElementById("rezervimiDiv");
let random = Math.floor(Math.random() * 1043);


function rezervo(){
    hotelet.forEach((hotel)=>{
        rezervimiDiv.innerHTML =+ `
        <p id="orderID"> ${random} </p>
        <h1 id="hotelName"> ${hotel.emri} </h1>        
        <img src="${hotel.img}" alt="${hotel.emri}" />
        <p id="hotelDescr"> ${hotel.description} </p>
        <p id="hotelCmimi"> ${hotel.cmimi} </p>
        `;
    });
}
rezervo();





let territur = document.getElementById('territur');
let femije = document.getElementById('femije');
let emriHotelit = document.getElementById('hotelname');


document.getElementById('submitbtn').addEventListener('click', submitEv());



/* butoni checkout */
let rezervobtn = document.getElementById('rezervobtn');
rezervobtn.addEventListener('click', checkout());

let emri = document.getElementById("hotelname");
let hotelparagraf = document.getElementById('hotelparagraf');
let hoteldistanca = document.getElementById('hoteldistanca');
let cmimi = document.getElementById('cmimi');






let zgjidhqytetininput = document.getElementById('zgjidhqytetininput');
document.getElementById('submitbtn').addEventListener('click', zgjidhQytetin());

let checkoutButton = document.getElementById('checkoutbtn');
checkoutButton.addEventListener('click', checkout());

function checkout() {
    document.location.href = 'checkout.html';
}


let accounticon = document.getElementById('accounticon');
accounticon.addEventListener('click', clickAccount());

function clickAccount() {
    window.location.href = 'account.html';
}

let perfundoText = document.getElementById("perfundoText");
let perfundoBtn = document.getElementById("perfundoBtn");
perfundoBtn.addEventListener('click', perfundo());
function perfundo(){
    document.getElementById("perfundoText").innerHTML = "Rezervimi u krye me sukses. Ju faleminderit!";
    window.setTimeout('window.location="index.html"; ',3000);

}

let cart = JSON.parse(localStorage.getItem("CART")) || [];

function shtoNeCart(id){
    if (cart.some((item) => item.id === id)) {
        changeNumberOfUnits("plus", id);
      } else {
        const item = products.find((product) => product.id === id); 
    
        cart.push({
          ...item,
          numberOfUnits: 1,
        });
      }
      
    }
