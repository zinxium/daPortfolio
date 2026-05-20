#!/usr/bin/env bash
# ============================================
# daPortfolio - Script d'installation
# React 19 + Vite + Bootstrap + MUI + Tailwind
# ============================================
set -e

RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'; CYAN='\033[0;36m'; NC='\033[0m'

echo -e "${CYAN}============================================${NC}"
echo -e "${CYAN}  daPortfolio - Installation${NC}"
echo -e "${CYAN}============================================${NC}"
echo ""

# ── 1. Node.js ───────────────────────────────────────────────────────────────
echo -e "${YELLOW}[1/3] Vérification de Node.js...${NC}"
if ! command -v node &>/dev/null; then
    echo -e "${RED}Node.js n'est pas installé. Installez Node.js 18+ depuis https://nodejs.org/${NC}"
    exit 1
fi
NODE_VERSION=$(node --version)
echo -e "${GREEN}  Node.js $NODE_VERSION${NC}"

# ── 2. Dépendances ──────────────────────────────────────────────────────────
echo -e "${YELLOW}[2/3] Installation des dépendances npm...${NC}"
npm install
echo -e "${GREEN}  Dépendances installées (React 19, Vite, MUI, Bootstrap, Tailwind)${NC}"

# ── 3. Environnement ────────────────────────────────────────────────────────
echo -e "${YELLOW}[3/3] Configuration de l'environnement...${NC}"
if [ ! -f ".env" ]; then
    cat > .env << 'ENVEOF'
# EmailJS - pour le formulaire de contact
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
ENVEOF
    echo -e "${GREEN}  .env créé${NC}"
    echo -e "${YELLOW}  IMPORTANT: Renseignez vos identifiants EmailJS dans .env${NC}"
else
    echo -e "${GREEN}  .env existe déjà${NC}"
fi

echo ""
echo -e "${GREEN}Installation terminée !${NC}"
echo -e "Lancer le serveur de dev: ${CYAN}npm run dev${NC}"
echo -e "Build production:         ${CYAN}npm run build${NC}"
