const firebaseConfig = {
    apiKey: "AIzaSyD47YgLHcb-6twzyyOdwTaAQPScLyncSnk",
    authDomain: "snaichuk-v.firebaseapp.com",
    databaseURL: "https://snaichuk-v.firebaseio.com",
    projectId: "snaichuk-v",
    storageBucket: "snaichuk-v.appspot.com",
    messagingSenderId: "836779729848",
    appId: "1:836779729848:web:2ef077de9805b86031e54d",
    measurementId: "G-D0EM1EV7X0"
};

firebase.initializeApp(firebaseConfig);

const messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  function submitForm(e){
    e.preventDefault();
  
    const name = getInputVal('name');
    const email = getInputVal('email');
    const phone = getInputVal('phone');
  
    saveMessage(name, email, phone);
    
    document.querySelector('.modal').style.display = 'none'
    document.querySelector('.modal-backdrop').style.display = 'none'
  }
  
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  function saveMessage(name, email, phone){
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      phone:phone
    });
  }