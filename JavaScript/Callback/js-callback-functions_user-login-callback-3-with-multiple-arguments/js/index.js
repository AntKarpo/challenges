console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe", "admin");
}

function showWelcomeMessage(userName, userRole) {
console.log(`Welcome ${userName}! You are logged in now as ${userRole}.`);
// The exercise starts here!
};
handleUserLogin(showWelcomeMessage);

handleUserLogin(function(userName, userRole) {
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}`);
});
