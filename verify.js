function verifyLCode() {
  const input = document.getElementById("lcodeInput").value.trim();
  const result = document.getElementById("result");
  if (/^[0-9]{5}$/.test(input)) {
    result.textContent = "✅ Valid LCode (same accuracy as a Google Maps pin)";
    result.style.color = "green";
  } else {
    result.textContent = "❌ Invalid LCode format. Must be 5 digits.";
    result.style.color = "red";
  }
}
