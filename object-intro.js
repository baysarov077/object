const start = {
    name: 'Adam',
    height: 190
};

const person = {
    firstname: 'Adam',
    lastname: 'Baysarov',
    city: 'Grozny',
    age: 19,
    height: 190,
    heightMeters: 1.9,
    born: 2002,
    haveCar: false,
    carName: undefined,
    haveSkills: null,
    level: 10/10,
    mobilePhone: {
        model: 'iphone 8',
        price: 15000,
        operator: 'megafon',
        manufacturer: 'Apple'
    }

}

const galaxy = {
    name: 'milky way',
    age: undefined,
    size: '100000 light years',
    quantityOfStars: '200 billion',
    weight: 6*(10**42),
    haveACore: true,
    alience: undefined,
    haveAPlanets: true,
    earth: {
        shape: 'A circle',
        haveAtmosphere: true
    },
    intocodeIsInMilkyWay: true

}

delete galaxy.age
console.log(galaxy)


const student = {
    name: 'Rasul',
    lastname: 'Nazirov',
    region: 'Chechen Republic'
}

student.age = 23
console.log(student)