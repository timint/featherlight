This is a fork of Featherlight.

No support provided.

The original make can be found at https://github.com/noelboss/featherlight/.

For a demonstration see https://timint.github.io/featherlight/release/demo.html.

Please note the syntax is different.

What used to be:

    <a href="#" data-featherlight="myimage.jpg">Image</a>

...is instead:

    <a href="myimage.jpg" data-toggle="featherlight">Image</a>

Examples:

    <!DOCTYPE html>
    <html>
    <head>
    <link rel="stylesheet" href="featherlight.min.css" />
    </head>
    <body>

    <a href="#mybox" data-toggle="featherlight">Div Content</a>

    <a href="#mybox-persistent" data-toggle="featherlight" data-persist=true>Div Content (Persist)</a>

    <a href="#" data-toggle="featherlight" data-target="This is a bunch of text" data-type="text">Text Content</a>

    <a href="../assets/images/two_birds.jpg" data-toggle="featherlight">Image</a>

    <a href="https://player.vimeo.com/video/33110953" data-toggle="featherlight" data-type="iframe" data-width="720" data-height="420">Video (iframe)</a>

    <a href="demo_ajax_content.html" data-toggle="featherlight" data-type="ajax">Ajax (Full Page)</a>

    <a href="demo_ajax_content.html .ajax-content-1" data-toggle="featherlight" data-type="ajax">Ajax (Element 1)</a> | <a href="demo_ajax_content.html .ajax-content-2" data-toggle="featherlight" data-type="ajax">Element 2</a>

    <script src="../assets/javascripts/jquery-3.2.1.min.js"></script>
    <script src="featherlight.min.js"></script>

    </body>
    </html>
