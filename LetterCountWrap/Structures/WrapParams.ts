export class WrapParams
{
    get LetterCountMax() { return this.letterCountMax; }
    private letterCountMax: number = 70;
    set LetterCountMax(value) { this.letterCountMax = value; }
}

export class WrapParamsFactory
{
    static FromBaseParams(baseParams: object): WrapParams
    {
        let wrapParams = new WrapParams();
        this.SetNumbersFromParams(baseParams, wrapParams);
        
        return wrapParams;
    }

    protected static SetNumbersFromParams(baseParams: object, wrapParams: WrapParams)
    {
        wrapParams.LetterCountMax = Number(baseParams[names.LetterCountMax]);
    }
}

// To avoid magic strings when fetching from Plugin Params
export let names = 
{
    LetterCountMax: "LetterCountMax",
};