import { Icon } from '@iconify/react';
// import locationIcon from '@iconify/icons-mdi/fire-alert'

export default function LocationMarker({ eventType, clickHandler }) {
    const iconDisplayInfo = {
        name: '',
        className: ''
    }

    switch (eventType) {
        case 'wildfires':
            iconDisplayInfo.name = 'mdi:fire'
            iconDisplayInfo.className = 'wildfire-location'
        break;
        case 'floods':
            iconDisplayInfo.name = 'mdi:waves'
            iconDisplayInfo.className = 'flood-location'
        break;
        case 'severe storms':
            iconDisplayInfo.name = 'bi:hurricane'
            iconDisplayInfo.className = 'storm-location'
        break;
        case 'earthquakes':
            iconDisplayInfo.name = 'ri:earthquake-fill'
            iconDisplayInfo.className = 'earthquake-location'
        break;
    
        default:
            break;
    }

    return (
    //  <div className="location-marker" onClick={clickHandler}>
     <div onClick={clickHandler}>
         <Icon icon={iconDisplayInfo.name} className={iconDisplayInfo.className}></Icon>
     </div>
    );
}
