@echo off
cd /d "%~dp0"
echo Starting KHL SensorHub...
echo Keep this window open. Press Ctrl+C to stop.
echo.
python server.py
pause
