import { Container } from '@chakra-ui/react';
import React from 'react';

const GMap = ({ data }) => {
    return (
        <>
            {data && <Container class="mapouter"><Container class="gmap_canvas"><iframe width="500" height="600" src={`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`} id="gmap_canvas" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://2piratebay.org"></a><br /><a href="https://www.embedgooglemap.net">embedgooglemap.net</a></Container></Container>}
        </>
    );
}

export default GMap;