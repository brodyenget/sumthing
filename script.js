document.getElementById('nameForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim().toLowerCase();

  let pdfFile = null; // Initialize pdfFile to null

  // Customize logic here for name-based PDF selection
  if (["ashley", "kelly", "vi"].includes(name)) { // Made these individual strings
    pdfFile = "pdfs/hw7.pdf";
  } else if (["brody", "ines", "beans"].includes(name)) { // Made these individual strings
    pdfFile = "pdfs/hw6.pdf";
  }

  // Only redirect if a pdfFile was found
  if (pdfFile) {
    window.location.href = pdfFile; // Redirect or open the selected PDF
  }
  // If pdfFile is still null, nothing happens
});
