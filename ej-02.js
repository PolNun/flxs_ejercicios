class Worker {
    constructor(salaries) {
        this.salaries = salaries;
    }

    printSalaries() {
        this.salaries.forEach((salary, index) => {
            console.log(`Sueldo del operario ${index + 1}: ARS ${salary}`);
        });
    }
}

let worker = new Worker([400000, 500000, 600000, 600000, 1000000]);
worker.printSalaries();
