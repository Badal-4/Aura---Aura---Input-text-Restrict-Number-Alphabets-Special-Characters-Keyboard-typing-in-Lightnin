({
    TextCheck: function(component, event, helper){
        var keyCode = (event.which) ? event.which : event.keyCode;
        if((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32 ) {
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            } 
        } 
    },
    NumberCheck: function(component, event, helper){
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)){
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            } 
        }
    },
    DateCheck: function(component, event, helper){
        var dateCode = (event.which) ? event.which : event.keyCode;
        if (dateCode != 47 && dateCode != 46 && dateCode > 31 && (dateCode < 48 || dateCode > 57)){
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            } 
        }
    },
    NumSplCharsCheck: function(component, event, helper){
        var specialKeys = new Array();
        specialKeys.push(8); //Backspace
        specialKeys.push(9); //Tab
        specialKeys.push(32); //Tab
        specialKeys.push(46); //Delete
        specialKeys.push(36); //Home
        specialKeys.push(35); //End
        specialKeys.push(37); //Left
        specialKeys.push(39); //Right
        var keyCode = event.keyCode == 0 ? event.charCode : event.keyCode;
        if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(event.keyCode) != -1 && event.charCode != event.keyCode)){
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            } 
        }
    }
})
