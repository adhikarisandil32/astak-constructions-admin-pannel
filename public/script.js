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

let route = function(e, page){
    e.preventDefault();
    if(page !== 'index'){
        let pathname = window.location.origin+"/public/pages/"+page+".html";
        window.location.href = pathname;
        // history.pushState({},"",pathname);
    }
    else{
        let pathname = window.location.origin+"/public/"+page+".html";
        window.location.href = pathname;
        // history.pushState({},"",pathname);
    }
}