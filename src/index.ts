// webpack index.ts
import _ from 'lodash';
function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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

        const NewClass = require('./core/DemoAbstractClassImpl');
        const fail = new NewClass(require('./polygons.geojson'));
        console.log(fail);

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