const messages = [
    {
        id: 1,
        author: 'Алви',
        text: 'Приветики',
        type: 'входящие',
        time: '12:29'
    },
    {
        id: 2,
        author: 'Adam',
        text: 'Assalamu Aleikum',
        type: 'отправлено',
        time: '9:00'
    },
    {
        id: 3,
        author: 'Shamil',
        text: 'Соьг названиш придумать ца яло',
        type: 'входящие',
        time: '9:35'
    },
    {
        id: 4,
        author: 'Muhammad',
        text: 'Тоже самое',
        type: 'входящие',
        time: '9:54'
    },
    {
        id: 5,
        author: 'Rizvan',
        text: 'Тахан дз юй?',
        type: 'Входящие',
        time: '10:16'
    },
    {
        id: 6,
        author: 'Adam',
        text: 'Сун хуъш хум дац',
        type: 'отправлено',
        time: '10:59'
    },
    {
        id: 7,
        author: 'Rasul',
        text: 'Сун хаъ зато',
        type: 'ошибка',
        time: '11:28',
    },
    {
        id: 8,
        author: 'Ibrahim',
        text: 'Дени груз ма яьтта',
        type: 'входящие',
        time: '12:00'
    },
    {
        id: 9,
        author: 'Adam',
        text: 'Дени, бокъал груз ма яьтта',
        type: 'отправлено',
        time: '12:50'
    },
    {
        id: 10,
        author: 'Sayfullah',
        text: 'Давай',
        type: 'входящие',
        time: '13:30'
    }
]
const names = {
    name: 'Legenda',
    firstname: 'Artem',
    lastname: 'Lobov',
}

const getName = (names) => {
    return names.name
}
console.log(getName(names))


const getNames = (names) => {
    const arr = []
    arr.push(names.firstname, names.lastname)
    return arr
}
console.log(getNames(names))

const conc = {
    obj: {
        firstname: 'Adam',
    },
    lastname: 'Baysarov'
}
const concatNames = (obj, lastname) => {
    return `${conc.obj.firstname} ${conc.lastname}`
}
console.log(concatNames())


const object = {
    fathername: undefined,
    lastname: 'Baysarov',
    firstname: 'Adam'
}

const correctName = (object) => {
    if(object.fathername === undefined) {
        return object.firstname
    } else {
        return `${object.fathername} ${object.lastname} ${object.fathername}`
    }
}
console.log(concatNames())