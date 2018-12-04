const claimSyntax = /#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/;

export class Claim {
    id: number;
    startX: number;
    startY: number;
    lenY: number;
    lenX: number;
    constructor(claimstring:string){
        var claimData = claimstring.match(claimSyntax);
        this.id = Number(claimData[1]);
        this.startX = Number(claimData[2]);
        this.startY = Number(claimData[3]);
        this.lenX = Number(claimData[4]);
        this.lenY = Number(claimData[5]);
    }
}
