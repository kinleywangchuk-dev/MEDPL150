// Cursor glow + parallax grid (matches styles.css)
const glow = document.createElement('div');
glow.className = 'cursor-glow';
document.body.appendChild(glow);

const root = document.documentElement;

document.addEventListener('mousemove', (e) => {
  const cx = window.innerWidth  / 2;
  const cy = window.innerHeight / 2;
  const dx = (e.clientX - cx) / cx;
  const dy = (e.clientY - cy) / cy;
  const strength = 18;
  root.style.setProperty('--px', (dx * strength) + 'px');
  root.style.setProperty('--py', (dy * strength) + 'px');
  const px = (e.clientX / window.innerWidth  * 100).toFixed(1) + '%';
  const py = (e.clientY / window.innerHeight * 100).toFixed(1) + '%';
  glow.style.background =
    `radial-gradient(ellipse 500px 400px at ${px} ${py}, rgba(0,255,247,0.07) 0%, transparent 70%)`;
});

document.addEventListener('mouseleave', () => {
  root.style.setProperty('--px', '0px');
  root.style.setProperty('--py', '0px');
  glow.style.background =
    'radial-gradient(ellipse 500px 400px at 50% 50%, rgba(0,255,247,0.06) 0%, transparent 70%)';
});
