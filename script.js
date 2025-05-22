document.getElementById('nameForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const enteredName = document.getElementById('name').value.trim().toLowerCase();

  // --- Configuration Section (Easier to Read and Edit) ---

  // 1. Define groups and list their members (all names should be lowercase for consistency)
  const groupMembership = {
    "titans": [
      "brody", "tom", "pam", "alex"
    ],
    "olympians": [
      "ines", "tucker", "ford", "chris"
    ],
    "innovators": [
      "vi", "devon", "sam", "jordan"
    ],
    "voyagers": [
      "beans", "george", "morgan", "pat"
    ],
    "pioneers": [
      "kelly", "jacinta", "leo", "max"
    ]
    // To add a new group:
    // "newGroupName": [
    //   "member1", "member2"
    // ]
  };

  // 2. Define the PDF file for each group
  const groupPdfs = {
    "titans": "pdfs/hw6.pdf",
    "olympians": "pdfs/hw7.pdf",
    "innovators": "pdfs/hw8.pdf",
    "voyagers": "pdfs/midterm.pdf",
    "pioneers": "pdfs/hw6.pdf"
    // To add a PDF for a new group:
    // "newGroupName": "pdfs/new_group_file.pdf"
  };

  // --- End of Configuration Section ---

  // --- Script Logic (Generally doesn't need frequent editing) ---

  let pdfFile = null;
  let foundGroup = null;

  // 3. Determine which group the entered name belongs to
  // This loop iterates through your defined groups
  for (const groupName in groupMembership) {
    if (groupMembership.hasOwnProperty(groupName)) {
      // Check if the entered name is in the current group's member list
      if (groupMembership[groupName].includes(enteredName)) {
        foundGroup = groupName;
        break; // Name found, no need to check other groups
      }
    }
  }

  // 4. If a group was found for the name, get the PDF for that group
  if (foundGroup) {
    pdfFile = groupPdfs[foundGroup];
  }

  // 5. Only redirect if a pdfFile was found
  if (pdfFile) {
    window.location.href = pdfFile;
  }
  // If pdfFile is null (name not in any group, or group has no PDF mapped), nothing happens
});
