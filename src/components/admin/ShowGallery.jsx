import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './gallery.css'
import toast from 'react-hot-toast';


// const ShowGallery = () => {
//   // State to keep track of the selected image
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [visibleImages, setVisibleImages] = useState([]);
//   const [galleryData, setGalleryData] = useState(null);

//   useEffect(() => {
//     // Function to fetch gallery data from the backend
//     const fetchGalleryData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/v1/admin/getallpics');
//         // Assuming the response data contains galleryData object
//         setGalleryData(response.data.savedGallery);
//         console.log(response)
//       } catch (error) {
//         console.error('Error fetching gallery data:', error);
//       }
//     };

//     fetchGalleryData();

//     const handleScroll = () => {
//       const windowHeight = window.innerHeight;
//       const scrollY = window.scrollY || window.scrollX
//       const bottomThreshold = scrollY + windowHeight

//       if (galleryData && galleryData.images){

//         const newVisibleImages = galleryData.images.filter((_, index) => {
//             const imageRef = document.getElementById(`image-${index}`);
//             if (!imageRef) return false;
//             const imageTop = imageRef.offsetTop;
//             const imageBottom = imageTop + imageRef.offsetHeight;
//             return imageTop < bottomThreshold && imageBottom > scrollY;
//           });
//           setVisibleImages(newVisibleImages);
//       }

      
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Call once initially to load images visible on page load

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [galleryData]);

//   // Function to handle image click
//   const handleImageClick = (image) => {
//     setSelectedImage(image);
//   };

//   // Function to close the selected image
//   const closeSelectedImage = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <div className='bg-[#ECFFDC] h-[90vh]'>
//       <div className="container mx-auto py-10 mt-2">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 border-t-2 border-l-2 border-dotted">
//           {galleryData && galleryData.images.map((image, index) => (
//             <img
//               key={index}
//               src={image.secure_url}
//               alt={galleryData.title}
//               className={`cursor-pointer h-48 md:w-64 w-full ${visibleImages.includes(image.secure_url) ? 'opacity-100' : 'opacity-200'}` }
//               onClick={() => handleImageClick(image.secure_url)}
//               style={{ transition: 'opacity 0.5s ease' }}
//             />
//           ))}
//         </div>

//         {/* Modal for displaying the selected image */}
//         {selectedImage && (
//           <div
//             className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75"
//             onClick={closeSelectedImage}
//           >
//             <div className="max-w-xl max-h-full overflow-hidden">
//               <img
//                 src={selectedImage}
//                 alt="Selected Image"
//                 className="max-w-full max-h-full"
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
const ShowGallery = () => {
    const [galleryData, setGalleryData] = useState([]);

    

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/admin/getAllPics');
        setGalleryData(response.data.allGallery);
        console.log(response.data)
        //console.log(response.data.allGallery._id)
        await toast.success('Images fetched successfully')
      } catch (error) {
        console.error('Error fetching gallery data:', error);
        toast.error('Failed to fetch notices. Please try again later.');
      }
    };

    fetchGalleryData();
  }, []);
  const delPics = async(galleryId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/v1/admin/deletepic/${galleryId}`)
     
      if(response.status===200 &&response.data.success){
        //setGalleryData(galleryData.filter((school)=>school._id !== id));
        const updatedGalleryData = galleryData.filter(item=>item._id!==galleryId)
        setGalleryData(updatedGalleryData)
        await toast.success('Image delete Successfully')
       
      }
      else{
        toast.error('Failed to delete Image')
        console.error('Failed to delete Image:', response.data.message);
      }
    } catch (error) {
      console.error('Error deleting notice:', error.message);
    }
  }

  return (
    <div  className="gallery-container">
      <h1>Gallery</h1>
      <div  className="gallery">
        {galleryData.map((item, index) => (
          <div key={index} className="gallery-item">
            <h2 className='text-green-600 font-semibold text-2xl'>{item.title}</h2>
            <p className='text-gray-600 text-justify'>{item.description}</p>
            <div className="image-container">
              {item.images.map((image, imageIndex) => (
                <img key={imageIndex} src={image.secure_url} alt={`Image ${index + 1}`} className="gallery-image" />
              ))}
            </div>
            <button className='btn bg-red-400' onClick={()=>delPics(item._id)}>Delete</button>
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default ShowGallery;
