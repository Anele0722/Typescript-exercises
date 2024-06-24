class Person { 
    name: string; // Public property to store the person's name
    age: number;  // Public property that stores person's age 
    private socialSecurityNumber: string;

    constructor(name: string, age: number, ssn: string) { // Constructor initializing the properties
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
