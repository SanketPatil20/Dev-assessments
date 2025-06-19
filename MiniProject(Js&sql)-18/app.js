document.getElementById('markForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('studentName').value.trim();
    const subject = document.getElementById('subject').value;
    const marks = document.getElementById('marks').value;

    if (!name || !subject || marks === '') {
        return;
    }

    addEntry(name, subject, marks);
    this.reset();
});

function addEntry(name, subject, marks) {
    const container = document.getElementById('entriesContainer');
    const entry = document.createElement('div');
    entry.className = 'entry-item';

    entry.innerHTML = `
    <span><strong>Name:</strong> ${name}</span>
    <span><strong>Subject:</strong> ${subject}</span>
    <span><strong>Marks:</strong> ${marks}</span>
  `;

    container.appendChild(entry);
}
