module.exports = () => {

    const moviesSeatPlacesArr = []

        for(let i = 0; i < 5; i++) {

            const seatPlacesArr = []

            for(let j = 0; j < 50; j++) {
                const places = {
                    seatNumber: j + 1,
                    reserved: "",
                    price: 7.99
                }
                seatPlacesArr.push(places)
            }
            moviesSeatPlacesArr.push(seatPlacesArr)    
        }

    const movies = [

        {
            title: "The Gaudi Code",
            image: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71M+nD0wzrL._AC_UY327_FMwebp_QL65_.jpg",
            census: 14,
            year: 2015,
            genre: "Documentary, Special Interest",
            seats: moviesSeatPlacesArr[0],
            ocupiedSeats: 0
        },
        {
            title: "Medium",
            image: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71UaoLPRk+L._SY500_.jpg",
            census: 16,
            year: 2017,
            genre: "Television, Horror/Television",
            seats: moviesSeatPlacesArr[1],
            ocupiedSeats: 0
        },
        {
            title: "Princesses of the World",
            image: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71NRSPtqUHL._AC_UY327_FMwebp_QL65_.jpg",
            census: 14,
            year: 2010,
            genre: "Documentary",
            seats: moviesSeatPlacesArr[2],
            ocupiedSeats: 0
        },
        {
            title: "Stalker in the Attic",
            image: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/715ao53RnFL._AC_UY327_FMwebp_QL65_.jpg",
            census: 18,
            year: 2020,
            genre: "Suspense",
            seats: moviesSeatPlacesArr[3],
            ocupiedSeats: 0
        },
        {
            title: "Soul",
            image: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/91LVqDbs8bL._AC_UY327_FMwebp_QL65_.jpg",
            census: 0,
            year: 2020,
            genre: "Animation",
            seats: moviesSeatPlacesArr[4],
            ocupiedSeats: 0
        }

    ]

    return movies

}