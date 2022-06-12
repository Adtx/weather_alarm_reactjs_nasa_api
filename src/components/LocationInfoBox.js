import { Button } from '@mui/material';
import React, { useRef, useState } from 'react';
import { Icon } from '@iconify/react';


export default function LocationInfoBox({ title, id, category, detailsURL, displayInfoBox, setDisplay }) {
    console.log({ title, id, category, detailsURL })
    
    return (
        <>
            {displayInfoBox && <div className="location-info">
                <span>
                    <Icon
                        icon="ei:close"
                        onClick={() => setDisplay(false)}
                    />
                </span>
                <h2>{title}</h2>
                <ul>
                    <li>Event Category: <strong>{category}</strong></li>
                    <li>Event ID: <strong>{id}</strong></li>
                </ul>
                <Button variant="outlined" href={detailsURL} target="_blank" rel="noreferrer noopener">More details</Button>
            </div>}
        </>
    )
}
