import React, { useEffect, useState } from 'react';
import VideoGal from './VideoGal';
import ShowGallery from '../admin/ShowGallery';

const GalleryPage = () => {
  // State to keep track of the selected image
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleImages, setVisibleImages] = useState([]);

  // List of images
  const images = [
    'https://lh3.googleusercontent.com/p/AF1QipPQG6t26uF-krtY5R70NzriL6iMVZb2wjey4-hy=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipP_wtPrxKpNG4iIlY3ingY8b2-aIlsJs0o9BoEx=s680-w680-h510',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMDgD7itKIulZ8EX7TX_niJ_kgM3-1zFB1078_IS-dFQ&s',
    'https://lh3.googleusercontent.com/p/AF1QipML0kb_rtIEZyTvRt4nRX6qT7IqvgdFDk733PsI=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipM8jfYoPZ5MmqeQ35q5Y_7kDbBx1dTfk_LHPXFr=s680-w680-h510',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjx-QqVSV1YD5ANudstNW7Z0PjuI5R55HzcUHwxT3rNg&s',
    'https://content3.jdmagicbox.com/comp/patna/m6/0612px612.x612.101201160929.i4m6/catalogue/st-marx-academy-kankarbagh-patna-schools-yqukfr4d45.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrTd5Q8qk9dyzqrusml01-BU8DQS_MwqqotkWBGpLAVw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuNHe8QOHNfZxZ-7pa-gADEbNcPBkaTU3jjznjF9iDsA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuJs-A4OS81ZNqtxZY5mnM28XwqeelrydWVF781rhZOA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBBzHbrZetg2jdKKtISS4pdBYh2hdX-LzM5BNcpkI_AZ_G7KaMEnnxjjMttnTYAZSqn6s&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ95nj3AfWwWjEjdfu1L6qOZ5OCWxTj7NlP5sjiUHqzO3A1VxHKvRQ2LEyrwMXNbAL4i24&usqp=CAU',
    'https://content.jdmagicbox.com/comp/patna/m6/0612px612.x612.101201160929.i4m6/catalogue/st-marx-academy-kankarbagh-patna-schools-1eqe63us1x.jpg',
    'https://lh3.googleusercontent.com/p/AF1QipMsft8CJdtPUZ9SAnNj3xCDS4OEaZnl3IArO6tu=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipPq047VKhqKqGTSgUnZIhnMwyFM7WTxJRmGVe6J=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipM99eVMyOJ8i5sj4Bs0veOmeaSUcXGM7YZ5gcZZ=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipNKPYi9YwYqk3rQuZMHtPlORuDlDDYVmYxDdcMV=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipPSZQ_u13C027OYCI92HUBhGUvYsc6nzdeudgpA=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipOmRfGPeaZZR1VB-gsLcJ3LRC-R1xurwcA552tk=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipNHXwE9NaVKRJACF5G3DhCVZQQVn0wzh7xLMVex=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipO6v-kM8V_mYaUELQHrssrGPCmql7dSh2kGZky3=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipN0CMJ3WOs7bJolJ0ilkmrOfdtxeQBvMPd4_MHr=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipPpYi9cVV52Znd3jKIPH2MveZAi1oGRq9jGZ4A=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipP70-EA14koasvYyBbEtpW_6nd7SHhPo5W2IZJy=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipOjYYSpkJzPtUNnsFCy0_sJx1TavQWWKVDe6pSV=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipPk2QKQErtUGANn0AV5PTY5laRJfZANOLiW-UU1=s680-w680-h510'
  ];

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY || window.scrollX
      const bottomThreshold = scrollY + windowHeight

      const newVisibleImages = images.filter((_, index) => {
        const imageRef = document.getElementById(`image-${index}`);
        if (!imageRef) return false;
        const imageTop = imageRef.offsetTop;
        const imageBottom = imageTop + imageRef.offsetHeight;
        return imageTop < bottomThreshold && imageBottom > scrollY;
      });

      setVisibleImages(newVisibleImages);
    
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Call once initially to load images visible on page load

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };

  }, [])
// Function to handle image click
const handleImageClick = (image) => {
  setSelectedImage(image);
};

// Function to close the selected image
const closeSelectedImage = () => {
  setSelectedImage(null);
};

return (
  <div className='bg-[#ECFFDC]'>
    <div className="container mx-auto py-10  mt-2">
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 border-t-2 border-l-2 border-dotted">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`cursor-pointer  h-48 md:w-64 w-full ${visibleImages.includes(image) ? 'opacity-100' : 'opacity-200'}` }
            onClick={() => handleImageClick(image)}
            style={{ transition: 'opacity 0.5s ease' }}
          />
        ))}
      </div>

      {/* Modal for displaying the selected image */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75"
          onClick={closeSelectedImage}
        >
          <div className="max-w-xl max-h-full overflow-hidden">
            <img
              src={selectedImage}
              alt="Selected Image"
              className="max-w-full max-h-full"
            />
          </div>
        </div>
      )}
    </div>
    <ShowGallery/>
    <VideoGal />
  </div>
);
};

export default GalleryPage;
