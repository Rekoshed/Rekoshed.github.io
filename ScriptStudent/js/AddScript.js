alert ("AddScript");
function addScript (src)(
var script = document.createElement('script');
script.src = src;
script.async = false;
document.head.appendChild(script);
)