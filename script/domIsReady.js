
/*
 * domIsReady cette fonction permet de savoir si le dom est prêt à être utilisé et d'executer une fonction quand celui-ci est prêt
 */
function domIsReady(fn) {
    // check si le dom est dispo à l'utilisation
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // setTimeout tricks
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}