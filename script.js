"use strict";
function countdown(n) {
  let dis1 = document.getElementById("dis");
  dis1.innerHTML = n;
}
setTimeout(() => {
  countdown(10);
  setTimeout(() => {
    countdown(9);
    setTimeout(() => {
      countdown(8);
      setTimeout(() => {
        countdown(7);
        setTimeout(() => {
          countdown(6);
          setTimeout(() => {
            countdown(5);
            setTimeout(() => {
              countdown(4);
              setTimeout(() => {
                countdown(3);
                setTimeout(() => {
                  countdown(2);
                  setTimeout(() => {
                    countdown(1);
                    setTimeout(() => {
                      countdown("Happy Independence Day !");
                    }, 2000);
                  }, 2000);
                }, 2000);
              }, 2000);
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);
