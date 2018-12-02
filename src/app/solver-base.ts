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
      this.solution = this.solve(this.input);
    }

    protected abstract solve(input:string): number|string;

    protected splitToNumberArray(toSplit:string){
        return this.splitStringByLine(toSplit).map((value) => Number(value))
    }

    protected splitStringByLine(toSplit:string):string[]{
        return toSplit.replace("\r", "").split("\n");
    }

    toggleInput = () => {
        this.showInput = !this.showInput;
    }
}
