document.getElementById('nameForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim().toLowerCase();

  // Customize logic here for name-based PDF selection
  let pdfFile;
  if (["alice", "bob", "carol"].includes(name)) {
    pdfFile = "pdfs/fileA.pdf";
  } else {
    pdfFile = "pdfs/fileB.pdf";
  }

  // Redirect or open the selected PDF
  window.location.href = pdfFile;
});
