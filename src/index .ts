/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export function index():void{

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-var-requires
    const serve = require('./Server');

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const {$}= require("jquery");

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-var-requires
    const Exception = require("typescript");

    $("button.continue").html("Next Step...");

// https://stackoverflow.com/questions/54649465/how-to-do-try-catch-and-finally-statements-in-typescript/54649617
    try{
        serve();
    }catch(e){
        //typescript 2304
        // const result = (e as Exception).Message;

        // console.log(result);

        throw new Exception("LEAFLET TOKEN NOT FOUND");

    }
    finally{

        console.log("finally");

    }
} // end index