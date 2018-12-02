import { Input, OnInit } from "@angular/core";

export abstract class SolverBase implements OnInit {
    @Input() input:string;
    solution:number;
    constructor() { }
  
    ngOnInit() {
      this.solution = this.solve(this.input);
    }

    protected abstract solve(input:string): number;
    
    protected splitToNumberArray(toSplit:string, delimiter = "\n"){
        return toSplit.split(delimiter).map((value) => Number(value))
    }
}
