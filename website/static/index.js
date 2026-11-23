function deleteNote(noteId) {
  fetch("/delete-note", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ noteId: noteId }),
  })
    .then((response) => response.json())
    .then((_data) => {
      window.location.href = "/";
    })
    .catch((error) => {
      console.error("Error deleting note:", error);
    });
}
