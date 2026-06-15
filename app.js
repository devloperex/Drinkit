let water=Number(localStorage.getItem('water'))||0;

function login(){
loginBox=document.getElementById('login');
loginBox.classList.add('hidden');
document.getElementById('app').classList.remove('hidden');
update();
}

function addWater(x){
water+=x;
localStorage.setItem('water',water);
update();
}

function update(){
percent.innerText=Math.round(water/20)+'%';
ml.innerText=water+' / 2000 ML';
}

function saveProfile(){
localStorage.setItem('name',name.value);
localStorage.setItem('gender',gender.value);
}

async function enableNotification(){
let p=await Notification.requestPermission();
if(p==="granted"){
new Notification("DrinkIt 💧",{body:"Hydration reminder activated"});
}
}