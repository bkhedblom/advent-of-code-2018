import { Input, OnInit } from "@angular/core";

export abstract class SolverBase implements OnInit {
    @Input() input:string;
    solution:number;
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
      this.solution = this.solve(this.input);
    }

    protected abstract solve(input:string): number;

    protected splitToNumberArray(toSplit:string, delimiter = "\n"){
        return toSplit.split(delimiter).map((value) => Number(value))
    }

    toggleInput = () => {
        this.showInput = !this.showInput;
    }
}
