This is a fork of Featherlight.

The original version can be found at https://github.com/noelboss/featherlight/.

Please note the syntax is different.

What used to be:

    <a href="#" data-featherlight="myimage.jpg">Image</a>

...is instead:

    <a href="myimage.jpg" data-toggle="lightbox">Image</a>

Examples:

    <!DOCTYPE html>
    <html>
    <head>
    <link rel="stylesheet" href="featherlight.min.css" />
    </head>
    <body>

    <a href="#mybox" data-toggle="lightbox">Div Content</a>

    <a href="#mybox-persistent" data-toggle="lightbox" data-persist=true>Div Content (Persist)</a>

    <a href="#" data-toggle="lightbox" data-target="This is a bunch of text" data-type="text">Text Content</a>

    <a href="../assets/images/two_birds.jpg" data-toggle="lightbox">Image</a>

    <a href="https://player.vimeo.com/video/33110953" data-toggle="lightbox" data-type="iframe" data-width="720" data-height="420">Video (iframe)</a>

    <a href="demo_ajax_content.html" data-toggle="lightbox" data-type="ajax">Ajax (Full Page)</a>

    <a href="demo_ajax_content.html .ajax-content-1" data-toggle="lightbox" data-type="ajax">Ajax (Element 1)</a> | <a href="demo_ajax_content.html .ajax-content-2" data-toggle="lightbox" data-type="ajax">Element 2</a>

    <script src="../assets/javascripts/jquery-3.2.1.min.js"></script>
    <script src="featherlight.min.js"></script>

    </body>
    </html>
