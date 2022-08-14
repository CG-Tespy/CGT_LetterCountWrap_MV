/*:
* @plugindesc Wraps text on a letter-count-per-line basis.
* @author CG-Tespy – https://github.com/CG-Tespy
* @help This is version 3.01.01 of this plugin. Tested with RMMV versions 1.5.1 and 
* 1.6.2. 
* 
* Requires version 3.01.01+ of the CGT WordWrapCore plugin. To have this 
* set as the wrapper right away, set the WordWrapCore's Wrapper param to 
* "letterCount".
*
* Recommended WordWrapCore settings changes for this plugin 
* (tested with the Amaranth font):
* SidePadding: 1
* MugshotWidth: 10
* MugshotPadding: 1
* 
* @param LetterCountMax
* @type number
* @min 1
* @default 70
* @desc The max amount of letters you want to allow per line.
* 
*/


import { LeCoWr } from './LetterCountWrap/_Setup';

let plugin = 
{
    LeCoWr: LeCoWr,
};

Object.assign(CGT, plugin);