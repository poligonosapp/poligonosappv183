// https://testing-library.com/docs/ecosystem-user-event/
// https://stackoverflow.com/questions/49182862/preset-files-are-not-allowed-to-export-objects

import { test } from '@playwright/test';
import App from "./../src/App";

test.describe.parallel('suite', () => {

  import PoligonosApp from "../src/PoligonosApp";

  const L = require("../../../../Leaflet");

  const React = require('react');
  const render = require('@testing-library/react');
  const screen = require('@testing-library/react');
  var userEvent = require('@testing-library/user-event');

  var position = [51.505, -0.09];

// create a red polygon from an array of LatLng points
  let latlngs = [
    [37, -109.05],
    [41, -109.03],
    [41, -102.05],
    [37, -102.04],
  ];

// initialize the map on the "map" div with a given center and zoom
  export let mapContainer = PoligonosApp().L.map("map", {
    center: [51.505, -0.09],
    zoom: 13,
  });

  export let polygonMock = PoligonosApp()
    .L.polygon(latlngs, { color: "red" })
    .addTo(mapContainer);

// zoom the map to the polygon
  mapContainer.fitBounds(polygonMock.getBounds());

  let { layer } = PoligonosApp().L.Marker(position).addTo(mapContainer);
// layer.remove();
  export let copyright = "https://www.openstreetmap.org/copyright";

  export let mapbox = "https://www.mapbox.com/";

  export let comma = ",";
  export let copyrightSymbol = "©";

  export let anchor = (
    <a href={copyright}>
      OpenStreetMap "contributors"{comma}" Imagery "{copyrightSymbol}
      <a href={mapbox}>Mapbox</a>
    </a>
  );

  layer.attribution({ anchor });


  export const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

  import SSRProvider from "react-bootstrap/SSRProvider";
  let appRender: SSRProvider =
    App(polygons,
      polygonMock,
      "",
      "",
      "./polygons.geojson",
      true,
      ["", polygonMock],
      ["", polygonMock],
      ["", polygonMock],
      ["", polygonMock],
      layer);

  test('Polygon Feature', () => {

    const multiPolygon = L.Polygon([[[1, 2], [3, 4], [5, 6]]]);

    expect(multiPolygon.toGeoJSON().geometry, 'Polygon');

  });

  test('Render Polygon Feature', () => {

    const multiPolygon = L.Polygon([[[1, 2], [3, 4], [5, 6]]]);
    let App = require('./../src/App');
    let loading = true;

    expect(App(multiPolygon.toGeoJSON(), loading, layer), loading === false);

  });

  test('should serve leaflet token',() => {
    var serve = require('../Server');
    expect(serve, string);
  });

  test('click', () => {
    render(appRender)

    userEvent.click(screen.getByText('jest'));
    expect(screen.getByLabelText('jest')).toBeChecked();
    // delete label ./src/index.html jest cleaner
  })

  test('click', () => {
    render(
      <div>
        <label htmlFor="checkbox">Check</label>
        <input id="checkbox" type="checkbox" />
      </div>,
    )

    userEvent.click(screen.getByText('Check'));
    expect(screen.getByLabelText('Check')).toBeChecked();
  })
  test('runs in parallel 1', async ({ page }) => { /* ... */ });
  test('runs in parallel 2', async ({ page }) => { /* ... */ });
});
