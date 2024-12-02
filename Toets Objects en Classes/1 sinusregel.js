// voorbeeld: a = 5, b = 7, c = 8
// alfa = 0.667, beta = 1.047, gamma = 1.428
function sinsuregelZijde(a,alfa,beta){
    let b = a * Math.sin(beta) / Math.sin(alfa); 
    b = Math.round(b * 1000);
    b /= 1000;
    return b;
}
function sinusregelHoek(a,b,alfa){
    let sinusbeta = 0;
    let beta = 0;
    sinusbeta = Math.sin(alfa)*b /a;
    beta = Math.asin(sinusbeta);
    beta = Math.round(beta * 1000);
    beta /=1000;
    return beta;
}
