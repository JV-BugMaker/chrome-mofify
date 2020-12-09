
function clickSwitch() {
    if ($("#onoffswitch").is(':checked')) {
        console.log("click2");
        chrome.runtime.sendMessage({status: "off"},   
             function(response) {
                  console.log(response);
              }
        );
    } else {
        chrome.runtime.sendMessage({status: "on"},   
             function(response) {
                  console.log(response);
              }
        );
    }
};
$("#onoffswitch").on('click', function(){
    clickSwitch();
});