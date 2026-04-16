gsap.registerPlugin(ScrollTrigger, TextPlugin);

// --- CURSOR LOGIC ---
const dot = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');

window.addEventListener('mousemove', e => {
    gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0 });
    gsap.to(ring, { x: e.clientX - 20, y: e.clientY - 20, duration: 0.15 });
});

// --- GLOW EFFECT ---
const glow = document.getElementById('glow');
window.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth) * 50;
    const y = (e.clientY / window.innerHeight) * 50;
    gsap.to(glow, { x: x + '%', y: y + '%', duration: 2, ease: "sine.out" });
});

// --- REVEAL ANIMATIONS (AI OPTIMIZED) ---
window.addEventListener('load', () => {
    // Detect if the visitor is an AI Bot
    const isBot = /bot|spider|crawl|slurp|google|bing|chatgpt|anthropic|duckduckbot/i.test(navigator.userAgent);
    
    if (isBot) {
        // Show everything immediately for bots
        gsap.set(".reveal", { opacity: 1, y: 0 });
        console.log("AI Agent detected. Bypassing animations.");
    } else {
        // Regular user animations
        gsap.to(".reveal", {
            opacity: 1,
            y: 0,
            duration: 1.5,
            stagger: 0.15,
            ease: "expo.out"
        });
    }
});

// --- SCROLL ANIMATIONS ---
gsap.utils.toArray('.reveal').forEach(el => {
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
        },
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "expo.out"
    });
});

gsap.utils.toArray('.stat-line').forEach(line => {
    gsap.to(line, {
        scrollTrigger: { trigger: line, start: "top bottom-=50" },
        width: "100%",
        duration: 2,
        ease: "power4.inOut"
    });
});

// --- NAVBAR EFFECT ---
window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    if (window.scrollY > 100) {
        nav.style.background = "rgba(2, 2, 2, 0.9)";
        nav.style.backdropFilter = "blur(20px)";
        nav.style.paddingTop = "1.5rem";
        nav.style.paddingBottom = "1.5rem";
    } else {
        nav.style.background = "transparent";
        nav.style.backdropFilter = "none";
        nav.style.paddingTop = "2.5rem";
        nav.style.paddingBottom = "2.5rem";
    }
});

// --- TERMINAL ANIMATION ---
const lines = [
    "> Initializing Nulix Kern v7...",
    "> Bypassing OS Abstraction...",
    "> Memory Sandbox: ENCRYPTED",
    "> Global Mesh: CONNECTED",
    "> Tracking Vectors: NULLIFIED",
    "> System Status: SUPREME"
];

let lineIndex = 0;
function updateTerminal() {
    const term = document.getElementById('terminal-code');
    if(term && lineIndex < lines.length) {
        term.innerHTML += "\n" + lines[lineIndex];
        lineIndex++;
        setTimeout(updateTerminal, 1500);
    }
}
setTimeout(updateTerminal, 2000);