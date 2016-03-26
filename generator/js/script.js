function generateBanner(){
    var generator_result = document.getElementById("generator-result");
    if (getParameterByName('banner_img')!= null && getParameterByName('height') != null && getParameterByName('width') != null){
        alert (getParameterByName('banner_img')+" "+getParameterByName('height')+" "+ getParameterByName('width'));
    }
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    url = url.toLowerCase(); // This is just to avoid case sensitiveness  
    name = name.replace(/[\[\]]/g, "\\$&").toLowerCase();// This is just to avoid case sensitiveness for query parameter name
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
// query string: ?foo=lorem&bar=&baz
//var foo = getParameterByName('foo'); // "lorem"
//var bar = getParameterByName('bar'); // "" (present with empty value)
//var baz = getParameterByName('baz'); // "" (present with no value)
//var qux = getParameterByName('qux'); // null (absent)