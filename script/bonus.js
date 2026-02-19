const bonusBtn = document.getElementById('btn-coupon');
bonusBtn.addEventListener('click', function(){
  console.log('button clicked')
  const bonusInput = getValueFromInput('bonus-coupon');
  if(bonusInput === 'MyBonus'){
    const bonus = 500;
    const newBallance = getBallance() + bonus;
    setBallance(newBallance);

    const date = new Date;
    const AddMoneyTime = date.toLocaleString();

    const transectionHistoryContainer = document.getElementById('transection-history-container');
   const historyElmnt = document.createElement('div');
   historyElmnt.innerHTML = `<div class="collapse bg-base-100 border-base-300 border rounded-sm">
          <input type="checkbox" />
          <div class="collapse-title font-semibold">Add Bonus Successful!</div>
          <div class="collapse-content text-sm">
           Add Bonus Successful! You get BDT ${bonus}, 
      Available Balance: BDT ${newBallance},
      Date: ${AddMoneyTime},
      Ref: TXN78451236;
          </div>
        </div>`;
  transectionHistoryContainer.appendChild(historyElmnt);


    alert(`
      Add Bonus Successful! You get BDT ${bonus}, 
      Available Balance: BDT ${newBallance},
      Date: ${AddMoneyTime},
      Ref: TXN78451236;`);
  } else{

  }
})