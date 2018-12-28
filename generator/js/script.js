var script = "<!-- Javascript Code --> <script> function copyToClipboard(object) {	object.focus();	object.select(); document.execCommand('copy'); alert('Copiado al Portapapeles');	} </script>";
var html = "<!-- HTML Code --> <div style='width:250px; text-align:center'> <div name='banner-container-image' id='banner-container-image'>	<a title='Entrar en Mascando Bits' target='_blank' href='http://rdch106.hol.es/'><img width='100%' src='http://rdch106.hol.es/wp-content/uploads/2016/02/Mascando_Bits_banner.jpg' alt='Mascando Bits banner preview'></a>	</div> <br> <div style='width:100%'> <textarea style='width:100%' name='banner' id='banner' rows='6' cols='20' onclick='copyToClipboard(this)' readonly='readonly'> <div name='banner-container' id='banner-container'> <a title='Entrar en Mascando Bits' target='_blank' href='http://rdch106.hol.es/'><img width='100%' src='http://rdch106.hol.es/wp-content/uploads/2016/02/Mascando_Bits_banner.jpg' alt='Mascando Bits'></a></div></textarea> </div> <br> <input type='button' value='Copiar' style='width:100%' onclick=\"copyToClipboard(document.getElementById('banner'))\"> </div>"

var script_code = "&lt;!-- Javascript Code --&gt; &lt;script&gt; function copyToClipboard(object) {	object.focus();	object.select(); document.execCommand('copy'); alert('Copiado al Portapapeles');	} &lt;/script&gt;";
var html_code = "&lt;!-- HTML Code --&gt; &lt;div style='width:250px; text-align:center'&gt; &lt;div name='banner-container-image' id='banner-container-image'&gt;	&lt;a title='Entrar en Mascando Bits' target='_blank' href='http://rdch106.hol.es/'&gt;&lt;img width='100%' src='http://rdch106.hol.es/wp-content/uploads/2016/02/Mascando_Bits_banner.jpg' alt='Mascando Bits banner preview'&gt;&lt;/a&gt;	&lt;/div&gt; &lt;br&gt; &lt;div style='width:100%'&gt; &lt;textarea style='width:100%' name='banner' id='banner' rows='6' cols='20' onclick='copyToClipboard(this)' readonly='readonly'&gt; &lt;div name='banner-container' id='banner-container'&gt; &lt;a title='Entrar en Mascando Bits' target='_blank' href='http://rdch106.hol.es/'&gt;&lt;img width='100%' src='http://rdch106.hol.es/wp-content/uploads/2016/02/Mascando_Bits_banner.jpg'alt='Mascando Bits'&gt;&lt;/a&gt;&lt;/div&gt;&lt;/textarea&gt; &lt;/div&gt; &lt;br&gt; &lt;input type='button' value='Copiar' style='width:100%' onclick=\"copyToClipboard(document.getElementById('banner'))\"&gt; &lt;/div&gt;"

function generateBanner(){
    var generator_result = document.getElementById("generator-result");
    if (getParameterByName('banner_img')!= null && getParameterByName('width') != null){
        ////////////////////
        //Set input values//
        ////////////////////
        
        // Note: replace method only replace first occurrence (useful to control number of replacements)
        
        // RENDERED HTML
        html = html.replace("Mascando Bits", getParameterByName('name'));
        html = html.replace("Mascando Bits", getParameterByName('name'));
        html = html.replace("Mascando Bits", getParameterByName('name'));
        html = html.replace("Mascando Bits", getParameterByName('name'));
        
        html = html.replace("http://rdch106.hol.es/wp-content/uploads/2016/02/Mascando_Bits_banner.jpg", getParameterByName('banner_img'));
        html = html.replace("http://rdch106.hol.es/wp-content/uploads/2016/02/Mascando_Bits_banner.jpg", getParameterByName('banner_img'));
        html = html.replace("http://rdch106.hol.es/", getParameterByName('website'));
        html = html.replace("http://rdch106.hol.es/", getParameterByName('website'));
        html = html.replace("250px", (getParameterByName('width')+"px"));
        
        // SNIPPET HTML
        html_code = html_code.replace("Mascando Bits", getParameterByName('name'));
        html_code = html_code.replace("Mascando Bits", getParameterByName('name'));
        html_code = html_code.replace("Mascando Bits", getParameterByName('name'));
        html_code = html_code.replace("Mascando Bits", getParameterByName('name'));
        
        html_code = html_code.replace("http://rdch106.hol.es/wp-content/uploads/2016/02/Mascando_Bits_banner.jpg", getParameterByName('banner_img'));
        html_code = html_code.replace("http://rdch106.hol.es/wp-content/uploads/2016/02/Mascando_Bits_banner.jpg", getParameterByName('banner_img'));
        html_code = html_code.replace("http://rdch106.hol.es/", getParameterByName('website'));
        html_code = html_code.replace("http://rdch106.hol.es/", getParameterByName('website'));
        html_code = html_code.replace("250px", (getParameterByName('width')+"px"));
        //visualize
        generator_result.innerHTML = "<h4>Preview</h4>"
        var snippet = script + html;
        generator_result.innerHTML = generator_result.innerHTML + "<div id='preview'><center>"+ snippet + "</center></div><hr>";
        generator_result.innerHTML = generator_result.innerHTML + "<h3>Copy this code in your Web:</h3>";
        var snippet_code = script_code + html_code;
        generator_result.innerHTML = generator_result.innerHTML + "<textarea style='width:100%' name='code' id='banner' rows='6' cols='20' onClick='this.select();' readonly='readonly'>" + snippet_code + "</textarea>"
        
        //alert (getParameterByName('banner_img')+" "+ getParameterByName('width'));
    }
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    //url = url.toLowerCase(); // This is just to avoid case sensitiveness  
    //name = name.replace(/[\[\]]/g, "\\$&").toLowerCase();// This is just to avoid case sensitiveness for query parameter name
    name = name.replace(/[\[\]]/g, "\\$&");
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
