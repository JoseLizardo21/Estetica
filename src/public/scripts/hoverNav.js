const url = window.location.pathname;
const filtro = "filter: invert(50%) sepia(92%) saturate(2338%) hue-rotate(165deg) brightness(90%) contrast(102%);"
if(url.indexOf("/home") == 0 ){
    const btn = document.getElementById("iconNavHome");
    btn.style = filtro
}else if(url.indexOf("/stock") == 0){
    const btn = document.getElementById("iconNavStock");
    btn.style = filtro
}else if(url.indexOf("/workers") == 0){
    const btn = document.getElementById("iconNavWorkers");
    btn.style = filtro
}
