/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-empty-function */
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
export async function index():Promise<void>{

    const {L, Map, Layer, Canvas, tileLayer, geoJSON, Polygon} = require('./Leaflet');

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-var-requires
    // const serve = require('./Server');

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const {$}= require("jquery");
    
    const {event, ui } = require("jquery-ui");

    const {Event, Ui} = require("typescript");

    $( ".selector" ).autocomplete({
        focus: function( event:Event, ui:typeof Ui ) {}
      });

      $( ".selector" ).on( "autocompletefocus", function( event:Event, ui:typeof Ui ) {} );

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-var-requires
    const Exception = require("typescript");

    $("button.continue").html("Next Step...");

    //canvas
            // @ts-ignore
            public const map: MapReturnType = L.Map('map', {
                renderer: L.canvas()
            });

            let token:string;
            let tokenAtlassian:string;
            let a:string;
            let s:string;

// https://stackoverflow.com/questions/54649465/how-to-do-try-catch-and-finally-statements-in-typescript/54649617
    try{

// Octokit pipeline parser
        token = await require('./Token').token().toPromise();
        tokenAtlassian = await require('./Pipeline').pipeline().toPromise();

        a = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=';

        s = a.concat(token);

        L.tileLayer(s, {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox/light-v9',
            tileSize: 512,
            zoomOffset: -1
        }).addTo(map);

        // serve();

        const NewClass = require('./core/DemoAbstractClassImpl');
        const fail = new NewClass(require('./polygons.geojson'));
        console.log(fail);

    }catch(e){
        //typescript 2304
        // const result = (e as Exception).Message;

        console.log(e.message);

        s = await a.concat(tokenAtlassian);

        L.tileLayer(s, {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox/light-v9',
            tileSize: 512,
            zoomOffset: -1
        }).addTo(map);

        throw new Exception("LEAFLET TOKEN NOT FOUND");

    }
    finally{

        console.log("finally");

    }
} // end index