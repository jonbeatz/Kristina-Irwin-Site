# Sync this profile's CLI templates (cli-profile\config.yaml + SOUL.md)
# into %LOCALAPPDATA%\hermes\profiles\<slug>.
$ErrorActionPreference = 'Stop'

$ProfileRoot = Split-Path $PSScriptRoot -Parent
$manifest = Join-Path $ProfileRoot 'hermes-desktop-profile.json'
$slug = 'kristina-irwin-site'
if (Test-Path $manifest) {
    try { $slug = (Get-Content $manifest -Raw | ConvertFrom-Json).profileName } catch { }
}

$TemplateDir = Join-Path $ProfileRoot 'cli-profile'
$ProfileHome = Join-Path $env:LOCALAPPDATA "hermes\profiles\$slug"

if (-not (Test-Path $TemplateDir)) {
    Write-Host "[profile-sync] no cli-profile templates at $TemplateDir" -ForegroundColor Yellow
    return
}

New-Item -ItemType Directory -Path $ProfileHome -Force | Out-Null
foreach ($file in @('config.yaml', 'SOUL.md')) {
    $src = Join-Path $TemplateDir $file
    if (Test-Path $src) {
        $dst = Join-Path $ProfileHome $file
        $raw = Get-Content $src -Raw
        # Templates hold {{MSC_LITELLM_MASTER_KEY}} instead of the literal key
        # (GitGuardian 2026-08-31) - inject the real key from .env.local here.
        if ($raw -like '*{{MSC_LITELLM_MASTER_KEY}}*') {
            $envLine = Select-String -Path 'D:\Hermes\projects\_core-scripts\deepseek-api\.env.local' -Pattern '^MSC_LITELLM_MASTER_KEY=' -ErrorAction SilentlyContinue | Select-Object -First 1
            if ($envLine) {
                $raw = $raw.Replace('{{MSC_LITELLM_MASTER_KEY}}', $envLine.Line.Split('=', 2)[1].Trim())
            } else {
                Write-Host '[profile-sync] WARN MSC_LITELLM_MASTER_KEY not found in deepseek-api\.env.local - placeholder left in config' -ForegroundColor Yellow
            }
        }
        [System.IO.File]::WriteAllText($dst, $raw, (New-Object System.Text.UTF8Encoding($false)))
        Write-Host "[profile-sync] synced $file -> $ProfileHome" -ForegroundColor Green
    }
}