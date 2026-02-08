// ---------- PASSWORD (change this value) ----------
const PASSWORD = "valentine"; // <<-- CHANGE THIS to whatever you want

// ---------- GATE LOGIC ----------
const openBtn = document.getElementById('openBtn');
const pwdInput = document.getElementById('pwd');
const errorEl = document.getElementById('error');

function goOpen() {
  const v = pwdInput ? pwdInput.value.trim() : "";
  if (v === PASSWORD) {
    // go to the valentine page
    window.location.href = 'valentine.html';
  } else {
    if (errorEl) errorEl.innerText = "No worries — open only if you want to.";
    // subtle shake
    if (pwdInput) {
      pwdInput.animate([{transform:'translateX(-4px)'},{transform:'translateX(4px)'},{transform:'translateX(0)'}],{duration:220});
    }
  }
}

if (openBtn) openBtn.addEventListener('click', goOpen);
if (pwdInput) pwdInput.addEventListener('keydown', (e)=>{ if(e.key === 'Enter') goOpen(); });

// ---------- LIGHTBOX ----------
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');
const lbCaption = document.getElementById('lb-caption');

function openLightbox(src, caption){
  if(!lb || !lbImg) return;
  lbImg.src = src;
  lbImg.alt = caption || "";
  lbCaption.textContent = caption || "";
  lb.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(e){
  // clicking background or close button closes
  if(e && e.target && (e.target.id === 'lightbox' || e.target.classList.contains('lb-close'))) {
    lb.setAttribute('aria-hidden','true');
    lbImg.src = '';
    document.body.style.overflow = '';
  }
}

// prevent event bubbling when clicking the image
if(lbImg) lbImg.addEventListener('click',(e)=>e.stopPropagation());
