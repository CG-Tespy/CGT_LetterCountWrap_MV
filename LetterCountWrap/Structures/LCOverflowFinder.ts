import { LCTextMeasurer } from './LCTextMeasurer';

let OverflowFinder = CGT.WWCore.Overflow.OverflowFinder;

export class LCOverflowFinder extends OverflowFinder
{
    protected RegularWrapSpace(args: IOverflowFindArgs): number
    {
        let fullSpace = this.FullWrapSpace(args);
        let spacing = args.wordWrapArgs.spacing;
        let allSidePadding = spacing.SidePadding * 2;
        return fullSpace - allSidePadding;
    }

    protected FullWrapSpace(args: IOverflowFindArgs): number
    {
        return this.LCBParams.LetterCountMax;
    }

    protected get CoreParams(): CoreWrapParams { return CGT.WWCore.Params; }
    protected get LCBParams(): LCBWrapParams { return CGT.LeCoWr.Params; }

    constructor()
    {
        super();
        this.textMeasurer = new LCTextMeasurer();
    }
}

type IOverflowFindArgs = CGT.WWCore.Overflow.IOverflowFindArgs;
type CoreWrapParams = CGT.WWCore.CoreWrapParams;
type LCBWrapParams = CGT.LeCoWr.WrapParams;