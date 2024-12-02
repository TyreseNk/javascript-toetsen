//console.log(telKarakter("ik ben karel k.","k",3));

function telKarakter (zin, karakter,limiet){
    let aantalKarakters=0;
    for(let i=0;i<zin.length;i++ ){
        if(zin[i]===karakter){
            aantalKarakters++;
        }
    }
    if (aantalKarakters>=limiet){
        aantalKarakters=limiet;
    }
    return aantalKarakters;
}
