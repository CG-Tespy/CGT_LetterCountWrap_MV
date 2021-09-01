import { LetterCountOverflowFinder } from './LetterCountOverflowFinder';

let LineWrapper = CGT.WWCore.LineWrapper;

export class LetterCountLineWrapper extends LineWrapper
{
    constructor()
    {
        super();
        this.overflowFinder = new LetterCountOverflowFinder();
    }
}