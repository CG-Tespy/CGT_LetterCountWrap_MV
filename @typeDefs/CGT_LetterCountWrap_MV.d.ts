declare namespace CGT
{
    namespace LeCoWr
    {
        class LCLineWrapper extends CGT.WWCore.LineWrapper {}

        class LCOverflowFinder extends CGT.WWCore.Overflow.OverflowFinder 
        {
            protected RegularWrapSpace(args: WWCore.Overflow.IOverflowFindArgs): number;
            protected FullWrapSpace(args: WWCore.Overflow.IOverflowFindArgs): number;
        }

        class LCTextMeasurer extends CGT.WWCore.Overflow.TextMeasurer
        {
            protected GetDefaultWidthOf(text: string, textField: Bitmap): number;
        }

        class LCUnderflowCascader extends CGT.WWCore.UnderflowCascader {}

        class WrapParams
        {
            get LetterCountMax(): number;
            set LetterCountMax(value);
        }

        let Params: WrapParams;
    }
}