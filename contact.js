document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const mobile = this.mobile.value.trim();
  const message = this.message.value.trim();

  // Basic check before sending
  if (!name || !email || !mobile || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Simulate form submission
  alert(`Thank you, ${name}! Your message has been received.`);

  // Clear form
  this.reset();
});
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const mobile = this.mobile.value.trim();
  const message = this.message.value.trim();

  // Basic check before sending
  if (!name || !email || !mobile || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Simulate form submission
  alert(`Thank you, ${name}! Your message has been received.`);

  // Clear form
  this.reset();
});
