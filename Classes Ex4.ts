class Person {
    name: string;
    age: number;
    private socialSecurityNumber: string;

    constructor(name: string, age: number, ssn: string) {
        this.name = name;
        this.age = age;
        this.socialSecurityNumber = ssn;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }
}

// Usage example 
const person = new Person('Anele Twala', 18, '456-45-6789');
console.log(person.getName()); // Output: Anele Twala 
console.log(person.getAge()); // Output: 18
