// get the chash out button

document.getElementById('btn-cashout').addEventListener('click', function(){
  const cashoutnumber = getValueFromInput('cashout-number');
  if (cashoutnumber.length != 11){
  alert('invalid agent number');
  return;
}
  // get the amount, ballance, set new ballance  and validate
  const cashoutAmount = getValueFromInput('cashout-amount')
  const ballanceAmount = getBallance()
  const cashoutCharge = cashoutAmount / 100 * 1.49;
  const date = new Date;
  const cashoutTime = date.toLocaleString()
  const newBallance = ballanceAmount -(Number(cashoutAmount) + cashoutCharge);

  if( cashoutAmount > ballanceAmount){
  alert('Insufficient balance');
  return;
}
  const pinNumber = getValueFromInput('cashout-pin');
  if(pinNumber === '1234'){
 const transectionHistoryContainer = document.getElementById('transection-history-container');
   const historyElmnt = document.createElement('div');
   historyElmnt.innerHTML = `<div class="collapse bg-base-100 border-base-300 border rounded-sm">
          <input type="checkbox" />
          <div class="collapse-title font-semibold">Cashout Successful!</div>
          <div class="collapse-content text-sm">
            Cashout Successful!
Amount: BDT ${cashoutAmount},
Fee: BDT ${cashoutCharge},
Txn ID: TX78451236
Available Balance: BDT ${newBallance},
Date: ${cashoutTime},
Thank you for using Payoo service.
          </div>
        </div>`;
  transectionHistoryContainer.appendChild(historyElmnt);



  alert(`Cash Out Successful!
Amount: BDT ${cashoutAmount}
Fee: BDT ${cashoutCharge}
Txn ID: TX78451236
Available Balance: BDT ${newBallance}
Date: ${cashoutTime}
Thank you for using Payoo service.`)

setBallance(newBallance);
}else{
  alert('pin is invalid')
}
})