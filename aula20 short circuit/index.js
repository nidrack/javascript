/*

&&
||

==============================
FALSY - Valores que representam falso
false
0
'' "" ``
null
undefined
NaN
** Qualquer outro valor retorna true **

===============================


*/


function falaOi(){
    return 'Oi';
}

const vaiExecutarN = false;
const vaiExecutarS = true;

vaiExecutarN && console.log(falaOi()); //não executa pois a validação é false
vaiExecutarS && console.log(falaOi());