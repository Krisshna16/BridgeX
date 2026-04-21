// Scroll
function scrollToBridge() {
  document.getElementById("bridge").scrollIntoView({
    behavior: "smooth"
  });
}

// Popup
function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function connectWallet() {
  const type = document.getElementById("walletType").value;
  const address = document.getElementById("walletAddress").value;

  if (!address) {
    alert("Enter wallet address");
    return;
  }

  // Change button text
  const btn = document.getElementById("connectBtn");
  btn.innerText = `Connected: ${type}`;
  btn.style.background = "#22c55e";
  btn.style.color = "black";

  // Show success banner
  const banner = document.getElementById("successBanner");
  banner.classList.add("show");

  setTimeout(() => {
    banner.classList.remove("show");
  }, 3000);

  closePopup();
}

// PARTICLES
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 500; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2,
    speedX: (Math.random() - 0.5) * 0.3,
    speedY: (Math.random() - 0.5) * 0.3
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(34,197,94,0.3)";
    ctx.fill();

    p.x += p.speedX;
    p.y += p.speedY;

    if (p.x > canvas.width) p.x = 0;
    if (p.x < 0) p.x = canvas.width;
    if (p.y > canvas.height) p.y = 0;
    if (p.y < 0) p.y = canvas.height;
  });

  requestAnimationFrame(drawParticles);
}

drawParticles();
function updateBridgeInfo() {
  const from = document.getElementById("fromToken");
  const to = document.getElementById("toToken");

  // Prevent same selection
  if (from.value === to.value) {
    alert("Cannot select same currency");
    to.value = "";
  }

  // Update top info
  document.getElementById("bridgeInfo").innerText =
    `${from.value} → ${to.value}`;
}
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
function startBridgeAnimation() {
  const card = document.querySelector(".bridge-card");
  const steps = document.getElementById("bridgeSteps");

  const from = document.getElementById("fromToken").value;
  const to = document.getElementById("toToken").value;
const amount = document.getElementById("amountInput").value;
  if (!amount || amount <= 0) {
    alert("Enter valid amount");
    return;
  }

  if (!from || !to) {
    alert("Select tokens");
    return;
  }

  card.classList.add("bridge-active");

  steps.innerHTML = `<p class="step-active">🔒 Locking ${amount} ${from}...</p>`;

  setTimeout(() => {
    steps.innerHTML += `<p class="step-active">⏳ Verifying transaction...</p>`;
  }, 1500);

  setTimeout(() => {
    steps.innerHTML += `<p class="step-active">🌉 Bridging to ${to} network...</p>`;
  }, 3000);

  setTimeout(() => {
    steps.innerHTML += `<p class="step-active">✅ Tokens received on ${to}</p>`;
  }, 4500);

  setTimeout(() => {
    card.classList.remove("bridge-active");
    addTransaction(from, to, amount);
  }, 5000);
}
function addTransaction(from, to, amount) {
  const table = document.querySelector(".tx-table");

  const newTx = document.createElement("div");
  newTx.classList.add("tx-row");

  const date = new Date().toLocaleDateString();

  newTx.innerHTML = `
    <span>${date}</span>
    <span>${from}</span>
    <span>${to}</span>
    <span>${amount}</span>
  `;

  table.appendChild(newTx);
}
function scrollToBridge() {
  document.getElementById("bridge").scrollIntoView({
    behavior: "smooth"
  });
}
const navbar = document.querySelector(".navbar");

navbar.addEventListener("mousemove", (e) => {
  const rect = navbar.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  navbar.style.setProperty("--x", x + "px");
  navbar.style.setProperty("--y", y + "px");
});
function openPopup() {
  document.getElementById("walletPopup").style.display = "block";
}

function closePopup() {
  document.getElementById("walletPopup").style.display = "none";
}

function connectWallet() {
  const type = document.getElementById("walletType").value;
  const address = document.getElementById("walletAddress").value;

  if (!address) {
    alert("Enter wallet address");
    return;
  }

  alert(`Connected: ${type} - ${address}`);
  closePopup();
}