# reto14
## 🚀 Instalación

1. Clona este repositorio o descarga el código fuente.
2. Abre una terminal en la carpeta del proyecto y ejecuta:
   ```sh
   npm install
   ```

## 📌 Uso

### Agregar una tarea
Para agregar una nueva tarea, usa el siguiente comando:
```sh
node app.js add --description="Aqui colocar el nombre de la tarea"
```

### Listar todas las tareas
Para ver la lista de tareas almacenadas:
```sh
node app.js list
```

### Eliminar una tarea
Para eliminar una tarea específica, usa su índice en la lista:
```sh
node app.js remove --index=1
```

### Marcar una tarea como completada
Para marcar una tarea como completada:
```sh
node app.js complete --index=1
```

## 📂 Estructura del Proyecto
- `app.js`: Contiene la lógica de la aplicación.
- `tasks.json`: Archivo donde se almacenan las tareas en formato JSON.

## 🛠 Tecnologías Utilizadas
- Node.js
- yargs
- fs (File System de Node.js)
