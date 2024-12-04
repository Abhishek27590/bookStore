import React from 'react';
import { useLocation } from 'react-router-dom';

const ViewPDF = () => {
    const location=useLocation();
    const {url}=location.state
    const cloudinaryPDF = url;
    console.log(url)

    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <embed
                src={cloudinaryPDF}
                type="application/pdf"
                width="100%"
                height="100%"
            />
        </div>
    );
};

export default ViewPDF;
