/*
This javascript function hides the "Create" button until a file is attached.
Use with lfListener_ForceAttachmentOnCreate.sil
*/

var attachments = AJS.$(".file-input-list ");
console.log("Got attachments");
AJS.$(function() {
  var $div = attachments;
  var html = $div.html();
  var checking = setInterval(function() {
    var newhtml = $div.html();
    if (html != newhtml) {
      myCallback();
      html = newhtml;
    }
  },100);
  function myCallback() {
    console.log("Content changed");
    var size = AJS.$("[duitype='dndattachment/progressbars/ProjectUploadProgressBar']").size();
    if (size == 0) {
        console.log("You can't create such an issue");
         AJS.$("#create-issue-submit").hide();
         AJS.$("#issue-create-submit").hide();
    } else {
        console.log("You can now create the issue");
        AJS.$("#create-issue-submit").show();
        AJS.$("#issue-create-submit").show();
    }
  }
});
