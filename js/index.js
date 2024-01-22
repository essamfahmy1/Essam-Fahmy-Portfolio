$(() => {


    $( ".gitlink" ).hide();

    const controlTrack = () => {
        var check = true;
        var count = 0;

        const recTrack = () => {

            if(count == 99999)
            {
                return;
            }
            else if (check == true)
            {
                $("#sub2").html($("#sub2").html().replace('|', ''));
                check = false;
                count++;
                setTimeout(recTrack, 700);
            }
            else if (check == false)
            {
                $("#sub2").append("|"); 
                check = true;
                count++;
                setTimeout(recTrack, 700);

            }
        };
        recTrack();
    };
    const printSub = () => {
        
        $("#sub").empty();

        var outputLength = 0;
        var data = "Hello! I'm Essam.";

        const printLetter = () => {

            if (outputLength < data.length) {
                $("#sub").html($("#sub").html().replace('|', ''));
                $("#sub").append(data.charAt(outputLength));
                $("#sub").append("|"); 

        
                outputLength++;
                setTimeout(printLetter, 80);
              } else {
                outputLength = 0;
                $("#sub").html($("#sub").html().replace('|', ''));
                return;
              }
            
        };

        printLetter();
    };

    const printSub2 = () => {
        
        $("#sub2").empty();

        var outputLength = 0;
        var data = "Check out my projects below";

        const printLetter = () => {

            if (outputLength < data.length) {
                $("#sub2").html($("#sub2").html().replace('|', ''));
                $("#sub2").append(data.charAt(outputLength));
                $("#sub2").append("|"); 

        
                outputLength++;
                setTimeout(printLetter, 80);
              } else {
                outputLength = 0;
                $( ".gitlink" ).show(500);
                controlTrack();
                return;
              }
            
        };

        printLetter();
    };
    printSub();
    setTimeout(printSub2, 2000);

}); // jQuery