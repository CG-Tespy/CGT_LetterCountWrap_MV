import { LCTextMeasurer } from "./LCTextMeasurer";

let UnderflowCascader = CGT.WWCore.UnderflowCascader;

export class LCUnderflowCascader extends UnderflowCascader
{
    constructor()
    {
        super();
        this.textMeasurer = new LCTextMeasurer();
    }
}