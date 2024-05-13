import React from 'react'
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function SliderGallery() {

    const images = [
        "https://lh3.googleusercontent.com/p/AF1QipP_wtPrxKpNG4iIlY3ingY8b2-aIlsJs0o9BoEx=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipP70-EA14koasvYyBbEtpW_6nd7SHhPo5W2IZJy=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipO6v-kM8V_mYaUELQHrssrGPCmql7dSh2kGZky3=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipOjYYSpkJzPtUNnsFCy0_sJx1TavQWWKVDe6pSV=s680-w680-h510",
        "https://content3.jdmagicbox.com/comp/patna/m6/0612px612.x612.101201160929.i4m6/catalogue/st-marx-academy-kankarbagh-patna-schools-yqukfr4d45.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjx-QqVSV1YD5ANudstNW7Z0PjuI5R55HzcUHwxT3rNg&s",
        
    ]

  return (
    <div className='md:py-16 py-4'>
        <Zoom scale={1.4} indicators={true}>
            {images.map((each, index) => (
                <div key={index} style={{ width: "100%" }}>
                    <img style={{ objectFit: "fill", width: "100%",height:"70vh" }} alt="Slide Image" src={each} />
                </div>
            ))}
        </Zoom>
    </div>
  )
}

export default SliderGallery;