import { Component } from '@stencil/core';
import  mapboxgl from 'mapbox-gl';

@Component({
  tag: 'app-map',
  styleUrl: 'app-map.css'
})

export class AppMap {
	
	componentWillLoad(){
		mapboxgl.accessToken = 'pk.eyJ1IjoiZ29kemEiLCJhIjoiY2pwczhwMGtiMDA2cjQzbzZ6cDU2NG95NCJ9.cds9feybkCrU1v5upFxTDw';
		var map = new mapboxgl.Map({
   			 container: 'map', // container id
    			style: 'mapbox://styles/mapbox/streets-v9',
    			center: [28.4167, -20.8333], // starting position
    			zoom: 3 // starting zoom
			});

		// Add geolocate control to the map.
		map.addControl(new mapboxgl.GeolocateControl({
    			positionOptions: {
        		enableHighAccuracy: true
    			},
    			trackUserLocation: true
			}));
  		}
	render(){
		return <div id='map'></div>
	}
}
