const fs = require('fs');
const yargs = require('yargs');
const filePath = 'tasks.json';

const loadTasks = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        return JSON.parse(dataBuffer.toString());
    } catch (error) {
        return [];
    }
};

const saveTasks = (tasks) => {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
};

yargs.command({
    command: 'add',
    describe: 'Agregar una nueva tarea',
    builder: {
        description: {
            describe: 'Descripción de la tarea',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        const tasks = loadTasks();
        tasks.push({ description: argv.description, completed: false });
        saveTasks(tasks);
        console.log('Tarea agregada:', argv.description);
    }
});

yargs.command({
    command: 'list',
    describe: 'Listar todas las tareas',
    handler() {
        const tasks = loadTasks();
        console.log('Lista de tareas:');
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.description} - ${task.completed ? 'Completada' : 'Pendiente'}`);
        });
    }
});

yargs.command({
    command: 'remove',
    describe: 'Eliminar una tarea',
    builder: {
        index: {
            describe: 'Índice de la tarea a eliminar',
            demandOption: true,
            type: 'number'
        }
    },
    handler(argv) {
        let tasks = loadTasks();
        if (argv.index > 0 && argv.index <= tasks.length) {
            console.log('Tarea eliminada:', tasks[argv.index - 1].description);
            tasks = tasks.filter((_, i) => i !== argv.index - 1);
            saveTasks(tasks);
        } else {
            console.log('Índice inválido');
        }
    }
});

yargs.command({
    command: 'complete',
    describe: 'Marcar una tarea como completada',
    builder: {
        index: {
            describe: 'Índice de la tarea a completar',
            demandOption: true,
            type: 'number'
        }
    },
    handler(argv) {
        let tasks = loadTasks();
        if (argv.index > 0 && argv.index <= tasks.length) {
            tasks[argv.index - 1].completed = true;
            saveTasks(tasks);
            console.log('Tarea completada:', tasks[argv.index - 1].description);
        } else {
            console.log('Índice inválido');
        }
    }
});

yargs.parse();
