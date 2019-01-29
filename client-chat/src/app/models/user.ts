export class User {

    constructor(
        public name: string = '',
        public timeConnect: Date = new Date,
        public friends: User [] = [],
        public online: boolean = false
        ) { }
}
