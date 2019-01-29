const fs = require('fs');
const User = require('./user.js');

module.exports = class File {

    constructor(filename = "bd.json") {
        this.filename = filename;
        this.messages = [];
        this.obj = [];
    }

    writeFile(messages) {
        fs.writeFile(this.filename, messages, (error) => {
            if (error) throw new Error("Ошибка записи в файл!")
        });
    }

    readFile() {
        var str = fs.readFileSync(this.filename, 'utf8', (error) => {
            if (error) throw new Error("Ошибка чтения из файла!")
        });

        return JSON.parse(str);
    }

    readFileMessages() {
        let resultArray = [];
        try {
            resultArray = this.readFile();
        } catch (error) {
            console.log(error.message);
        }
        return resultArray;
    }

    readFileUsers() {
        let resultArray = [];
        try {
            let list = this.readFile();
            list.forEach(e => {
                resultArray.push(new User(e.name, e.date, e.friends));
            });
        } catch (error) {
            console.log(error.message);
        }
        return resultArray;
    }
}