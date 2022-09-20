let TextMeasurer = CGT.WWCore.Overflow.TextMeasurer;

export class LCTextMeasurer extends TextMeasurer
{
    protected GetDefaultWidthOf(text: string, textField: Bitmap): number 
    {
        return text.length; 
    }

}