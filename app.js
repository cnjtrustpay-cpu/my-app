const card = document.getElementById("virtualCard");
const cardNumber = document.getElementById("cardNumber");
const freezeBtn = document.getElementById("freezeBtn");
const detailsBtn = document.getElementById("detailsBtn");
const historyBtn = document.getElementById("historyBtn");
const aiOutput = document.getElementById("aiOutput");

let isFrozen = false;
let showFull = false;

freezeBtn.addEventListener("click", () => {
  isFrozen = !isFrozen;
  card.classList.toggle("frozen", isFrozen);
  freezeBtn.textContent = isFrozen ? "Unfreeze" : "Freeze";
});

detailsBtn.addEventListener("click", () => {
  showFull = !showFull;
  cardNumber.textContent = showFull ? "4147 0000 0000 0000" : "4147 •••• •••• 0000";
  detailsBtn.textContent = showFull ? "Hide Details" : "Show Details";
});

historyBtn.addEventListener("click", () => {
  aiOutput.textContent = "Recent Ledger: No unauthorized disbursements. All Corporate Trustee authorizations verified under VMA4171.";
});

const responses = {
  rule: "Governance Rule VMA4171: Corporate Trustee disbursements require dual custodial verification and active Security Lock.",
  intent: "Transaction Intent Check: Ready to audit beneficiary alignment against CNJENN Entertainment LLC trust bylaws.",
  trust: "Trust Structure: Private Living Trust custodial layer separating administrative governance cards from underlying reserve accounts."
};

document.querySelectorAll(".chip-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    aiOutput.textContent = responses[btn.dataset.q];
  });
});

document.getElementById("aiForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("aiInput");
  aiOutput.textContent = `Governance Audit for "${input.value}": Verified under Trusted Custodial Layer policy. No compliance flags detected.`;
  input.value = "";
});
