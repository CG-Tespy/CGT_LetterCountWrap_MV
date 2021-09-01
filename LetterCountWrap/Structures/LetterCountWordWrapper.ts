let WordWrapper = CGT.WWCore.WordWrapper;

export class LetterCountWrapper extends WordWrapper
{
    get WrapCode(): string { return LetterCountWrapper.WrapCode; }
    static get WrapCode(): string { return this.wrapCode; }
    private static wrapCode: string = "letterCount";

}