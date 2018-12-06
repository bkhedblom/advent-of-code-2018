export class RegexpSolver {
    private readonly alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    private regex = "(" + 
                this.alphabet.map(
                  (letter) => `(${letter}${letter.toUpperCase()}|${letter.toUpperCase()}${letter})`
                )
                .join("|")
              + ")";
    private readonly reducable = new RegExp(this.regex, "g");

    solve(input:string): number {

        let oldLen:number;
        do {
          oldLen = input.length;
          input = input.replace(this.reducable, "");
        } while (oldLen != input.length);
    
        return input.length;
      }
    
    findShortestSolution(input:string):number{
        let shortest = input.length;
        this.alphabet.forEach(letter => {
            let len = this.solve(input.replace(new RegExp(letter, "gi"), ""))
            if(len < shortest) shortest = len;
        });
        return shortest;
    }
}
