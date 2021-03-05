import React, { useEffect, useState } from 'react';
import { getPublicGists } from '../services/gistService';
import Gist from './Gist';

const GistList = ({ gist }) => {
    return (
        <>
            { gist && gist.length > 0 ?
                gist.map((item) => {
                    return (<Gist gist={item} key={item.id} />)
                })
                :
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>No Record Found</div>
            }

        </>
    )
}

export default GistList
