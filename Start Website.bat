@echo off
title Mohammad Saad - Portfolio Website
cd /d "%~dp0"

echo ============================================================
echo    Starting Mohammad Saad's portfolio website...
echo.
echo    A browser tab will open automatically in a few seconds.
echo    KEEP THIS WINDOW OPEN while you view the site.
echo    Close this window when you are done to stop the server.
echo ============================================================
echo.

if not exist "node_modules" (
  echo First-time setup: installing dependencies. This runs once and
  echo may take a couple of minutes. Please wait...
  echo.
  call npm install
  echo.
)

call npm run dev -- --open

echo.
echo The website server has stopped.
pause
