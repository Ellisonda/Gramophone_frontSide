# **Gramophone App**:

Gramophone se trata de una aplicación donde puedes encontrar los festivales de musica más importantes alrededor del globo.


## Levantar ambos servicios:

- npm run dev

<br>

## ¡RECORDATORIO! Para levantar los servidores instalando las dependencias necesarias:

- **npm i** (al iniciar ambos proyectos)

<br >

**Funcionalidades de la aplicación**: Para el correcto funcionamiento tenemos una pagina de login, donde el usuario puede registrarse. Para aplicar una correcta validación se ha usado la libreria **Formik** y **Yup**.

Todo el proyecto del front estará relacionado con una base de datos creada en **MongoDB** (**Atlas**) para el mejor manejo de la misma.

En este proyecto trabajaremos con los diferentes lenguajes/herramientas: **React**, **Redux**, **Hooks de React**, **JavaScript**, **HTML**, **CSS5**,**REACT-Bootstrap**, **NodeJS**,**MongoDB**, **MongoAtlas**, **ThunderClient**.

### **BACKEND** ->

Se ha creado una base de datos de productos, asi como una de usuarios. Ambas se han desplegado en MongoAtlas (el usuario que use la web necesitará dar permiso a su IP). 
Cada una de las colecciones dispone de una serie de atributos que complementan la funcionalidad de la web, para de está manera poder realizar un **CRUD** completo en ambos casos. Estas funcionalidades se establecen a través de sus **controllers** y sus **routers**

Se ha creado una tercera colección con los mails que se obtienene en el componente de **newsletter**, los cuales serán usados para enviar en un feature que se añadirá, en la cual se mantendrá informado de cada nuevo festival, enviando un listado de los mismos en formato pdf.


El puerto donde trabajaremos en el backend será el 3002. [localhost:](http://localhost:3002/products), [localhost:](http://localhost:3002/user) y [localhost:](http://localhost:3002/login).

Las dependencias instaladas en el back seran estas:

- npm init -y
- npm i cors
- npm i express
- npm i mongoose
- npm install -save-dev nodemoon
- npm i dotenv (lectura de archivo env)
- npm i bcrypt (encriptación de password)
- npm i jsonwebtoken (control de token)

Crearemos un archivo .gitignore que contendrá -> /node_modules y el .env (a futuro)

Para arrancar el servicio en el back lo haremos con un:

- npm run start

### **FRONT** ->

Creación de un esquema en excalidraw para una mejor visualización de las funcionalidades del proyecto.
![alt text](image.png)

En cuanto al Front trabajaremos con React principalmente. El proyecto se crea con un primer **npm create vite@latest "..."**. Tras la creacion del back, podemos trabajar en el front para ir dandole "vida" a nuestras funcionalidades.

Crearemos los **componentes** donde se realizaran todas las acciones de nuestra aplicación, ya sea conexión con otros componentes atómicos, reducers y actions. Tambien estuve navegando para averiguar la forma de incluir SVG's en REACT, no encontre otra forma que creando un componente con su css correspondiente y luego importandolo atomicamente donde yo quisiera utilizarlo (en este caso en el ContactPage.jsx para las redes sociales creadas).

También tendremos las **pages** para poder atomizar aun más nuestra aplicación. Nada mas acceder entraremos en la HomePage, desde donde tendremos acceso a todas las funcionalidades de nuestra aplicacion navegando gracias al router.

Conseguiremos esa conexión con el backend gracas a los fetch que realizaremos para obtener los endpoints en nuestra aplicación.

En cuanto a los estilos, encontraremos algunos en linea (intenté que hubiera los menos posibles, pero por falta de tiempo alguno que otro se quedó) y los demas trabajados directamente desde el **index.css** ya que serán estilos globales y no he visto necesario crear un css para cada componente (aunque se que sería lo ideal).

Las dependencias instaladas en el front son:

- npm i
- npm install redux react-redux
- npm install --save react-router-dom
- npm i formik yup



<br >


#### **Javier Marín Almagro**

_Email de contacto_: jamarinweb@gmail.com
message.txt
4 KB
