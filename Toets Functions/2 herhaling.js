//console.log(herhaalString("hallo.",5));

const herhaalString = (zin, n=2) => {
    let herhaaldeString = "";
    for(let i = 0 ;i<n;i++){
        herhaaldeString += zin;
    }
    return herhaaldeString;
}
