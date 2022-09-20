import { WrapParamsFactory } from '../Structures/WrapParams';
let pluginName = "CGT_LetterCountWrap_MV";

let baseParams = PluginManager.parameters(pluginName);

export let lcbParams = WrapParamsFactory.FromBaseParams(baseParams);