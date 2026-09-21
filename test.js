function line(mainLine, subLine, lineBetween) {
        return (mainLine * (lineBetween+1) - lineBetween)+subLine;
    }

    line1 = line(1, 0, 4);
    line2 = line(1, 4, 4);

    startTime = 15;
    endTime = 69;
    differenceTime = Math.abs(startTime - endTime);
    differenceLine = Math.abs(line1 - line2);
    secondsPerLine = differenceTime/differenceLine;

    console.log("difference Line: " + differenceLine);
    console.log("difference Time: " + differenceTime);
    console.log("seconds Per Line: " + secondsPerLine);

    /*
    The recommended extraction time is within 28-30 second extraction time.
    What's your desired extraction time?: 28;
    from Main line: 1, Sub line: 0. add 1 line to have ~27 seconds extraction time.
    or
    from End line: 1, Sub line: 4. Deduct 2 line to have ~27 seconds extracton time.
    
    note: this is only approximation, there are a lot of factors
    in the process that may affect the extraction time. thats why
    the tamping force should be consistent atleast.
    */

    recommendedLine = 0;
    acquiredRecommendedSeconds = 0;
    desiredExtractionTime = 30;
    countingMachine = 0;
    for(let i = 0; i < differenceLine; i++){//it will run 0-3, or 4 times
        acquiredRecommendedSeconds += secondsPerLine;
        if(acquiredRecommendedSeconds > desiredExtractionTime && acquiredRecommendedSeconds < desiredExtractionTime) {
            // acquiredRecommendedSeconds - differenceTime;
            break;
        };
        
        console.log(acquiredRecommendedSeconds);
        countingMachine++;
    }
    console.log("The recommended extraction time is within 28-30 second extraction time.");
    console.log(`What's your desired extraction time?: 28`);
    console.log(`
    from line: ${line1}. add ${countingMachine} line to have ~${acquiredRecommendedSeconds} seconds extraction time.
    or
    from End line: ${line2}. Deduct (di ko pa alam formula) line to have ~27 seconds extracton time.
    note: this is only approximation, there are a lot of factors
    in the process that may affect the extraction time. thats why
    the tamping force should be consistent atleast.`)


    