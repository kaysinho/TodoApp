export class Todo {
    id:string
    description:string
    date:Date
    hour:string
    state:string
    constructor(_description:string, _date:Date, _hour:string){
        this.description = _description
        this.date = _date
        this.hour = _hour
        this.state = "ACTIVA"
        let random: number = parseInt(String(Math.random() * (+999 - +100) + +100)); 
        this.id = `${(random).toString()}${(new Date().getTime().toString().slice(0, 15))}`;
    }
}
