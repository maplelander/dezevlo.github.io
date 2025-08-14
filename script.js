document.addEventListener('DOMContentLoaded', () => {
const copyButtons = document.querySelectorAll('.copyBTN');

console.log("script.js loaded!")

copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const copyText = btn.getAttribute('copy-text');
        navigator.clipboard.writeText(copyText)
        .then(() => alert(`Copied ${copyText}`))
        .catch(err => alert("Failed to copy " + err));
    });
});
});