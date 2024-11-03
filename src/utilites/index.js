
// step : 2

import toast from "react-hot-toast"
import { json } from "react-router-dom"

// get all coffees from local storage
const getAllFavourites = () => {
    const all = localStorage.getItem('favorites')
    // const favorites = JSON.parse(all)    // eivabe dile null asbe tai ata conditionally dite hobe
    if (all) {
        const favorites = JSON.parse(all)
        return favorites
    }
    else {
        return []
    }
}

// step: 1
// add a coffee to local stroage
const addFavourite = (coffee) => {
    // console.log(coffee);

    // get all previously saved coffee
    const favourites = getAllFavourites()

    // ak id 2 bar jeno repeat na hoy tar jonno
    const isExist = favourites.find(item => item.id == coffee.id)
    if (isExist)
        return toast.error('Coffee Already Exist!');             // jodi maching hoy tahole return

    favourites.push(coffee)
    // coffee ke local storage a save korbo
    // local storage a array ke set korte chaile stringify kore set korte hoy
    localStorage.setItem('favorites', JSON.stringify(favourites))
    toast.success('Successfully Added!');

}

// step: 3
// remove a coffee from local storage
const removeFavourite = (id) => {
    // get all previously saved coffee data
    const favourites = getAllFavourites()
    const remaining = favourites.filter(coffee => coffee.id != id)

    localStorage.setItem('favorites', JSON.stringify(remaining))
    toast.success('Successfully Removed!');
}



// export 
export { addFavourite, getAllFavourites, removeFavourite }