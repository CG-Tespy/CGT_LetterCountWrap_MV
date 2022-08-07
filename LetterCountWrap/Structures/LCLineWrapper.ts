import { LCOverflowFinder } from './LCOverflowFinder';

let LineWrapper = CGT.WWCore.LineWrapper;

export class LCLineWrapper extends LineWrapper
{
    constructor()
    {
        super();
        this.overflowFinder = new LCOverflowFinder();
    }
}