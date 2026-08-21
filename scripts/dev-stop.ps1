#Requires -Version 5.1
<#
.SYNOPSIS
  Stop dev server on :3000 only (no cache wipe, no restart).
.USAGE
  npm run web:dev:stop
#>
$ErrorActionPreference = 'Stop'
$Root = Split-Path -Parent $PSScriptRoot
Set-Location $Root

Write-Host '[dev:stop] Free port 3000 only' -ForegroundColor Cyan

function Stop-PortListener {
    param([int]$Port = 3000)
    $conns = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue
    if (-not $conns) {
        Write-Host ('[dev:stop] Port ' + $Port + ' is already free.')
        return $false
    }
    $pids = $conns | Select-Object -ExpandProperty OwningProcess -Unique
    foreach ($procId in $pids) {
        try {
            $proc = Get-Process -Id $procId -ErrorAction SilentlyContinue
            if ($proc) {
                Write-Host ('[dev:stop] Stopping PID ' + $procId + ' (' + $proc.ProcessName + ') on port ' + $Port)
                Stop-Process -Id $procId -Force -ErrorAction Stop
            }
        } catch {
            Write-Warning ('[dev:stop] Could not stop PID ' + $procId + ' : ' + $_)
        }
    }
    Start-Sleep -Seconds 1
    return $true
}

$stopped = Stop-PortListener -Port 3000
if ($stopped) {
    Write-Host '[dev:stop] Dev server stopped.' -ForegroundColor Green
}
