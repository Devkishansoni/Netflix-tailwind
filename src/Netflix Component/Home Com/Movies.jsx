import React from 'react'

export default function Movies() {

    const movie = [
        {
            id : 1,
            poster: "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2019/06/02/hrithik-roshan-s-Super-30-Movie-Latest-poster-.jpg?fit=1080%2C1080&quality=80&zoom=1&ssl=1",
            name : "Super 30"
        },
        {
            id : 2,
            poster: "https://i.pinimg.com/originals/89/25/97/892597db9fe5833e03619cb0871d6fac.jpg",
            name : "Goal"
        },
        {
            id : 3,
            poster: "https://upload.wikimedia.org/wikipedia/en/3/34/The_Big_Bull_Film.jpg",
            name : "Big-Bull"
        },
        {
            id : 4,
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDCIeWafXSa7g1YUNV2d6WFdzltOVm5RJ2E2jFK4mRg&s",
            name : "3 Idiots"
        },
        {
            id : 5,
            poster: "https://m.media-amazon.com/images/I/81nFftoFMfL.jpg",
            name : "Kabir Singh"
        },
        {
            id : 6,
            poster: "https://m.media-amazon.com/images/I/71CKIFNHqzL._AC_UF1000,1000_QL80_.jpg",
            name : "Oppenheimer"
        },
        {
            id : 7,
            poster: "https://images.moviesanywhere.com/e563902ad10731e7a076578952845ba2/5a427de5-3d0b-4841-93ee-c6ad9bb32b86.jpg",
            name : "The Social Network"
        },
        {
            id : 8,
            poster: "https://www.tallengestore.com/cdn/shop/products/MoneyHeist-NetflixTVShowPosterFanArt_e91469e6-1d4b-4e79-82ce-7c3caa3072af.jpg?v=1589268509",
            name : "Money Heist"
        },
        {
            id : 9,
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU9MGHiE7FptYSQxPz9tlf7YihV_NgMzKkk2D_VB6v4A&s",
            name : "Paath-Shaala"
        },
        {
            id : 10,
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNT7HXQ1cRSVJxPyuqBdI2C8ulZB78s_Ruj2UiW8Tyhw&s",
            name : "I am Kalam"
        }


    ]


    return (
        <>
            <div className='w-full h-[100%] px-12 bg-slate-300 py-11 border-2 border-solid border-[navyblue] grid grid-cols-4 gap-5'>
                {movie.slice(0, 10).map((value) => 
                    <div className='w-[300px] h-[300px] rounded-md border-2 border-solid border-[white] relative '>
                        <h1 className='text-[13px] text-black bg-zinc-100 px-1 font-semibold absolute bottom-6 right-12 left-15'>{ value.name}</h1>
                        <img src={ value.poster} className='w-full h-full object-cover'/>
                    </div>
                
                )}
                
                
            </div>  
        </>
  )
}
