# 💚 Picpay Web Site

Uma landing page moderna e interativa inspirada no PicPay, com cartão 3D giratório, modo escuro, suporte multilíngue e sistema de login/cadastro funcional.

## ✨ Funcionalidades

| Funcionalidade | Descrição |
|----------------|-----------|
| 🃏 **Cartão 3D Giratório** | Cartão que gira 180° a cada 4 segundos, alternando entre o modelo Gold, Platium, Black e Epic |
| 🌙 **Modo Escuro/Claro** | Alternância entre temas com persistência no localStorage |
| 🌐 **Multi-idioma** | Suporte para Português, Inglês e Espanhol |
| 🔐 **Login/Cadastro** | Modal com formulários funcionais e armazenamento local |
| 📱 **Design Responsivo** | Adaptado para desktop, tablet e mobile |
| 🎯 **Scroll Suave** | Navegação por âncoras com menu ativo dinâmico |
| 📊 **Contadores Animados** | Estatísticas que incrementam ao visualizar |
| ✨ **Animações Fade-up** | Elementos surgindo suavemente ao rolar a página |

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna, flexbox, grid, animações 3D
- **JavaScript (Vanilla)** - Interatividade, DOM manipulation, localStorage
- **Font Awesome** - Ícones vetoriais
- **Google Fonts** - Família de fontes 'Inter'

## 📁 Estrutura do Projeto
picpay-website/
|__ img
├── index.html # Estrutura HTML completa
├── style.css # Estilos e responsividade
├── script.js # Lógica e interatividade
└── README.md # Documentação

text

## 🎨 Cores do Projeto

| Cor | Código | Uso |
|-----|--------|-----|
| Verde Picpay | `#21C25E` | Principal, gradientes |
| Verde/Verde Escuro | `#036830` | Gradientes, hover |
| Preto Black | `#0a0a0a` | Cartão Black |
| Cinza texto | `#6c757d` | Textos secundários |
| Fundo claro | `#f5f5f5` | Background padrão |


📱 Responsividade
Dispositivo	Largura	Comportamento
Desktop	> 1024px	Layout completo com menu horizontal
Tablet	768px - 1024px	Menu oculto, layout otimizado
Mobile	< 768px	Layout empilhado, texto ajustado

🎮 Funcionalidades Detalhadas
Cartão 3D
Gira 180° a cada 4 segundos automaticamente

Frente: Picpay Gold / Picpay Platium / Picpay Black / Picpay Epic

Verso: Informações do cartão que mudam conforme o modelo

Pausa a animação ao passar o mouse

Sistema de Autenticação
Login: E-mail + senha (armazenados localmente)

Cadastro: Nome, e-mail e senha com validação

Persistência via localStorage

Modal com transição suave

Modo Escuro
Alterna cores de fundo, textos, cartões e componentes

Preferência salva no navegador

Idiomas Disponíveis
🇧🇷 Português (PT)

🇺🇸 English (EN)

🇪🇸 Español (ES)

🧪 Testes Realizados
✅ Animação do cartão 3D
✅ Troca de tema escuro/claro
✅ Troca de idioma
✅ Login com credenciais válidas/inválidas
✅ Cadastro de novo usuário
✅ Navegação por scroll com menu ativo
✅ Responsividade em diferentes resoluções
✅ Carregamento de contadores animados
✅ Persistência de dados no localStorage


🌐 Demonstração Online
Você pode visualizar o projeto online através do GitHub Pages:

🙏 Agradecimentos
💚 Picpay - Pela inspiração visual

Font Awesome - Pelos ícones

Google Fonts - Pela fonte Inter
