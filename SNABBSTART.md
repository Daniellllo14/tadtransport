hero-delivery# TadTransport — Snabbstart

## Hämta och starta utvecklingsmiljön

### Första gången (installera beroenden)
```powershell
# Gå till projektmappen
cd 'C:\Users\danie\.vscode\tadtransport'

# Installera npm-paket (kör bara första gången)
npm install
```

### Starta dev-servern varje gång du vill arbeta
#### Metod 1: VS Code Task (rekommenderat)
1. Tryck Ctrl+Shift+P
2. Skriv "Run Task"
3. Välj "TadTransport: Start dev server"
4. Servern startar — öppna http://localhost:5173 i webbläsaren

#### Metod 2: Command Prompt (cmd)
```cmd
cd C:\Users\danie\.vscode\tadtransport
npm run dev
```

#### Metod 3: PowerShell (om execution-policy är tillåtet)
```powershell
cd 'C:\Users\danie\.vscode\tadtransport'
npm run dev
```

## Bygga för produktion
```cmd
cd C:\Users\danie\.vscode\tadtransport
npm run build
# Produktionsfiler hamnar i dist/
npm run preview
# Förhandsgranska på http://localhost:5174
```

## Publicera på Netlify/Vercel
1. Kör `npm run build` lokalt.
2. Ladda upp innehållet i `dist/`-mappen till Netlify eller Vercel.
3. Eller: Länka ditt GitHub-repo direkt — plattformen bygger automatiskt.

## Tillgängliga npm-skript
```
npm run dev      — Start dev-server (localhost:5173)
npm run build    — Bygga produktionspaketet
npm run preview  — Förhandsgranska produktion lokalt
npm run lint     — Kör ESLint (fixar automatiskt)
npm run format   — Kör Prettier (formaterar kod)
```

## Snabb hjälp

**PowerShell-fel?** Använd Command Prompt (cmd) eller VS Code Task istället.

**Port 5173 redan i användning?** Ändra port i `vite.config.ts`:
```ts
server: { port: 3000 }  // eller någon annan leddig port
```

**Vill du se sidan online?** Se deploy-instruktioner ovan.

Lycka till! 🚀
