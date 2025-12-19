param(
  [switch]$ForceChoco
)

function Ensure-Admin {
  $current = New-Object Security.Principal.WindowsPrincipal([Security.Principal.WindowsIdentity]::GetCurrent())
  if (-not $current.IsInRole([Security.Principal.WindowsBuiltinRole]::Administrator)) {
    Write-Warning "This script should be run as Administrator. Restarting with elevation..."
    Start-Process -FilePath "powershell.exe" -ArgumentList ("-NoProfile", "-ExecutionPolicy", "Bypass", "-File", $PSCommandPath) -Verb RunAs
    exit
  }
}

# If user forces Chocolatey path
if ($ForceChoco) {
  if (-not (Get-Command choco -ErrorAction SilentlyContinue)) {
    Write-Error "Chocolatey not found. Install Chocolatey first or run without -ForceChoco."
    exit 1
  }
  choco install nvm -y
  exit $LASTEXITCODE
}

# If Chocolatey present, prefer it (safer for scripting)
if (Get-Command choco -ErrorAction SilentlyContinue) {
  Write-Host "Chocolatey detected — installing nvm via choco..."
  choco install nvm -y
  Write-Host "Done. Please open a new shell to pick up nvm." 
  exit
}

Write-Host "Chocolatey not found. Downloading nvm-windows installer from GitHub releases..."
$api = "https://api.github.com/repos/coreybutler/nvm-windows/releases/latest"
try {
  $release = Invoke-RestMethod -UseBasicParsing -Uri $api
} catch {
  Write-Error "Failed to query GitHub API: $_"
  exit 1
}
$asset = $release.assets | Where-Object { $_.name -match "nvm-setup" } | Select-Object -First 1
if (-not $asset) { Write-Error "Could not find nvm-setup asset in latest release."; exit 1 }
$installer = Join-Path $env:TEMP $asset.name
Write-Host "Downloading $($asset.browser_download_url) to $installer..."
try {
  Invoke-WebRequest -Uri $asset.browser_download_url -OutFile $installer -UseBasicParsing
} catch {
  Write-Error "Download failed: $_"
  exit 1
}
Write-Host "Downloaded to $installer. Launching installer (you may need to accept UAC)..."
Start-Process -FilePath $installer -Wait
Write-Host "Installer finished. Open a new shell and run 'nvm --version' to verify."
