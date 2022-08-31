import { LCOverflowFinder } from './LCOverflowFinder';
import { LCUnderflowCascader } from './LCUnderflowCascader';

let LineWrapper = CGT.WWCore.LineWrapper;

export class LCLineWrapper extends LineWrapper
{
    constructor()
    {
        super();
        this.overflowFinder = new LCOverflowFinder();
        this.underflowCascader = new LCUnderflowCascader();
    }
}