var i = 0;//  set your counter to 0

var randtime = 6000;//use for recursive call
function instagramDeleter() {//  create a deleter loop function
   setTimeout(function () {//  call a 3s setTimeout when the loop is called
        randtime = Math.floor(Math.random() * 100000); // make a random number
        console.log("next run : "+randtime);
        document.querySelector("#react-root > section > main > div > div._2z6nI > div:nth-child(1) > div > article:nth-child(1) > div.MEAGs > button").click();  //  selector to click on options menu
        setTimeout(function () { document.querySelector("body > div.RnEpo.Yx5HN > div > div > div > div > button.aOOlW.-Cab_").click(); }, 2000)         //  selector to click delete option
        setTimeout(function () { document.querySelector('body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.-Cab_').click(); }, 4000)         //  selector to click delete confirmation
        console.log (i+1 +" Deleted")                                                                   //  delete numbering to console
        i++;                                                                                            //  increment the counter
        if (i < 5) {                                                                                    //  if the counter < 5, call the loop function
            instagramDeleter();                                                                         //  ..  again which will trigger another 
        }                                                                                               //  ..  setTimeout()
    }, randtime)
}
instagramDeleter();
