PLANTILLA PARA PFC - UDC

--------------------------------------------------------------------------------
1. Software necesario
--------------------------------------------------------------------------------

Paquetes debian/ubuntu:
	
	texlive 		   
	texlive-base		   
	texlive-base-bin	   
	texlive-bibtex-extra	   
	texlive-common  	   
	texlive-font-utils	   
	texlive-fonts-extra	   
	texlive-fonts-recommended  
	texlive-generic-extra	   
	texlive-generic-recommended
	texlive-humanities	   
	texlive-lang-spanish	   
	texlive-latex-base	   
	texlive-latex-extra	   
	texlive-latex-recommended  
	texlive-math-extra	   
	texlive-science
	
	kile -> editor latex de kde 	   


--------------------------------------------------------------------------------
2. Ficheros
--------------------------------------------------------------------------------

memoria.tex
	Fichero principal. Incluye el resto de ficheros .tex. Si se modifica
	el nombre de alg�n otro fichero .tex ser� necesario modificarlo en 
	este fichero.
	
portada.tex
	Portada 

agradecimientos.tex
	Dedicatoria y agradecimientos
	
especificaci�n.tex
	Especificaci�n est�ndar requerida por las normas

resumen.tex
	Resumen del proyecto
	
cap1.tex
cap2.tex
	Cap�tulos del proyecto. Podemos crear un fichero por cap�tulo
	o agrupar varios cap�tulos en un mismo fichero. Si creamos m�s ficheros
	debemos incluirlos en memoria.tex
	
biblio.bib
	Bibliograf�a en formato bibtex
	
apen1.tex
	Ap�ndices del proyecto. Podemos crear un fichero por ap�ndice o
	agrupar todos los ap�ndices en un s�lo fichero. Si creamos m�s ficheros
	debemos incluirlos en memoria.tex	
	
Makefile
	Contiene reglas para compilar el c�digo fuente. 

pfc-fic.bst
	Estilo de bibliograf�a

--------------------------------------------------------------------------------
3. Compilaci�n
--------------------------------------------------------------------------------

Reglas principales del fichero Makefile:

make all
	Compila c�digo fuente y bibliograf�a y genera los ficheros ps y pdf

make pdf
	Compila c�digo fuente y bibliograf�a y genera el fichero pdf
	
make clean 
	Elimina ficheros auxiliares (mantiene pdf y ps)


--------------------------------------------------------------------------------
4. Notas importantes
--------------------------------------------------------------------------------

a. Codificaci�n de caracteres
	
ISO-8859-15
	Otra codificaci�n de caracteres puede ocasionar problemas en la 
	compilaci�n de acentos. 
	En kile, por ejemplo, es posible seleccionar el tipo de codificaci�n
	de los ficheros.
	
b. Formato de las figuras

EPS/PS
	�nicos formatos aceptados por latex
	
JPG/PNG/PDF
	Formato aceptados por pdflatex. 
	Si se desea utilizar este tipo de formatos, sustituir Makefile por
	Makefile.pdflatex
	
	
IMPORTANTE: se insertan figuras en formato eps/ps � en formato jpg/png/pdf pero
NUNCA se pueden mezclar ambos tipos de figuras en un mismo c�digo latex.
		
