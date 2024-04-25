// import React, { useEffect, useState } from 'react'

// export default function Skills() {
//     const data = [
//         {
//             id: 1,
//             image: 'https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png',
//             technology: 'ReactJS',
//             availability: '481',
//             waiting: '223',
//             verified: '120'
//         },
//         {
//             id: 2,
//             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5CxaiMKVpp-xU149--_TTWrb_gv7RvPMQ-zutBpYSUQ&s',
//             technology: 'JavaScript',
//             availability: '423',
//             waiting: '324',
//             verified: '620'
//         },
//         {
//             id: 3,
//             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-qmE1YQb5HAfokaiMg790nzkhdrbXHI4N7agV_cSng&s',
//             technology: 'Css',
//             availability: '323',
//             waiting: '323',
//             verified: '320'
//         },
//         {
//             id: 4,
//             image: 'https://www.thoughtco.com/thmb/8K6rUSGksWB0SR3tyckgNdnj9cI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/css3-57b597e85f9b58b5c2b338de.png',
//             technology: 'CSS3',
//             availability: '403',
//             waiting: '423',
//             verified: '220'
//         },
//         {
//             id: 5,
//             image: 'https://austingil.com/wp-content/uploads/HTML-Blog-Cover.png',
//             technology: 'Html',
//             availability: '523',
//             waiting: '365',
//             verified: '380'
//         },
//         {
//             id: 6,
//             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsubI1xnS2EsbFC7IKOtHXy3o2yp5zNGHX8-mLk-0nVw&s',
//             technology: 'HTML5',
//             availability: '523',
//             waiting: '423',
//             verified: '390'
//         },
//         {
//             id: 7,
//             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQMAgy_XeSr2CmOITAysaZtDxsVUSTSYtSM2EKE5ivhg&s',
//             technology: 'Tailwind',
//             availability: '228',
//             waiting: '102',
//             verified: '200'
//         },
//         {
//             id: 8,
//             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBiKa-skXDZ0Pg4iNPz_75zWr2aoKD-cRnd4qzemtUfg&s',
//             technology: 'Angular',
//             availability: '328',
//             waiting: '110',
//             verified: '300'
//         },
//         {
//             id: 9,
//             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoozrztviud0ddLb2c0XvfQpvzCszUoyQWgogEFM_SEg&s',
//             technology: 'Azur',
//             availability: '428',
//             waiting: '200',
//             verified: '210'
//         },
//         {
//             id: 10,
//             image: 'https://miro.medium.com/v2/resize:fit:1400/1*jnQW5PKug7h6sv-u6MhfzA.png',
//             technology: 'Golang',
//             availability: '28',
//             waiting: '110',
//             verified: '400'
//         },
//         {
//             id: 11,
//             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0F3ZosGbgdBGnMWo7d0L1qafP83vqo-jhh8LwG41emw&s',
//             technology: 'MongoDB',
//             availability: '176',
//             waiting: '301',
//             verified: '111'
//         },
//         {
//             id: 12,
//             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyyREL6MP7Jy5J5uT7YZ8deQXPa4wM5ZkCxgIsqWEFbA&s',
//             technology: 'NextJS',
//             availability: '214',
//             waiting: '423',
//             verified: '390'
//         },
//         {
//             id: 13,
//             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpmh2lpeUbnwFa4s9_DrqSujEPMfqn6IL8eJuEX1r6Dw&s',
//             technology: 'PostgreSQL',
//             availability: '106',
//             waiting: '101',
//             verified: '201'
//         },
//         {
//             id: 14,
//             image: 'https://image.similarpng.com/very-thumbnail/2021/12/Python-programming-logo-on-transparent-background-PNG.png',
//             technology: 'Python',
//             availability: '122',
//             waiting: '222',
//             verified: '203'
//         },
//         {
//             id: 15,
//             image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png',
//             technology: 'SQL',
//             availability: '28',
//             waiting: '302',
//             verified: '111'
//         },
//         {
//             id: 15,
//             image: 'https://www.mindinventory.com/blog/wp-content/uploads/2022/10/flutter-3.png',
//             technology: 'Flutter-3',
//             availability: '203',
//             waiting: '200',
//             verified: '190'
//         }
//     ];
//     const [filteredData, setFilteredData] = useState([])
//     const [matchedItem,setMatchedItem] = useState([])

//     const service = data.find(item => item.id === parseInt(id));
//     const [searchQuery, setSearchQuery] = useState(service ? service.technology : '');
//     const [isPopUpOpen, setIsPopUpOpen] = useState(false);

//     useEffect(() => {
//         if (service) {
//             handlesearch(searchQuery)
//         }
//     }, [service])
    
//     const handlesearch = (query) => {
//         const lowerCaseQuery = query.toLowerCase();
//         const filtered = data.filter(item =>
//             item.technology.toLowerCase().includes(lowerCaseQuery)
//         );
//         setFilteredData(filtered)
//         setMatchedItem(filtered.map(item => item.id))
//     };
    
//     return (
//         <>
//             <div className='bg-zinc-50 w-full h-[100vh] px-11 py-11 grid grid-cols-4 gap-4'>
//                 <input  placeholder='enter value' type='text'/>

//                 {data.map((value, index) =>
//                     <div key={index} className='w-fit h-fit bg-purple-200 px-5 py-5 rounded-xl border-6 border-solid border-[#ea54bf]'>
//                         <img className='w-[140px] h-[70px] rounded-xl' src={value.image} />
//                         <div className='text-center mt-3'>
//                             <h1 className='text-[23px] text-black font-bold '>{value.technology}</h1>
//                             <p className='text-[20px] text-black font-bold '>{value.availability}</p>
//                             <p className='text-[18px] text-blue-500 font-semibold '>{value.waiting}</p>
//                             <p className='t
//                         </div>
//                         ext-[14px] text-blue-900 font-semibold '>{value.verified}</p>

//                         </div>
//                     </div>
//                 )}
//             </div>
//         </>

//     )
// }
