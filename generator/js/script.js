var script = "<!-- Javascript Code --> <script> function copyToClipboard(object) {	object.focus();	object.select(); document.execCommand('copy'); alert('Copiado al Portapapeles');        } </script>";
var html = "<!-- HTML Code --> <div style='width:250px; text-align:center'> <div name='banner-container' id='banner-container'>	<a title='Entrar en Mascando Bits' target='_blank' href='http://rdch106.hol.es/'><img width='100%' src='http://rdch106.hol.es/wp-content/uploads/2016/02/Mascando_Bits_banner.jpg'></a>	</div> <br> <div style='width:100%'> <textarea style='width:100%' name='banner' id='banner' rows='6' cols='20' onClick='copyToClipboard(this)' readonly='readonly'> <div name='banner-container' id='banner-container'> <a title='Entrar en Mascando Bits' target='_blank' href='http://rdch106.hol.es/'><img width='100%' src='http://rdch106.hol.es/wp-content/uploads/2016/02/Mascando_Bits_banner.jpg'></a></div></textarea> </div> <br> <input type='button' value='Copiar' style='width:100%' onClick=\"copyToClipboard(document.getElementById('banner'))\"> </div>"

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