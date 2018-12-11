export class Todo {
    id
    description
    date
    hour
    constructor(_description:string, _date:Date, _hour:string){
        this.description = _description
        this.date = _date
        this.hour = _hour

        let random: number = parseInt(String(Math.random() * (+999 - +100) + +100)); 
        this.id = `${(random).toString()}${(new Date().getTime().toString().slice(0, 15))}`;
    }
}
