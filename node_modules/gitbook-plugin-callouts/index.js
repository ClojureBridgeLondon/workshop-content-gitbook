var cheerio = require( "cheerio" )
    ,$
    ,options = // map annotations to styles
    {
        /* PLUGIN SETTINGS */
        "showTypeInHeader": true,
        /* primary */
        "note": {
            alert: "primary",
            picto: "fa-edit"
        },
        /* info */
        "info": {
            alert: "info",
            picto: "fa-info"
        },
        "tag": {
            alert: "info",
            picto: "fa-tag"
        },
        "comment": {
            alert: "info",
            picto: "fa-comment-o"
        },
        /* success */
        "hint": {
            alert: "success",
            picto: "fa-lightbulb-o"
        },
        "success": {
            alert: "success",
            picto: "fa-lightbulb-o"
        },
        /* warning */
        "warning": {
            alert: "warning",
            picto: "fa-exclamation-triangle"
        },
        "caution": {
            alert: "warning",
            picto: "fa-exclamation-triangle"
        },
        "todo": {
            alert: "warning",
            picto: "fa-bookmark"
        },
        /* danger */
        "danger": {
            alert: "danger",
            picto: "fa-times-circle"
        },
        "fixme": {
            alert: "danger",
            picto: "fa-bug"
        },
        "bug": {
            alert: "danger",
            picto: "fa-bug"
        },
        /* quote */
        "quote": {
            alert: "quote",
            picto: "fa-quote-left"
        },
    }
    ;

    module.exports = {
        book : {
            assets: "./book",
            css   : [
            "plugin.css"
            ]
        },
        hooks: {
        // For all the hooks, this represent the current generator
        // This is called before the book is generated
        init  : function ()
        {
            // console.log( "callouts init!" );
            if( this.options.pluginsConfig && this.options.pluginsConfig.callouts )
            {
                // callouts is a POJO, save to use for-in
                var callouts = this.options.pluginsConfig.callouts;
                for (key in callouts) {
                    // console.log(key, callouts[key]);
                    options[key] = callouts[key] === false? undefined : callouts[key];
                }
            }
        },

        // This is called for each page of the book
        // It can be used for modifying page content
        // It should return the new page
        page  : function ( page )
        {
            var $bq
            ,$this
            ,$strong
            ,style
            ;

            $ = cheerio.load( page.content );

            // converting Markdown blockquotes:
            $bq = $( "blockquote" ).each(function () {
                $this = $(this);
                $testheader = $this.find('h4:first-child');
                if( !$testheader || $testheader.length == 0) {
                    return;
                }

                var children = $this.children().toArray();
                $header = children.shift();

                $title = $($header).text();
                $parts = $title.split('::', 2);

                var style = options[$parts[0].toLowerCase()] ?  // look up annotation in options
                options[$parts[0].toLowerCase()] :
                options['default'];

                if (!style) {
                    return;
                }

                var icon = $('<i>')
                .addClass('fa ' + style.picto);

                // This checks the showTypeInHeader option and if false will not show the section
                // type when header text is present.
                if (options["showTypeInHeader"] === true) {
                    var title = ($parts[1] === "") ? $parts[0] : $parts.join(": ");
                } else {
                    var title = ($parts[1] === "") ? $parts[0] : $parts[1];
                }

                var panelTitle = $('<h3>')
                    .addClass('panel-title')
                    .append(icon)
                    .append(" " + title)
                ;
                var panelHeading = $('<div>')
                    .addClass('panel-heading')
                    .append(panelTitle)
                ;
                var panelBody = $('<div>')
                    .addClass('panel-body')
                    .append(children)
                ;


                var panel = $('<div>')
                    .addClass('panel panel-' + style.alert)
                    .append(panelHeading)
                    .append(panelBody);

                $this.before(panel);
                $this.remove();

                // Replace by the transformed element
                page.content = $.html();
            });

            // converting AsciiDoc blockquotes:
            $bq = $( "div.quoteblock" ).each(function () {
                $this = $(this);
                children = $this.find('p');
                $testheader = children.first().text();
                children = children.toArray();
                children.shift();
                if (
                    !$testheader ||
                    $testheader.length === 0 ||
                    $testheader.substr(0,5) !== '==== '
                ) {
                    return;
                }

                $parts = $testheader.substr(5).split('::');

                var style = options[$parts[0].toLowerCase()] ?  // look up annotation in options
                options[$parts[0].toLowerCase()] :
                options['default'];

                if (!style) {
                    return;
                }

                var icon = $('<i>').addClass('fa ' + style.picto);

                if (options["showTypeInHeader"] === true) {
                    var title = ($parts[1] === "") ? $parts[0] : $parts.join(": ");
                } else {
                    var title = ($parts[1] === "") ? $parts[0] : $parts[1];
                }

                var panelTitle = $('<h3>')
                    .addClass('panel-title')
                    .append(icon)
                    .append(" " + title)
                ;
                var panelHeading = $('<div>')
                    .addClass('panel-heading')
                    .append(panelTitle)
                ;
                var panelBody = $('<div>')
                    .addClass('panel-body')
                    .append(children)
                ;

                var panel = $('<div>')
                    .addClass('panel panel-' + style.alert)
                    .append(panelHeading)
                    .append(panelBody);

                $this.before(panel);
                $this.remove();

                // Replace by the transformed element
                page.content = $.html();
            });

            return page;
        }
    }
};
