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
* @param LetterCountMax
* @type number
* @min 1
* @default 70
* @desc The max amount of letters you want to allow per line.
* 
*/

/*:es
* @plugindesc Wraps text on a letter-count-per-line basis.
* @author CG-Tespy – https://github.com/CG-Tespy
* @help Este es la versión 3.01.01 de este plugin. Lo probé con versiones RMMV 
* 1.5.1 y 1.6.2. 
* 
* Necesita versión 3.01.01+ del CGT WordWrapCore (Núcleo de Ajustelíneas) 
* plugin. Para poner este como el ajustelíneas activo inmediatamente, pon el
* Ajustelíneas parám del WordWrapCore como "letterCount".
* 
* @param LetterCountMax
* @text MáxCantidadDeLetras
* @type number
* @min 1
* @default 70
* @desc La cantidad máximo de letras que quieres permitir por línea.
* 
*/


import { LeCoWr } from './LetterCountWrap/_Setup';

let plugin = 
{
    LeCoWr: LeCoWr,
};

Object.assign(CGT, plugin);