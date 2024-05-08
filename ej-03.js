class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    toString() {
        console.log(`NOMBRE: ${this.name}\nEDAD: ${this.age}`);
    }

    isAdult() {
        const message = this.age >= 18 ? `${this.name} es mayor de edad.` : `${this.name} no es mayor de edad.`
        console.log(message);
    }
}

let student = new Student('Pablo', 23);
let student2 = new Student('Pablito', 17);
student.toString();
student.isAdult();
console.log();
student2.toString();
student2.isAdult();
