let TextMeasurer = CGT.WWCore.Overflow.TextMeasurer;

export class LetterCountTextMeasurer extends TextMeasurer
{
    protected GetDefaultWidthOf(text: string, textField: Bitmap): number 
    {
        return text.length; 
    }

}