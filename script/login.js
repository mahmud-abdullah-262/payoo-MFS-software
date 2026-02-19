document.getElementById('btn-login').addEventListener('click', function(){
  // get the contact number
  const inputNumber = document.getElementById('input-number');
  const contactNumber = inputNumber.value;

  // get the pin number 
  const inputPin = document.getElementById('input-pin');
  const pinNumber = inputPin.value;
  
  if(contactNumber === '01234567890' && pinNumber === '1234'){
    alert('log in success');
    
    window.location.assign('/home.html')
  } else{
    alert('login failed');
    return;
  }


})