function verifyLCode() {
  const input = document.getElementById('lcodeInput').value.trim();
  const result = document.getElementById('verifyResult');
  const regex = /^[A-Z]{2}-[A-Z]{2}-[A-Z0-9]{5}$/;

  if (regex.test(input)) {
    result.textContent = "✅ Valid LCode format";
    result.style.color = "green";
  } else {
    result.textContent = "❌ Invalid LCode format. Example: US-CA-12345";
    result.style.color = "red";
  }
}