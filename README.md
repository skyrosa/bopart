# Bopart
​
>"***Bopart*** es un proyecto con sed en Barcelona que nace con la intención de crear una comunidad artística en el barrio de *Sant Andreu*. Para ello se ha habilitado una sala comunal en la que podrán hacer eventos para que, tanto los artistas puedan conocerse y hacer comunidad a nivel interno, como que los artistas puedan hacer bolos y darse a conocer al resto del barrio. 
Para poder acercar la comunidad de vecinos, la web permitirá tener el conocimiento de las actividades organizadas en el local y se podrá inscribir a los eventos para controlar el aforo limitado del local.
<br>
>La página web de ***Bopart*** es el trabajo final del curso Full-stack de 850h de *Factoría F5*."
<br>
​
​
<p align="center">
  <img src="https://camo.githubusercontent.com/dad9ffe15ef795edb95ba14d3440b279fec8648ae7cf1a344c6463b2704100a1/68747470733a2f2f692e706f7374696d672e63632f774d7878734b6d352f626f706172742d6c6f676f2e706e67" title="logo">
</p>
<br>

## dominio del site aqui
​
​
## Authors
- [@Jhon Vásquez](https://github.com/jhonv4sq)
- [@Miguel Angel Dominguez de la Rocha](https://github.com/MADROCHA)
- [@Scarlet Rosa](https://github.com/skyrosa)
- [@Albert Martínez](https://github.com/QuercusJS)
​
​
 ## Requisits
### Documentation
 * <a href="https://laravel.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg" alt="laravel" width="40" height="40"/> </a> [Laravel](https://laravel.com/docs/9.x)
 * <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> [React](https://es.reactjs.org/)
 * <a href="https://www.php.net" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="40" height="40"/> </a> [PHP](https://www.php.net/manual/es/intro-whatis.php)
​
### To run Locally:

Clone the repository:
​<br>
![Logo](https://i.postimg.cc/fbgsHHJZ/sdga.png)
<br>
```bash
  git clone https://github.com/jhonv4sq/bopart.git
```
​
Enter in the project directory:
​
```bash
  cd bopart
```
​
Install dependencies with:
​
```bash
  npm install
```
​
Start the server using:
​
```bash
  php artisan serve
```
​
Once you have done it, run this code on your terminal to install Laravel dependences:
​
```bash
 composer require laravel/installer
```
```bash
  @php artisan vendor:publish --tag=laravel-assets --ansi --force
```
![Logo](https://i.postimg.cc/SsSH6cy8/clone.png)
<br>

Copy all the .env.example file, then create a new .env file and paste everything on it
<br>
![Logo](https://i.postimg.cc/XJ362pbK/asdgfwtqwe.png)
​
Open *XAMPP* on your computer and start Apache and MySQL, then click on MySQL Admin to open your DataBase
<br>
![Logo](https://i.postimg.cc/RFFxr2Wq/sgsadggweqt.png)
<br>
​
Click to create a New Archive and give the name you want to the Database
<br>
![Logo](https://i.postimg.cc/jSX9hKXm/base-ede-asdfsd.png)
<br>
​
Put the same name of the database that you have created on the .env file, in DB_DATABASE
​<br>
![Logo](https://i.postimg.cc/fR7bM3vF/Captura.png)
<br>
(if DB_CONNECTION is = laravel, change it for =mysql)
<br>
<br>
Then execute this too commands on the terminal:
```bash
  php artisan migrate:fresh --seed
```
​And the server command:
​
```bash
  php artisan serve
```
![Logo](https://i.postimg.cc/NM2FqdC8/SEMIOSDGISAD.png)
​<br>
Hold the CTRL button and click in the IP that the command gave to you and it will open in yours default browser!


## Flux Diagrams

* Admin
<img src="https://user-images.githubusercontent.com/97969369/180795566-cbaeb124-7e2c-4550-b5da-c0e833bfd4d7.png">
<br>

* User from no Auth to Auth
<img src="https://user-images.githubusercontent.com/97969369/180795629-1d5303c1-d3d7-46c9-af57-3364bb635622.png">

## Special Thanks

To all our colleagues, who become true friends.
Jessica Mejia; Daniel Calvo; Ales Navarro; Àlex Vidal; Liviu Badea; Adrian Pelayo; Uri Codina; Sergi Aparicio; Guillermo Labrador; Damaris Teoc; Ales.
To our ~~profesores~~ formadores Laura and José Miguel.
All the members of Factoría F5 for the opportunity and encouragement for our continuous learning.

Tnxs for all <3





