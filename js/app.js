$(document).ready(function () {
  const bars = document.querySelectorAll(".progress__bar");
  bars.forEach(function (bar) {
    let percentage = bar.dataset.percent;
    let tooltip = bar.children[0];
    tooltip.innterText = percentage + "%";
    bar.style.width = percentage + "%";
    console.log(percentage);
  });
});
