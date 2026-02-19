document.getElementById('btn-transfer').addEventListener('click', function(){

  const userNumber = getValueFromInput('transfer-number');
  if(userNumber.length !== 11){
    alert('User Number is invalid');
    return;
  }

  const transferAmount = getValueFromInput('transfer-amount');
  const transferCharge = transferAmount / 100 * 1;
  const newBallance = getBallance() - (Number(transferAmount) + transferCharge);
  const time = new Date()
  const transferTime = time.toLocaleString()

  if (transferAmount > Number(newBallance)){
    alert('Insufficient Ballance');
    return;
  } 

  const pinInput = getValueFromInput('transfer-pin');
  if (pinInput === '1234'){
    const transectionHistoryContainer = document.getElementById('transection-history-container');
   const historyElmnt = document.createElement('div');
   historyElmnt.innerHTML = `<div class="collapse bg-base-100 border-base-300 border rounded-sm">
          <input type="checkbox" />
          <div class="collapse-title font-semibold">Transfer Money Successful!</div>
          <div class="collapse-content text-sm">
           BDT ${transferAmount} has been transferred to A/C ${userNumber} on ${transferTime}
Available Balance: BDT ${newBallance}
Ref: TXN78451236
          </div>
        </div>`;
  transectionHistoryContainer.appendChild(historyElmnt);

    alert(`BDT ${transferAmount} has been transferred to A/C ${userNumber} on ${transferTime}
Available Balance: BDT ${newBallance}
Ref: TXN78451236
      `)
      setBallance(newBallance);
  } else{
    alert('Pin Number is Invalid')
  }

});
