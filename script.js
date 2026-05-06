// Toast modal
function showToastModal(title, message, isSuccess = true) {
  const overlay = document.createElement('div');
  overlay.className = 'toast-overlay';
  const toast = document.createElement('div');
  toast.className = 'toast-modal';
  toast.innerHTML = `<i class="fas ${isSuccess ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i><h3>${title}</h3><p>${message}</p><button class="close-toast">Fechar</button>`;
  document.body.appendChild(overlay);
  document.body.appendChild(toast);
  const closeBtn = toast.querySelector('.close-toast');
  const closeModal = () => { overlay.remove(); toast.remove(); };
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  setTimeout(() => { if(overlay.parentNode) closeModal(); }, 4000);
}

// Elementos do cartão 3D
const flipCard = document.getElementById('flipCard');
const cardFront = document.getElementById('cardFront');
const cardBack = document.getElementById('cardBack');
const frontBrand = document.getElementById('frontBrand');
const frontNumber = document.getElementById('frontNumber');
const backFooterText = document.getElementById('backFooterText');

let isFlipped = false;
let currentThemeIndex = 0;

// Configuração dos 4 cartões
const cardThemes = [
  {
    frontClass: 'card-front-green',
    backClass: 'card-back-green',
    brand: 'PICPAY CARD',
    number: '<span>••••</span>  <span>••••</span>  <span>••••</span>  <span>8847</span>',
    footer: 'CARTÃO PICPAY CARD • SEM ANUIDADE'
  },
  {
    frontClass: 'card-front-platinum',
    backClass: 'card-back-platinum',
    brand: 'PICPAY PLATINUM',
    number: '⭐ <span>PLATINUM</span> <span>EDITION</span>',
    footer: 'PICPAY PLATINUM • BENEFÍCIOS EXCLUSIVOS'
  },
  {
    frontClass: 'card-front-black',
    backClass: 'card-back-black',
    brand: 'PICPAY BLACK',
    number: '⚡  <span>BLACK</span>  <span>EDITION</span>',
    footer: 'PICPAY BLACK • CASHBACK 1,2% • SALAS VIP'
  },
  {
    frontClass: 'card-front-ultrablack',
    backClass: 'card-back-ultrablack',
    brand: 'PICPAY EPIC',
    number: '✨ <span>ULTRA</span> <span>EXCLUSIVE</span>',
    footer: 'PICPAY EPIC • EXPERIÊNCIA MÁXIMA • ATÉ 3X SEM JUROS EM COMPRAS INTERNACIONAIS'
  }
];

// Função para avançar para o próximo cartão
function toggleCardTheme() {
  const currentTheme = cardThemes[currentThemeIndex];
  
  // Remove as classes do cartão atual
  cardFront.classList.remove(currentTheme.frontClass);
  cardBack.classList.remove(currentTheme.backClass);
  
  // Atualiza o índice para o próximo (volta ao 0 quando chegar no final)
  currentThemeIndex = (currentThemeIndex + 1) % cardThemes.length;
  const nextTheme = cardThemes[currentThemeIndex];
  
  // Adiciona as classes e os textos do novo cartão
  cardFront.classList.add(nextTheme.frontClass);
  cardBack.classList.add(nextTheme.backClass);
  frontBrand.innerHTML = nextTheme.brand;
  frontNumber.innerHTML = nextTheme.number;
  backFooterText.innerHTML = nextTheme.footer;
}

// Giro do cartão: a cada 4 segundos gira e troca o tema
let flipInterval = setInterval(() => {
  isFlipped = !isFlipped;
  if (isFlipped) {
    flipCard.classList.add('flipped');
    setTimeout(() => {
      if (isFlipped) {
        toggleCardTheme();
      }
    }, 400); // Troca o visual enquanto o cartão está de costas
  } else {
    flipCard.classList.remove('flipped');
  }
}, 4000);

// Pausar a animação ao passar o mouse
flipCard.addEventListener('mouseenter', () => clearInterval(flipInterval));
flipCard.addEventListener('mouseleave', () => {
  flipInterval = setInterval(() => {
    isFlipped = !isFlipped;
    if (isFlipped) {
      flipCard.classList.add('flipped');
      setTimeout(() => {
        if (isFlipped) toggleCardTheme();
      }, 400);
    } else {
      flipCard.classList.remove('flipped');
    }
  }, 4000);
});

// MODO ESCURO
const darkToggle = document.getElementById('darkModeToggle');
if (localStorage.getItem('PicPay_dark') === 'true') document.body.classList.add('dark-mode');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('PicPay_dark', document.body.classList.contains('dark-mode'));
  darkToggle.querySelector('i').className = document.body.classList.contains('dark-mode') ? 'fas fa-sun' : 'fas fa-moon';
});

// IDIOMA
const langSelect = document.getElementById('langSelect');
const texts = { 
  pt: { heroTitle: 'Conta digital gratuita e cartão sem anuidade', heroDesc: 'Mais de 67 milhões de brasileiros já escolheram o PicPay.', ctaTitle: 'Junte-se a mais de 67 milhões', ctaDesc: 'Abra sua conta em menos de 5 minutos.' }, 
  en: { heroTitle: 'Free digital account and no annual fee card', heroDesc: 'Over 67 million Brazilians have chosen PicPay.', ctaTitle: 'Join over 67 million', ctaDesc: 'Open your account in less than 5 minutes.' }, 
  es: { heroTitle: 'Cuenta digital gratuita y tarjeta sin anualidad', heroDesc: 'Más de 67 millones de brasileños ya eligieron PicPay.', ctaTitle: 'Únete a más de 67 millones', ctaDesc: 'Abre tu cuenta en menos de 5 minutos.' } 
};
function setLanguage(lang) { 
  document.querySelector('.hero h1').innerHTML = texts[lang].heroTitle + ' <span class="gradient-text">gratuita</span>'; 
  document.querySelector('.hero p').innerText = texts[lang].heroDesc; 
  document.querySelector('.cta-section h2').innerText = texts[lang].ctaTitle; 
  document.querySelector('.cta-section p').innerText = texts[lang].ctaDesc; 
  localStorage.setItem('PicPay_lang', lang); 
}
const savedLang = localStorage.getItem('PicPay_lang') || 'pt';
langSelect.value = savedLang; 
setLanguage(savedLang);
langSelect.addEventListener('change', (e) => setLanguage(e.target.value));

// NAVEGAÇÃO
const homeSection = document.getElementById('home-section');
const cardsShowcase = document.querySelector('.cards-showcase');
const investSection = document.getElementById('investimentos-section');
const segurancaSection = document.getElementById('seguranca-section');

function updateActiveMenu() {
  const scrollPos = window.scrollY + 150;
  const sections = [
    { id: 'home', element: homeSection, offset: homeSection.offsetTop },
    { id: 'cartoes', element: cardsShowcase, offset: cardsShowcase.offsetTop },
    { id: 'investimentos', element: investSection, offset: investSection.offsetTop },
    { id: 'seguranca', element: segurancaSection, offset: segurancaSection.offsetTop }
  ];
  let active = 'home';
  for (let i = sections.length - 1; i >= 0; i--) {
    if (scrollPos >= sections[i].offset - 100) { active = sections[i].id; break; }
  }
  document.querySelectorAll('#mainNav a').forEach(link => { 
    link.classList.remove('active'); 
    if (link.getAttribute('data-section') === active) link.classList.add('active'); 
  });
}

document.querySelectorAll('#mainNav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const section = link.getAttribute('data-section');
    let target;
    if (section === 'home') target = homeSection;
    else if (section === 'cartoes') target = cardsShowcase;
    else if (section === 'investimentos') target = investSection;
    else target = segurancaSection;
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

document.getElementById('logoHome').addEventListener('click', () => homeSection.scrollIntoView({ behavior: 'smooth' }));
document.querySelectorAll('[data-footer]').forEach(el => el.addEventListener('click', () => { 
  if(el.getAttribute('data-footer') === 'home') homeSection.scrollIntoView({ behavior: 'smooth' }); 
  else if(el.getAttribute('data-footer') === 'cartoes') cardsShowcase.scrollIntoView({ behavior: 'smooth' }); 
}));

window.addEventListener('scroll', () => { 
  updateActiveMenu(); 
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 50); 
  document.querySelectorAll('.fade-up').forEach(el => { 
    if(el.getBoundingClientRect().top < window.innerHeight - 100) el.classList.add('show'); 
  }); 
});
updateActiveMenu();
document.querySelectorAll('.fade-up').forEach(el => { 
  if(el.getBoundingClientRect().top < window.innerHeight - 100) el.classList.add('show'); 
});

// CONTADORES
const counterObserver = new IntersectionObserver((entries) => { 
  entries.forEach(entry => { 
    if(entry.isIntersecting && !entry.target.hasAttribute('data-counted')) { 
      entry.target.setAttribute('data-counted', 'true'); 
      const target = parseFloat(entry.target.getAttribute('data-target')); 
      let current = 0; 
      const inc = target/50; 
      const update = () => { 
        current += inc; 
        if(current < target) { 
          entry.target.textContent = target === 4.7 ? current.toFixed(1) : target === 67 || target === 550 ? Math.floor(current)+'B' : target === 99.99 ? current.toFixed(2)+'%' : Math.floor(current); 
          requestAnimationFrame(update); 
        } else { 
          entry.target.textContent = target === 4.7 ? '4.7★' : target === 67 ? '67M' : target === 550 ? '550B' : target === 99.99 ? '99.99%' : target; 
        } 
      }; 
      update(); 
    } 
  }); 
}, { threshold: 0.5 });
document.querySelectorAll('.stat-number').forEach(c => counterObserver.observe(c));

// MODAL LOGIN
const modal = document.getElementById('authModal');
const loginModalBtn = document.getElementById('loginModalBtn');
const signupModalBtn = document.getElementById('signupModalBtn');
const closeModalBtn = document.querySelector('.modal-close');
const tabs = document.querySelectorAll('.modal-tab');
const loginFormDiv = document.getElementById('loginForm');
const signupFormDiv = document.getElementById('signupForm');
function openModal(tab = 'login') { 
  modal.classList.add('active'); 
  tabs.forEach(t => t.classList.remove('active')); 
  if (tab === 'login') { 
    tabs[0].classList.add('active'); 
    loginFormDiv.classList.add('active'); 
    signupFormDiv.classList.remove('active'); 
  } else { 
    tabs[1].classList.add('active'); 
    signupFormDiv.classList.add('active'); 
    loginFormDiv.classList.remove('active'); 
  } 
}
loginModalBtn?.addEventListener('click', () => openModal('login'));
signupModalBtn?.addEventListener('click', () => openModal('signup'));
closeModalBtn?.addEventListener('click', () => modal.classList.remove('active'));
modal?.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });
tabs.forEach(tab => tab.addEventListener('click', () => openModal(tab.getAttribute('data-tab'))));
document.getElementById('switchToSignup')?.addEventListener('click', (e) => { e.preventDefault(); openModal('signup'); });
document.getElementById('switchToLogin')?.addEventListener('click', (e) => { e.preventDefault(); openModal('login'); });

let users = JSON.parse(localStorage.getItem('PicPay_users') || '[]');
document.getElementById('doLoginBtn')?.addEventListener('click', () => { 
  const email = document.getElementById('loginEmail').value; 
  const pass = document.getElementById('loginPassword').value; 
  const user = users.find(u => u.email === email && u.password === pass);
  if(user) { 
    showToastModal('Login realizado!', `Bem-vindo(a) de volta, ${user.name}!`); 
    modal.classList.remove('active'); 
  } else showToastModal('Erro', 'E-mail ou senha incorretos.', false);
});
document.getElementById('doSignupBtn')?.addEventListener('click', () => { 
  const name = document.getElementById('signupName').value; 
  const email = document.getElementById('signupEmail').value; 
  const pass = document.getElementById('signupPassword').value; 
  const confirm = document.getElementById('signupConfirm').value; 
  if(!name || !email || !pass) { showToastModal('Erro', 'Preencha todos os campos.', false); return; }
  if(pass !== confirm) { showToastModal('Erro', 'As senhas não conferem.', false); return; }
  if(users.find(u => u.email === email)) { showToastModal('Erro', 'E-mail já cadastrado.', false); return; }
  users.push({ name, email, password: pass }); 
  localStorage.setItem('PicPay_users', JSON.stringify(users)); 
  showToastModal('Conta criada!', `Parabéns ${name}! Sua conta foi criada com sucesso.`); 
  modal.classList.remove('active');
});

document.getElementById('heroCta')?.addEventListener('click', () => openModal('signup'));
document.getElementById('demoBtn')?.addEventListener('click', () => cardsShowcase.scrollIntoView({ behavior: 'smooth', block: 'start' }));
document.getElementById('ctaButton')?.addEventListener('click', () => openModal('signup'));

const menuBtn = document.getElementById('menuBtn');
  const headerContent = document.getElementById('headerContent');

  menuBtn.addEventListener('click', () => {
    // Alterna a classe 'active', fazendo o menu aparecer ou sumir
    headerContent.classList.toggle('active');
    
    // Opcional: Muda o ícone de hambúrguer para um "X"
    const icon = menuBtn.querySelector('i');
    if (headerContent.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });

  // Opcional: Fecha o menu se clicar em algum link da navegação (útil para Single Page Applications)
  const navLinks = document.querySelectorAll('#mainNav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      headerContent.classList.remove('active');
      menuBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
    });
  });