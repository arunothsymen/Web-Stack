const firebaseConfig = {
    apiKey: "AIzaSyCuzf6X2aN0QqLWMDmN4SUVU3yrik37NmI",
    authDomain: "resort-booking-2dd86.firebaseapp.com",
    databaseURL: "https://resort-booking-2dd86-default-rtdb.firebaseio.com",
    projectId: "resort-booking-2dd86",
    storageBucket: "resort-booking-2dd86.appspot.com",
    messagingSenderId: "395897169212",
    appId: "1:395897169212:web:ce2f57567b09698b9d2a39"
  };

  // initialize firebase
  firebase.initializeApp(firebaseConfig);

  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");

  document.getElementById("contactForm").addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();

    var emailid = getElementVal("emailid");

    saveMessages(emailid);
  }

  const saveMessages = (emailid) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
      emailid: emailid,
    });
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };