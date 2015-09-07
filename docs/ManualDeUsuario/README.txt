MEMORIA DO TFG ANCOWEB - UDC

--------------------------------------------------------------------------------
1. Software preciso
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
	aspell-gl-minimos
	
	kile -> editor latex de kde 	   


--------------------------------------------------------------------------------
2. Ficheiros
--------------------------------------------------------------------------------

memoria.tex
	Ficheiro principal. Inclue o resto de ficheiros .tex. Se se modifica
	o nome dalg�n outro fichero .tex ser� preciso modificalo neste fichero.
	
portada.tex
	Portada 

agradecimientos.tex
	Dedicatoria e agradecementos
	
resumen.tex
	Resumen del proyecto
	
cap1_X.tex
cap2_X.tex
	Cap�tulos del proyecto. Podemos crear un fichero por cap�tulo
	o agrupar varios cap�tulos en un mismo fichero. Si creamos m�s ficheros
	debemos incluirlos en memoria.tex
	
biblio.bib
	Bibliograf�a en formato bibtex
	
apen1.tex
	Ap�ndices do proxecto. Podese crear un fichero por ap�ndice ou
	agrupar todo-los ap�ndices nun s� fichero. Se creamos mais ficheiros
	debemos incluilos en memoria.tex	
	
Makefile
	Cont�n reglas para compilar o c�digo fonte. 

pfc-fic.bst
	Estilo da bibliograf�a

--------------------------------------------------------------------------------
3. Compilaci�n
--------------------------------------------------------------------------------

Regras principais do fichero Makefile:

make all
	Compila c�digo fonte e bibliograf�a e xera os ficheiros ps e pdf

make pdf
	Compila c�digo fonte e bibliograf�a e xera o fichero pdf
	
make clean 
	Elimina ficheros auxiliares (mantiene pdf e ps)


--------------------------------------------------------------------------------
4. Notas importantes
--------------------------------------------------------------------------------

a. Codificaci�n de caracteres
	
ISO-8859-15
	Outra codificaci�n de caracteres pode ocasionar problemas na
	compilaci�n de acentos. 
	En kile, por exemplo, � posibel seleccionar el tipo de codificaci�n
	dos ficheros.
	
b. Formato de las figuras

EPS/PS
	�nicos formatos aceptados por latex
	
JPG/PNG/PDF
	Formato aceptados por pdflatex. 
	Se se desexa empregar este tipo de formatos, sustituir Makefile por
	Makefile.pdflatex
	
	
IMPORTANTE: Insertanse figuras en formato eps/ps ou en formato jpg/png/pdf pero
NUNCA se pueden mesturar ambos tipos de figuras no mesmo c�digo latex.
		
