let onClickBars = function(){
    let overallSidenavClassLists = document.getElementById("overall-sidenav").classList;
    overallSidenavClassLists.remove("hidden", "side-popup-hide");
    overallSidenavClassLists.add("side-popup-show");
}

let onClickX = function(){
    let overallSidenavClassLists = document.getElementById("overall-sidenav").classList;
    overallSidenavClassLists.remove("side-popup-show");
    overallSidenavClassLists.add("side-popup-hide");
}