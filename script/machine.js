
// get value from input field
function getValueFromInput(id){
  const input = document.getElementById(id);
  const value = input.value;
  console.log(id, value);
  return value;
};

// get ballance 
function getBallance(){
  const balanceElmnt = document.getElementById('ballance');
  const ballance = balanceElmnt.innerText;
  return Number(ballance);
}

// set ballance
function setBallance(value){
  document.getElementById('ballance').innerText = value;
}

// show and hide
function showOnly(id){
  // hide all
  const addMoney = document.getElementById('add-money');
  addMoney.classList.add('hidden')
  const cashOut = document.getElementById('cash-out');
  cashOut.classList.add('hidden')
  const transfer = document.getElementById('transfer-Money');
  transfer.classList.add('hidden');
  const history = document.getElementById('transection-history');
  history.classList.add('hidden');
  const bonus = document.getElementById('get-bonus');
  bonus.classList.add('hidden');
  const payBill = document.getElementById('pay-bill');
  payBill.classList.add('hidden')
  


  // only clicked option will show
  const showOnly = document.getElementById(id)
  showOnly.classList.remove('hidden')

}