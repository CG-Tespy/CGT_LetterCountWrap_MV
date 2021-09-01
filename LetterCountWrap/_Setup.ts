import { lcbParams } from './PluginParamSetup/_PluginParamSetup';
import { LetterCountLineWrapper } from './Structures/LetterCountLineWrapper';
import { LetterCountWrapper } from './Structures/LetterCountWordWrapper';

export let LeCoWr = 
{
    Params: lcbParams,
};

RegisterWrapper();

function RegisterWrapper()
{
    let lineWrapper = new LetterCountLineWrapper();
    let lcbWrapper = new LetterCountWrapper(lineWrapper);

    CGT.WWCore.RegisterWrapper(lcbWrapper);
}

CGT.WWCore.UpdateActiveWrapper(); // For when this plugin's supposed to handle wrapping