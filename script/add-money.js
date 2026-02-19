document.getElementById('btn-add-money').addEventListener('click', function(){
 const bankInput = getValueFromInput('add-money-bank')
 if (bankInput === 'Select a bank'){
  alert('please select a bank');
  return;
 }
 const bankAcc = getValueFromInput('Add-money-number');
 
 if(bankAcc.length !== 16){
  alert('Bank Account Number is invalid');
  return;
 }

 const addMoneyPin = getValueFromInput('add-money-pin');
 if(addMoneyPin === '1234'){
  const addMoneyAmount = getValueFromInput('add-money-amount');
  const newBallance = getBallance() + Number(addMoneyAmount) ;
  setBallance(newBallance);

   const date = new Date;
   const AddMoneyTime = date.toLocaleString()
   const transectionHistoryContainer = document.getElementById('transection-history-container');
   const historyElmnt = document.createElement('div');
   historyElmnt.innerHTML = `<div class="collapse bg-base-100 border-base-300 border rounded-sm">
          <input type="checkbox" />
          <div class="collapse-title font-semibold">Add Money Successful!</div>
          <div class="collapse-content text-sm">
            Add Money Successful!
Amount: BDT ${addMoneyAmount},
From : ${bankAcc},
Fee: BDT 5,
Txn ID: TX78451236
Available Balance: BDT ${newBallance},
Date: ${AddMoneyTime},
Thank you for using Payoo service.
          </div>
        </div>`;
  transectionHistoryContainer.appendChild(historyElmnt);

 alert(`Add Money Successful!
Amount: BDT ${addMoneyAmount}
From : ${bankAcc}
Fee: BDT 5
Txn ID: TX78451236
Available Balance: BDT ${newBallance}
Date: ${AddMoneyTime}
Thank you for using Payoo service.`)
 }else{
  alert('pin is invalid');
  return;
 }
})
