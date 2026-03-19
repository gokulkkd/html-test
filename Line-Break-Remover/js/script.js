// Get elements
const inputText = document.getElementById("line-break");
const outputText = document.getElementById("line-copy");

const removeBtn = document.getElementById("remove-linebreak");
const resetBtn = document.getElementById("reset-linebreak");
const copyBtn = document.getElementById("copy-to-clip");

// Create copied message element
const copiedMsg = document.createElement("p");
copiedMsg.textContent = "Copied!";
copiedMsg.style.color = "green";
copiedMsg.style.display = "none";

// Append message below copy button
copyBtn.parentNode.appendChild(copiedMsg);

// 🔹 Remove line breaks
removeBtn.addEventListener("click", () => {
  let text = inputText.value;

  // Replace line breaks with space
  let cleanedText = text.replace(/(\r\n|\n|\r)/gm, " ");

  // Optional: remove extra spaces
  cleanedText = cleanedText.replace(/\s+/g, " ").trim();

  outputText.value = cleanedText;
});

// 🔹 Reset fields
resetBtn.addEventListener("click", () => {
  inputText.value = "";
  outputText.value = "";
  copiedMsg.style.display = "none";
});

// 🔹 Copy to clipboard
copyBtn.addEventListener("click", () => {
  let textToCopy = outputText.value;

  if (!textToCopy) return;

  navigator.clipboard.writeText(textToCopy).then(() => {
    copiedMsg.style.display = "block";

    // Hide after 2 seconds
    setTimeout(() => {
      copiedMsg.style.display = "none";
    }, 2000);
  });
});
