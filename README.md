# Bopart


>"***Bopart*** es un proyecto establecido en Barcelona que nace con la intención de crear una comunidad artística en el barrio de *Sant Andreu*.<br>
>Para ello se ha habilitado una sala comunal en la que podrán hacer eventos para que, tanto los artistas puedan conocerse y hacer comunidad a nivel interno, como que también puedan hacer bolos y darse a conocer al resto del barrio.<br>
>Para poder acercar la comunidad de vecinos, la web permitirá tener el conocimiento de las actividades organizadas en el local y se podrá inscribir a los eventos para controlar el aforo limitado del local.<br>
>La página web de ***Bopart*** es el trabajo final del curso Full-stack de 850h de *Factoría F5*."

<br>
​
<p align="center">
  <img src="https://camo.githubusercontent.com/dad9ffe15ef795edb95ba14d3440b279fec8648ae7cf1a344c6463b2704100a1/68747470733a2f2f692e706f7374696d672e63632f774d7878734b6d352f626f706172742d6c6f676f2e706e67" title="logo">
</p>

## dominio del site aqui

## video aquí

# Image Gallery

## · Figma Layout Pages

[Click here to go to the Figma Layout Page](https://www.figma.com/file/6RLESpGPKHLMLKe9Vkd8SW/Bopart_Fixed_?node-id=1%3A3)

### No Auth User
![NoUser](https://user-images.githubusercontent.com/97969369/180829192-f8e299f7-ce33-474d-8c49-6b70dcc675ff.png)
<br>

### Auth User
![User](https://user-images.githubusercontent.com/97969369/180829210-e1fa5c2f-122c-48c2-b067-bc17a75466eb.png)
<br>

### Admin
![Admin](https://user-images.githubusercontent.com/97969369/180829219-1a34f34d-3582-4db1-a454-0b91c5d783e1.png)
<br>

## · PrintScreen

### Profile
![perfil](https://user-images.githubusercontent.com/97969369/180808798-f71e7b2e-d901-449d-b98f-e8d408a4e495.png)<br><br>
### Create Event
![crearevento](https://user-images.githubusercontent.com/97969369/180808826-e293ee34-3c2a-410c-97ff-b7d6f1e9dff0.png)<br><br>
### Login
![login](https://user-images.githubusercontent.com/97969369/180808767-7c034930-5650-412e-b6f5-367e80c8f736.png)<br><br>
### Tests
![test](https://user-images.githubusercontent.com/97969369/180808873-e38fc360-4f2c-47ab-984e-296beeff72e9.png)<br><br>
​
## Documentation
 * <a href="https://laravel.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg" alt="laravel" width="40" height="40"/> </a> [Laravel](https://laravel.com/docs/9.x)
 * <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> [React](https://es.reactjs.org/)
 * <a href="https://www.php.net" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="40" height="40"/> </a> [PHP](https://www.php.net/manual/es/intro-whatis.php)

## To run Locally:

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
Then execute those two commands on the terminal:
```bash
  php artisan migrate:fresh --seed
```
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


## Authors
- [@Jhon Vásquez](https://github.com/jhonv4sq)
- [@Miguel Angel Dominguez de la Rocha](https://github.com/MADROCHA)
- [@Scarlet Rosa](https://github.com/skyrosa)
- [@Albert Martínez](https://github.com/QuercusJS)

## Special Thanks

To all our colleagues, who become true friends.<br>
Jessica Mejia; Daniel Calvo; Ales Navarro; Àlex Vidal; Liviu Badea; Adrian Pelayo; Uri Codina; Sergi Aparicio; Guillermo Labrador; Damaris Teoc; Ales.<br>
To our ~~profesores~~ formadores Laura and José Miguel.<br>
All the members of Factoría F5 for the opportunity and encouragement for our continuous learning.
<br><br>
Tnxs for all 💜

# Contact

- 📫 **comunicacionbopart@gmail.com**
- <a href="https://instagram.com/lebopart" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="lebopart" height="30" width="40" /></a> ![@leBOPART](instagram.com/Lebopart)


