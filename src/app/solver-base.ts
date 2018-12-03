import { Input, OnInit } from "@angular/core";

export abstract class SolverBase implements OnInit {
    @Input() input:string;
    solution:number|string;
    showInput = false;
    get shortInput() { return this.input.substr(0,10)}

    constructor() { }
    get name(){
         const name = this.constructor.name;
         const length = name.length;
         const lengthToRemove = "Component".length;
         return name.substr(0,length-lengthToRemove);
    }
    ngOnInit() {
        const inputArray = this.splitStringByLine(this.input);
      this.solution = this.solve(inputArray);
    }

    protected abstract solve(input:string[]): number|string;

    protected toNumbers(strings:string[]){
        return strings.map((str) => Number(str));
    }

    protected splitStringByLine(toSplit:string):string[]{
        return toSplit.replace("\r", "").split("\n");
    }

    toggleInput = () => {
        this.showInput = !this.showInput;
    }
}
