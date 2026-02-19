document.getElementById('btn-pay-bill').addEventListener('click', function(){
 const bankInput = getValueFromInput('pay-bill-bank')
 if (bankInput === 'Select a bank'){
  alert('please select a bank');
  return;
 }
 const bankAcc = getValueFromInput('biller-acc-number');
 
 if(bankAcc.length !== 16){
  alert('Bank Account Number is invalid');
  return;
 }

 const payBillPin = getValueFromInput('pay-bill-pin');
 if(payBillPin === '1234'){
  const payBillAmount = getValueFromInput('Pay-bill-amount');
  const newBallance = getBallance() + Number(payBillAmount) ;
  setBallance(newBallance);

   const date = new Date;
   const payBillTime = date.toLocaleString()
   const transectionHistoryContainer = document.getElementById('transection-history-container');
   const historyElmnt = document.createElement('div');
   historyElmnt.innerHTML = `<div class="collapse bg-base-100 border-base-300 border rounded-sm">
          <input type="checkbox" />
          <div class="collapse-title font-semibold">Pay Bill Successful!</div>
          <div class="collapse-content text-sm">
           Pay Bill Successful!
Amount: BDT ${payBillAmount},
From : ${bankAcc},
Fee: BDT 5,
Txn ID: TX78451236
Available Balance: BDT ${newBallance},
Date: ${payBillTime},
Thank you for using Payoo service.
          </div>
        </div>`;
  transectionHistoryContainer.appendChild(historyElmnt);

 alert(`Pay Bill Successful!
Amount: BDT ${payBillAmount}
From : ${bankAcc}
Fee: BDT 5
Txn ID: TX78451236
Available Balance: BDT ${newBallance}
Date: ${payBillTime}
Thank you for using Payoo service.`)
 }else{
  alert('pin is invalid');
  return;
 }
})
