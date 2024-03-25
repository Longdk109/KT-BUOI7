'use strict';


/**
 * PRELOAD
 * 
 * Quá trình tải sẽ kết thúc sau khi tài liệu được tải
 */ 

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});
