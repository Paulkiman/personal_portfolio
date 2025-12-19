param(
  [string]$NodeVersion = "18.20.0"
)

if (-not (Get-Command nvm -ErrorAction SilentlyContinue)) {
  Write-Error "nvm not found. Run install-nvm-windows.ps1 first or install nvm manually."
  exit 1
}

Write-Host "Installing Node $NodeVersion via nvm..."
nvm install $NodeVersion

















Write-Host "Done. Open a new shell to start using pnpm."$pnpmVer = "(not available)"
if (Get-Command pnpm -ErrorAction SilentlyContinue) { $pnpmVer = (& pnpm -v) }
Write-Host "pnpm: $pnpmVer"
nif ($nodeSem -ge [version]"16.9.0") {
  if (Get-Command corepack -ErrorAction SilentlyContinue) {
    Write-Host "Enabling Corepack and activating pnpm..."
    corepack enable
    corepack prepare pnpm@latest --activate
  } else {
    Write-Host "Corepack not available; installing pnpm via npm..."
    npm install -g pnpm
  }
} else {
  Write-Host "Node <16.9; installing pnpm via npm..."
  npm install -g pnpm
}try {
    $nodeSem = [version]($nodeVer.TrimStart('v'))
} catch {
    Write-Warning "Failed to parse Node version; installing pnpm via npm as fallback."
    npm install -g pnpm
    Write-Host "pnpm: $(pnpm -v)"
    exit
}# Install pnpm using Corepack where available, otherwise via npmWrite-Host "npm: $npmVer"Write-Host "Node: $nodeVer"if (-not $nodeVer) { Write-Error "Node not found after nvm use. Ensure your shell was restarted or open a new shell."; exit 1 }$npmVer = (& npm -v) 2>$null$nodeVer = (& node -v) 2>$nullWrite-Host "Verifying Node and npm..."nvm use $NodeVersionnif ($LASTEXITCODE -ne 0) { Write-Error "nvm install failed"; exit $LASTEXITCODE }