// Pseudo-code
const spinButton = document.getElementById('spinButton');

spinButton.addEventListener('click', async () => {
  try {
    // Set spinning text
    result.setSpinning();

    // Spin all three wheels concurrently and get their symbols
    const [symbol1, symbol2, symbol3] = await Promise.all([wheel1.spin(), wheel2.spin(), wheel3.spin()]);

    // Calculate the score based on symbols
    const score = calculateScore(symbol1, symbol2, symbol3);

    // Update the display with the score
    result.setResult(score);

    // Enable the spin button
    spinButton.disabled = false;
  } catch (error) {
    // Handle errors, inform the user, and subtract points
    result.setMachineChoked();
    // Optionally, enable the spin button here as well
  }
});

function calculateScore(symbol1, symbol2, symbol3) {
  // Implement scoring logic based on the symbols
  // Return the calculated score
}
