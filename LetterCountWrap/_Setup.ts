import { lcbParams } from './PluginParamSetup/_PluginParamSetup';
import { LCLineWrapper } from './Structures/LCLineWrapper';
import { LCWrapper } from './Structures/LCWrapper';

export let LeCoWr = 
{
    Params: lcbParams,
};

RegisterWrapper();

function RegisterWrapper()
{
    let lineWrapper = new LCLineWrapper();
    let lcbWrapper = new LCWrapper(lineWrapper);

    CGT.WWCore.RegisterWrapper(lcbWrapper);
}

CGT.WWCore.UpdateActiveWrapper(); // For when this plugin's supposed to handle wrapping