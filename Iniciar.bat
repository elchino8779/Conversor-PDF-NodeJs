@echo off
Title ConvertToPDF-NodeJs
color 30
echo =======================================================
echo =                                                     =
echo =          Conversion de archivos a pdf.              =
echo =                                                     =
echo =        Los archivos de la carpeta input se          =
echo =   convertiran a archivos pdf en la carpeta output   =
echo =                                                     =
echo =======================================================
echo.
timeout /t 15
echo.
echo =======================================================
echo =                                                     =
echo =               Iniciando conversion.                 =
echo =           Esto puede tardar un momento...           =
echo =                                                     =
echo =======================================================
echo.
node index.js
echo.
echo Esperando a que finalicen todas las conversiones...
echo.
timeout /t 5
echo.
echo =======================================================
echo =                                                     =
echo =         Archivos procesados exitosamente!           =
echo =                                                     =
echo =======================================================
echo.
echo Para ver los archivos pdf, abra la carpeta output. 
echo.
echo Presione cualquier tecla para salir...
pause > nul
exit