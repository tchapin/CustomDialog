/**
 * Created by tchapin on 10/10/2014.
 * This is a custom Dialog widget that allows some behavior not in the default Dojo Dialog.
 * It can be positioned anywhere on the screen and it remembers where it was when it last closed.
 *     This is accomplished with a function before the dialog's onHide event that stores
 *     the left and top style values in widget properties.  Another function after the
 *     dialog's onShow event sets the widget's left and top style based on the stored values.
 * It has a vertical scrollbar if the contents exceed the height of the dialog.
 *     This is accomplished by styling the containerNode with 0 margins and a height that
 *     is the height of the dialog - the height of the toolbar.
 *     http://dojotoolkit.org/reference-guide/1.10/dijit/Dialog.html#sizing-the-dialog
 *     You populate the dialog's containerNode yourself
 * It has modal and non modal modes.
 *     This is accomplished with the following css classes:
 *     .nonModalDialog_underlay {display: none;}
 *     .modalDialog_underlay {display: block;}
 * Instantiate the custom dialog like this:
 *     var nonModalDialog = new CustomDialog({
 *         title: "Non-modal Dialog",
 *         class: "nonModalDialog", //in the css .nonModalDialog_underlay {display: none;}
 *         width: 200,
 *         height: 300,
 *         left: 300,
 *         top: 15
 *     });
 *     nonModalDialog.startup();
 *     //to populate the dialog with simple text:
 *     var text = "This is a custom non-modal dialog.  It can be placed anywhere.  It remembers where it closed.";
 *     domConstruct.create("div", {innerHTML: text, style: "margin: 5px; padding: 5px;"}, nonModalDialog.containerNode);
 *     //to populate the dialog with a widget:
 *     myWidget.placeAt(nonModalDialog.containerNode);
 */
define([
    "dojo/_base/declare",
    "dojo/aspect",
    "dojo/dom-style",
    "dijit/Dialog",
    "dijit/_WidgetBase"
], function(declare, aspect, domStyle, Dialog, _WidgetBase){
    return declare([Dialog, _WidgetBase], {
        title: null,
        class: null,
        width: null,
        height: null,
        left: null,
        top: null,
        titlebarHeight: 31,
        constructor: function(options) {
            //set up the dialog based on the options provided or use defaults
            this.title = options.title || "default title";
            this.class = options.class || "modalDialog";
            this.width = options.width || 300;
            this.height = options.height || 300;
            this.left = options.left || 50;
            this.top = options.top || 50;
        },
        postCreate: function() {
            this.inherited(arguments);
            //size the dialog
            domStyle.set(this.domNode, {
                width: this.width + "px",
                height: this.height + "px"
            });
            //size the containerNode (take into account the toolbar height so the scrollbar just covers the contents)
            domStyle.set(this.containerNode, {
                margin: 0,
                padding: 0,
                height: this.height - this.titlebarHeight + "px",
                width: "auto",
                overflow: "auto"
            });
            //after the onShow event, set the position
            aspect.after(this, "show", function(){
                domStyle.set(this.domNode, {
                    left: this.left + "px",
                    top: this.top + "px"
                });
            });
            //before the onHide event, save the position
            aspect.before(this, "hide", function(){
                this.left = domStyle.get(this.domNode, "left");
                this.top = domStyle.get(this.domNode, "top");
            });
        }
    });
});