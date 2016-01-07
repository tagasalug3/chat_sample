$(function(){
    
    // make this happen when the "Submit" button is clicked
    $("#send").click(function(){

        // get the value of the input box and save it in a variable called "txt"
        var txt = $("#textBox").val();

        // put the variable "txt" in the div box called "textArea"
        $("#messageBox").html(txt);

        // empty the input box content
        $("#textBox").val("");
    });
});

