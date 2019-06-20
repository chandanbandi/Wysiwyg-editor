//This function is for executing rich text commands on clicking the links of toolbar

function doTextCommand(e, aName, aArg) {
        e.preventDefault();
        document.execCommand(aName, false, aArg);
}

//This function is for handling the unnecessary tag information and format from the rich text editor
function onPaste() {
    $.each($(this).find("*"), function (idx, val) {
        var $item = $(val);
        if ($item.length > 0) {
            var saveStyle = {
                'font-weight': $item.css('font-weight'),
                'text-align': $item.css('text-align')
            };
            $item.removeAttr('border style').removeClass().css(saveStyle);
        }
    });

    // remove unnecesary tags (if paste from word)
    $(this).children('html').remove();
    $(this).children('body').remove();
    $(this).children('meta').remove();
    $(this).children('link').remove();
}

var defaultdesc =`
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`;
    
$('#RichTextSec').richEditor("RichText", defaultdesc);
document.getElementById("RichText").addEventListener("input", onPaste, false);