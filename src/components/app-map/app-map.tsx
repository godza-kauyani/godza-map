import { Component } from '@stencil/core';
import  mapboxgl from 'mapbox-gl';

@Component({
  tag: 'app-map',
  styleUrl: 'app-map.css'
})

export class AppMap {
	
	componentWillLoad(){
		mapboxgl.accessToken = 'pk.eyJ1IjoiZ29kemEiLCJhIjoiY2pwczhwMGtiMDA2cjQzbzZ6cDU2NG95NCJ9.cds9feybkCrU1v5upFxTDw';
		const  map = new mapboxgl.Map({
    		container: 'map',
    		style: 'mapbox://styles/mapbox/streets-v9'
		});
		map.addControl(new mapboxgl.GeolocateControl({
    			positionOptions: {
        		enableHighAccuracy: true
    			},
    			trackUserLocation: true
			}));
	};

  	render() {
    		return [
	    	<div id='map'>
			<h1>GodzaAp</h1>
			</div>
		];
  }
}
