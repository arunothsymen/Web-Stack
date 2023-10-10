const firebaseConfig = {
  apiKey: "AIzaSyCuktFXPkCRoqme1EwhEx5PsB_jlidR2do",
  authDomain: "booking-form-1b291.firebaseapp.com",
  databaseURL: "https://booking-form-1b291-default-rtdb.firebaseio.com/",
  projectId: "booking-form-1b291",
  storageBucket: "booking-form-1b291.appspot.com",
  messagingSenderId: "1066675621087",
  appId: "1:1066675621087:web:e7f1a5c37c9ce04c9aed6a"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var bookingFormDB = firebase.database().ref("bookingForm");

document.getElementById("bookingForm").addEventListener("submit", submitForm);

function submitForm(e) {
e.preventDefault();

var date = getElementVal("date");
var days = getElementVal("number");
var members = getElementVal("number1");

saveMessages(date, days, members);
}

const saveMessages = (date, days, members) => {
var newbookingForm = bookingFormDB.push();

newbookingForm.set({
  date: date,
  number: days,
  number1: members
});
};

const getElementVal = (id) => {
return document.getElementById(id).value;
};