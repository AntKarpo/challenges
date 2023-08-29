console.clear();

function showWelcomeMessage(){
  console.log("Welcome! You are logged in now.");
};

function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess();
}

handleUserLogin(showWelcomeMessage);
// Call handleUserLogin below!

handleUserLogin(() => {
 showWelcomeMessage();
}); 
