(function ($) {

    $.fn.richEditor = function (id, text) {

        var editorSec = $("<div/>").addClass("the-editor").attr("role", "text-editor");
        var toolbarSec = `<div class='the-editor-toolbar'>
                            <a href='#' onclick='doTextCommand(event, &#34;bold&#34;)' title='Bold'>
                                <i class='fa fa-bold'></i>
                            </a>
                            <a href='#' onclick='doTextCommand(event,&#34;italic&#34;)' title='Italic'>
                                <i class='fa fa-italic'></i>
                            </a>
                            <a href='#' onclick='doTextCommand(event,&#34;underline&#34;)' title='Underline'>
                                <i class='fa fa-underline'></i>
                            </a>
                            <div class='the-editor-toolbar-separator'>|</div>
                            <a href='#' onclick='doTextCommand(event,&#34;insertUnorderedList&#34;)' title='Insert Unordered List'>
                                <i class='fa fa-list-ul'></i>
                            </a>
                            <a href='#' onclick='doTextCommand(event,&#34;insertOrderedList&#34;)' title='Insert Ordered List'>
                                <i class='fa fa-list-ol'></i>
                            </a>
                            <a href='#' onclick='doTextCommand(event,&#34;indent&#34;)' title='Indent'>
                                <i class='fa fa-indent'></i>
                            </a>
                            <a href='#' onclick='doTextCommand(event,&#34;outdent&#34;)' title='Outdent'>
                                <i class='fa fa-outdent'></i>
                            </a>
                            <div class='the-editor-toolbar-separator'>|</div>
                            <a href='#' onclick='doTextCommand(event,&#34;justifyLeft&#34;)' title='Align Left'>
                                <i class='fa fa-align-left'></i>
                            </a>
                            <a href='#' onclick='doTextCommand(event,&#34;justifyCenter&#34;)' title='Align center'>
                                <i class='fa fa-align-center'></i>
                            </a>
                            <a href='#' onclick='doTextCommand(event,&#34;justifyRight&#34;)' title='Align right'>
                                <i class='fa fa-align-right'></i>
                            </a>
                            <a href='#' onclick='doTextCommand(event,&#34;justifyFull&#34;)' title='Align justify'>
                                <i class='fa fa-align-justify'></i>
                            </a>
                            <div class='the-editor-toolbar-separator'>|</div>
                            <a href='#' onclick='doTextCommand(event,&#34;undo&#34;)' title='Undo'>
                                <i class='fa fa-undo'></i>
                            </a>
                            <a id='removeFormatBtn' href='#' onclick='doTextCommand(event,&#34;removeFormat&#34;)' title='Remove Format'>
                                <i class='fa fa-ban'></i>
                            </a>
                        </div>`;
        var textSec = "<div class='the-editor-content' id='" + id + "' contenteditable>" + text + "</div>";

        editorSec.html(toolbarSec + textSec);

        return this.html(editorSec);
    };
}(jQuery));