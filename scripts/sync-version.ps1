# sync-version.ps1 — delegate to Python UTF-8 safe implementation
param([switch]$Quiet)
$ErrorActionPreference = 'Stop'
$py = if (Get-Command python -ErrorAction SilentlyContinue) { 'python' } else { 'py' }
& $py (Join-Path $PSScriptRoot 'sync-version.py') @args
exit $LASTEXITCODE
