function calculateAge() {
  const birthdate = new Date(document.getElementById("birthdate").value);
  const today = new Date();
  const ageInMilliseconds = today - birthdate;
  const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
  document.getElementById("agexyz").style.display = "block";
  document.getElementById("ageres").textContent = `You are ${ageInYears} years old.`;
}