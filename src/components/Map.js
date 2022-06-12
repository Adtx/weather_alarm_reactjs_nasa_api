import { CardActionArea, Paper } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import GoogleMapReact from 'google-map-react';
import { useState } from 'react';
import LocationInfoBox from './LocationInfoBox';
import LocationMarker from './LocationMarker';

function Map({ center, zoom, eventData, coordinates }) {
    // const API_key = 'AIzaSyCgHZFg4Vl3i-5BznhoY3jrp9mkIbzrtw0';
    const [locationInfo, setLocationInfo] = useState(null)
    const [eventTypes, setEventTypes] = useState([
            {type: 'Severe Storms', selected: false},
            {type: 'Floods', selected: false},
            {type: 'Earthquakes', selected: false},
            {type: 'Wildfires', selected: true},
        ]
    )
    const [displayInfoBox, setDisplayInfoBox] = useState(true)

    const eventTypeImages = [
        'severeStorm.png', 'flood.png',
        'earthquake.jpg', 'wildfire.png'
    ]

    const selectedEventTypes = eventTypes.filter(item => item.selected).map(item => item.type.toLowerCase())


    const markers = eventData
                    .filter(event => selectedEventTypes.includes(event.categories[0].title.toLowerCase()))
                    .map(event => {
                        const [lng, lat] = event.geometry[0].coordinates
                        return (
                            <LocationMarker
                                key={event.id}
                                eventType={event.categories[0].title.toLowerCase()}
                                lat={lat}
                                lng={lng}
                                clickHandler={() => {
                                    setLocationInfo({ title: event.title, id: event.id, category: event.categories[0].title, detailsURL: event.sources[0].url })
                                    setDisplayInfoBox(true)
                                }}
                            />
                        )
                    })

    function handleTypeSelection(i) {
        setEventTypes(evTypes => evTypes.map((item, index) => index === i ? {...item, selected: !item.selected} : item))
    }

    /* console.log({eventTypes})
    console.log({selectedEventTypes})
    console.log({eventData})
    console.log({markers})
 */
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}
                defaultCenter={coordinates.lat ? coordinates : center}
                center={coordinates.lat ? coordinates : center}
                defaultZoom={zoom}
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox {...locationInfo} displayInfoBox={displayInfoBox} setDisplay={setDisplayInfoBox} />}
            <Paper elevation={0} sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                height: '80px',
                width: '23%',
                position: 'absolute',
                bottom: '15px',
                left: '15px',
                background: 'transparent',
                zIndex: 1
            }}>
                {eventTypes.map((item, i) => (
                    <Card sx={{width: 82, height: 90}} onClick={() => handleTypeSelection(i)}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="48px"
                                width="48px"
                                image={require(`../images/${eventTypeImages[i]}`)}
                                alt={item.type}
                            />
                            <CardContent sx={{
                                paddingTop: '15px',
                                paddingLeft: '5px',
                                textAlign: 'center',
                                height: '26px',
                                color: 'gray'
                            }}>
                                {/* <Typography gutterBottom color="text.primary" > */}
                                    <Typography variant='subtitle3'>
                                        {item.type}
                                    </Typography>
                                {/* </Typography> */}
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Paper>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 44.257529,
        lng: 9.375299
    },
    zoom: 5
}

export default Map;
