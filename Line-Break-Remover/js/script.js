// ========================================
// LINE BREAK REMOVER
// ========================================

const inputText = document.getElementById("line-break");
const outputText = document.getElementById("line-copy");

const removeBtn = document.getElementById("remove-linebreak");
const resetBtn = document.getElementById("reset-linebreak");
const copyBtn = document.getElementById("copy-to-clip");

// Check if Line Break page
if (inputText && outputText && removeBtn && resetBtn && copyBtn) {
  // Create copied message
  const copiedMsg = document.createElement("p");

  copiedMsg.textContent = "Copied!";
  copiedMsg.style.display = "none";

  copyBtn.parentNode.appendChild(copiedMsg);

  // Remove line breaks
  removeBtn.addEventListener("click", () => {
    let text = inputText.value;

    let cleanedText = text
      .replace(/(\r\n|\n|\r)/gm, " ")
      .replace(/\s+/g, " ")
      .trim();

    outputText.value = cleanedText;
  });

  // Reset
  resetBtn.addEventListener("click", () => {
    inputText.value = "";
    outputText.value = "";

    copiedMsg.style.display = "none";
  });

  // Copy
  copyBtn.addEventListener("click", async () => {
    const textToCopy = outputText.value;

    if (!textToCopy) {
      return;
    }

    try {
      await navigator.clipboard.writeText(textToCopy);

      copiedMsg.style.display = "block";

      setTimeout(() => {
        copiedMsg.style.display = "none";
      }, 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  });
}

// ========================================
// NOTEPAD
// ========================================

const notepadText = document.getElementById("notepad-text");

const copyNotepadBtn = document.getElementById("copy-notepad");
const resetNotepadBtn = document.getElementById("reset-notepad");
const saveNotepadBtn = document.getElementById("save-notepad");

const notepadMessage = document.getElementById("notepad-message");

// Check if Notepad page
if (
  notepadText &&
  copyNotepadBtn &&
  resetNotepadBtn &&
  saveNotepadBtn &&
  notepadMessage
) {
  // ========================================
  // STORAGE
  // ========================================

  const NOTEPAD_STORAGE_KEY = "my-notepad-content";

  // ========================================
  // LOAD PREVIOUS NOTE
  // ========================================

  const savedNote = localStorage.getItem(NOTEPAD_STORAGE_KEY);

  if (savedNote !== null) {
    notepadText.value = savedNote;
  }

  // ========================================
  // AUTO SAVE
  // ========================================

  notepadText.addEventListener("input", () => {
    localStorage.setItem(NOTEPAD_STORAGE_KEY, notepadText.value);
  });

  // ========================================
  // COPY
  // ========================================

  copyNotepadBtn.addEventListener("click", async () => {
    const text = notepadText.value;

    if (!text) {
      showNotepadMessage("Nothing to copy.");

      return;
    }

    try {
      await navigator.clipboard.writeText(text);

      showNotepadMessage("Copied!");
    } catch (error) {
      console.error("Copy failed:", error);

      showNotepadMessage("Unable to copy.");
    }
  });

  // ========================================
  // RESET
  // ========================================

  resetNotepadBtn.addEventListener("click", () => {
    notepadText.value = "";

    localStorage.removeItem(NOTEPAD_STORAGE_KEY);

    showNotepadMessage("Notepad reset.");
  });

  // ========================================
  // SAVE TO DISK
  // ========================================

  saveNotepadBtn.addEventListener("click", () => {
    const text = notepadText.value;

    if (!text) {
      showNotepadMessage("Nothing to save.");

      return;
    }

    // Create TXT file
    const blob = new Blob([text], {
      type: "text/plain;charset=utf-8",
    });

    // Create download URL
    const url = URL.createObjectURL(blob);

    // Create download link
    const downloadLink = document.createElement("a");

    downloadLink.href = url;
    downloadLink.download = "notepad.txt";

    // Start download
    document.body.appendChild(downloadLink);

    downloadLink.click();

    // Remove temporary link
    document.body.removeChild(downloadLink);

    URL.revokeObjectURL(url);

    showNotepadMessage("Saved to disk.");
  });

  // ========================================
  // MESSAGE
  // ========================================

  function showNotepadMessage(message) {
    notepadMessage.textContent = message;

    setTimeout(() => {
      notepadMessage.textContent = "";
    }, 2000);
  }
}
