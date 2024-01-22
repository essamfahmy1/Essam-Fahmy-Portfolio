$(() => {


    const controlTrack = () => {

        var check = true;
        var count = 0;

        const recTrack = () => {

            if(count == 500)
            {
                return;
            }
            else if (check == true)
            {
                $("#sub").html($("#sub").html().replace('|', ''));
                check = false;
                count++;
                setTimeout(recTrack, 700);
            }
            else if (check == false)
            {
                $("#sub").append("|"); 
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
                controlTrack();
                return;
              }
            
        };

        printLetter();
    };

    printSub();

}); // jQuery