/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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

  function component2() {

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
    
    const {L, Map, Layer, Canvas, tileLayer, geoJSON, Polygon} = require('./Leaflet');
    const NewClass = require('./core/DemoAbstractClassImpl');
        const fail = new NewClass(require('./polygons.geojson'));
        console.log(fail);

     const { MapReturnType } = require("./layer/GeoJSONFunction");

        //canvas
            // @ts-ignore
            const map: MapReturnType = L.Map('map', {
                renderer: L.canvas()
            });


    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    element.innerHTML = _.join(['', map], ' ');
  
    return element;
  }
  
  document.body.appendChild(component2());
