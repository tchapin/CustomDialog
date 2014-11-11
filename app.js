/**
 * Created by tchapin on 10/10/2014.
 */
require([
    "dojo/dom-construct",
    "dojo/on",
    "dojo/_base/declare",
    "dijit/form/Button",
    "dijit/Dialog",
    "js/CustomDialog.js"
], function(domConstruct, on, declare, Button, Dialog, CustomDialog){

    var aStandardDialog = new Dialog({
        title: "Standard Dialog",
        content: "this is a standard dialog (opens in center, doesn't remember where it closed)."
    });
    aStandardDialog.startup();
    var aStandardDialogButton = new Button({
        label: "Open a Standard Dialog"
    });
    on(aStandardDialogButton, "click", function() {aStandardDialog.show();});
    document.body.appendChild(aStandardDialogButton.domNode);
    aStandardDialogButton.startup();

    var modalDialog = new CustomDialog({
        title: "Modal Dialog",
        width: 300,
        height: 200,
        left: 5,
        top: 200
    });
    modalDialog.startup();
    var text = "This is a custom modal dialog.  It can be placed anywhere.  It remembers where it closed.";
    domConstruct.create("div", {innerHTML: text, style: "margin: 5px; padding: 5px;"}, modalDialog.containerNode);
    var modalDialogButton = new Button({
        label: "Open a Modal Dialog"
    });
    on(modalDialogButton, "click", function(){modalDialog.show();});
    document.body.appendChild(modalDialogButton.domNode);
    modalDialogButton.startup();

    var nonModalDialog = new CustomDialog({
        title: "Non-modal Dialog",
        class: "nonModalDialog", //in the css .nonModalDialog_underlay {display: none;}
        width: 200,
        height: 300,
        left: 300,
        top: 15
    });
    nonModalDialog.startup();
    var text = "This is a custom non-modal dialog.  It can be placed anywhere.  It remembers where it closed.";
    domConstruct.create("div", {innerHTML: text, style: "margin: 5px; padding: 5px;"}, nonModalDialog.containerNode);
    var nonModalDialogButton = new Button({
        label: "Open a Non Modal Dialog"
    });
    on(nonModalDialogButton, "click", function(){nonModalDialog.show();});
    document.body.appendChild(nonModalDialogButton.domNode);
    nonModalDialogButton.startup();

    var scrollingDialog = new CustomDialog({
        title: "Scrolling Dialog",
        class: "nonModalDialog",
        width: 200,
        height: 300,
        left: 200,
        top: 50
    });
    scrollingDialog.startup();
    var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ornare sem. Ut leo neque, hendrerit eget fermentum sed, efficitur ut purus. Aenean tempor pretium hendrerit. Morbi dui purus, varius sed facilisis sit amet, hendrerit vitae mi. Nulla ut cursus dolor. Maecenas in urna mi. Duis tempus justo nec accumsan tempus. Nam dui orci, tempus vitae urna a, consequat malesuada nisi. Donec non eros convallis, semper nisi quis, varius massa. Maecenas pharetra congue ipsum maximus elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ornare sem. Ut leo neque, hendrerit eget fermentum sed, efficitur ut purus. Aenean tempor pretium hendrerit. Morbi dui purus, varius sed facilisis sit amet, hendrerit vitae mi. Nulla ut cursus dolor. Maecenas in urna mi. Duis tempus justo nec accumsan tempus. Nam dui orci, tempus vitae urna a, consequat malesuada nisi. Donec non eros convallis, semper nisi quis, varius massa. Maecenas pharetra congue ipsum maximus elementum.";
    domConstruct.create("div", {innerHTML: text, style: "margin: 5px; padding: 5px;"}, scrollingDialog.containerNode);
    var scrollingDialogButton = new Button({
        label: "Open a Scrolling Dialog"
    });
    on(scrollingDialogButton, "click", function() {scrollingDialog.show();});
    document.body.appendChild(scrollingDialogButton.domNode);
    scrollingDialogButton.startup();



});