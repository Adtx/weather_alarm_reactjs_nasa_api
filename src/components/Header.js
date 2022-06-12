import { Icon } from '@iconify/react';
import { Autocomplete } from '@react-google-maps/api'
import { InputBase } from '@mui/material';
import { useState } from 'react';
// import locationIcon from '@iconify/icons-mdi/fire-alert'

export default function Header({ setCoordinates }) {
  const [autocomplete, setAutocomplete] = useState(null)

  function onLoad(autoC) {
    setAutocomplete(autoC)
  }

  function onPlaceChanged() {
    const lat = autocomplete.getPlace().geometry.location.lat()
    const lng = autocomplete.getPlace().geometry.location.lng()

    setCoordinates({ lat, lng })
  }
  return (
    <header className="header">
      {/* <h1><Icon icon={locationIcon} /> Wildfire Tracker (Powered By NASA)</h1> */}
      {/* <h1><Icon icon="fluent:weather-hail-day-24-regular" /> Weather Alarm (Powered By NASA)</h1> */}
      <h1><Icon icon="fluent:weather-hail-day-24-regular" /> Weather Alarm</h1>
      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged} >
        <div className='search'>
          <div className='searchIcon'>
          <Icon icon='ei:search' className='searchIcon'></Icon>
          </div>
          <InputBase autoFocus placeholder="Search places..." className='inputRoot inputInput' />
        </div>
      </Autocomplete>
    </header>
  )
}
