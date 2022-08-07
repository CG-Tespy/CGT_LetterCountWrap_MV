let WordWrapper = CGT.WWCore.WordWrapper;

export class LCWrapper extends WordWrapper
{
    get WrapCode(): string { return LCWrapper.WrapCode; }
    static get WrapCode(): string { return this.wrapCode; }
    private static wrapCode: string = "letterCount";

}