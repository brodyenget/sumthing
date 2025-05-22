document.getElementById('nameForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim().toLowerCase();

  // Customize logic here for name-based PDF selection
  let pdfFile;
  if (["ashley, kelly, vi"].includes(name)) {
    pdfFile = "pdfs/hw7.pdf";
  } else if (["brody, ines, beans"].includes(name)) {
    pdfFile = "pdfs/hw6.pdf";
  } 
    window.location.href = pdfFile; // Redirect or open the selected PDF
});
