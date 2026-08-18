@echo off
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed. Please install Node.js first.
  pause
  exit /b 1
)
if not exist node_modules (
  echo Installing dependencies...
  call npm install
)
echo Starting portfolio at http://localhost:3000
call npm run dev
pause
