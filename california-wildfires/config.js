var config = {
    style: 'mapbox://styles/sb4873/clzk6gdbi00ds01pa6bbr0ubh',
    accessToken: 'pk.eyJ1Ijoic2I0ODczIiwiYSI6ImNseXp6dDkwdTEwaHQyaXBzNmdweThxcTAifQ.opuxgSfpGb12QGfLRkxwjQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'first-identifier',
            alignment: 'center',
            hidden: false,
            title: 'Major California Wildfires 2018-19',
            description: 'Based on prior research, we identified the top 70% most destructive fires in terms of structures destroyed between 2010-19. We then restricted the analysis to fires that occurred in late 2018 and 2019. The map shows the counties where these fires occured. We compared the property values from mortgage data for census tracts that were within the burn area of each fire (highlighted in red) to those in the county outside the burn area (in purple). For the top 25% most expensive properties, the same V-shaped pattern emerges for most of the counties, with an initial drop in value followed by a recovery.',
            location: {
                center: [-117.56752, 36.33574],
                zoom: 5.82,
                pitch: 45.00,
                bearing: 0.00,
                speed: 0.75
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'affected-tracts-layer',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'affected-tracts-layer',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Sonoma County',
            description: 'Sonoma County was affected by the Kincade Fire in 2019 in our time period of analysis. Previously, the Tubbs Fire in 2017 was one of the most destructive fires in the county.',
            image: './images/sonoma.png',
            location: {
                center: [-122.95336, 38.45490],
                zoom: 9.23,
                pitch: 45.00,
                bearing: 0.00,
                speed: 0.75
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                        layer: 'affected-tracts-layer',
                        opacity: 1,
                        duration: 5000
                    }
                ],
            onChapterExit: [
                // {
                //     layer: 'affected-tracts-layer',
                //     opacity: 0
                // }
            ]
            
        },
        {
            id: 'third-identifier',
            alignment: 'full',
            hidden: false,
            title: 'Butte and Plumas County',
            image: './images/butte+plumas.png',
            description: 'Camp Fire, the most destructive of all the fires hit this area in November 2018. The fire destroyed the town of Paradise in Butte County. It was the deadliest and most destructive fire in California history.',
            location: {
                center: [-120.79861, 40.02482],
                zoom: 8.00,
                pitch: 45.00,
                bearing: 0.00,
                speed: 0.75
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'affected-tracts-layer',
                        opacity: 1,
                        duration: 5000
                }
            ],
            onChapterExit: [ 
            //     {
            //     layer: 'affected-tracts-layer',
            //     opacity: 0
            // }
        ]
        },

        {
            id: 'fourth-chapter',
            alignment: 'full',
            hidden: false,
            title: 'Ventura and Los Angeles',
            image: './images/ventura+la.png',
            description: 'The Woolsey Fire of November 2018 started in LA County and spread to Ventura county. It burned prime real estate in Malibu, including homes of many celebrities. We additionally consider the Saddleridge and Tick fires of October 2019 that affected LA County',
            location: {
                center: [-118.29784, 33.80631],
                zoom: 7.98,
                pitch: 45.00,
                bearing: 0.00,
                speed: 0.75
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'affected-tracts-layer',
                        opacity: 1,
                        duration: 5000
                }
            ],
            onChapterExit: [ 
                // {
                //     layer: 'affected-tracts-layer',
                //     opacity: 0
                // }
        ]
        },

        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Santa Barbara County',
            image: './images/santa_barbara.png',
            description: 'Santa Barbara saw the Cave Fire in November 2019. The fire burned in the hills above Santa Barbara and Goleta, threatening homes and causing the University of California, Santa Barbara to cancel classes.',
            location: {
                center: [-119.84990, 34.28193],
                zoom: 8.26,
                pitch: 45.00,
                bearing: 0.00,
                speed: 0.75
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'affected-tracts-layer',
                        opacity: 1,
                        duration: 5000
                }
            ],
            onChapterExit: [ 
            //     {
            //     layer: 'affected-tracts-layer',
            //     opacity: 0
            // }
        ]
        },

        {
            id: 'sixth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Riverside County',
            image: './images/riverside.png',
            description: 'The Sandalwood fire in October 2019 was one of the most destructive fires in Riverside County. The fire destroyed 80 structures and killed two people. It was started by the negligence of a trash truck driver who dumped burning trash on the side of the road.',
            location: {
                center: [-116.05562, 33.75351],
                zoom: 8.18,
                pitch: 45.00,
                bearing: 0.00,
                speed: 0.75
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'affected-tracts-layer',
                        opacity: 1,
                        duration: 5000
                }
            ],
            onChapterExit: [ 
            //     {
            //     layer: 'affected-tracts-layer',
            //    opacity: 0
            // }
        ]
        }




        
    ]
};


mapboxgl.accessToken = config.accessToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: config.style,
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    pitch: config.chapters[0].location.pitch,
    bearing: config.chapters[0].location.bearing,
    interactive: false
});

map.on('load', function () {
    // Load the GeoJSON data
    map.addSource('affected-tracts', {
        'type': 'geojson',
        'data': 'data/Affected_California_Census_Tracts.geojson' // Update this path
    });

    // Fetch the GeoJSON data and log it to the console
    fetch('data/Affected_California_Census_Tracts.geojson')
        .then(response => response.json())
        .then(data => {
            console.log('GeoJSON data loaded:', data);
        });

    // Define the new layer
    map.addLayer({
        'id': 'affected-tracts-layer',
        'type': 'fill',
        'source': 'affected-tracts',
        'paint': {
            'fill-color': 'rgba(255, 0, 0, 0.3)', // Transparent red fill
            'fill-outline-color': 'rgba(255, 0, 0, 0.3)' // Dark border
        },
        layout: {
            'visibility': 'none' // Initially set the layer to invisible
        }
    });

    console.log('Layer has been added.');

    // Scrollama setup
    var scroller = scrollama();

    scroller
        .setup({
            step: '.step',
            offset: 0.5,
            progress: true
        })
        .onStepEnter(response => {
            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            if (chapter.onChapterEnter.length > 0) {
                chapter.onChapterEnter.forEach(enter => {
                    map.setLayoutProperty(enter.layer, 'visibility', 'visible');
                    map.setPaintProperty(enter.layer, 'fill-opacity', enter.opacity);
                });
            }
        })
        .onStepExit(response => {
            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            if (chapter.onChapterExit.length > 0) {
                chapter.onChapterExit.forEach(exit => {
                    map.setLayoutProperty(exit.layer, 'visibility', 'none');
                });
            }
        });
    });

