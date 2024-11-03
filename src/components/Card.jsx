import { Link, useLocation } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";


const Card = ({ coffee, handleRemove }) => {

    const { pathname } = useLocation()

    const { id, image, name, category, origin, type, rating, popularity } = coffee || {}

    return (
        <div className="flex relative">
            {/* <img src={image} alt="" /> */}
            {/* <h2>{name}</h2> */}
            {/* <p>{category}</p> */}
            <Link
                to={`/coffee/${id}`}
                className="transition hover:scale-105 shadow-xl rounded-xl overflow-hidden">

                <figure className="w-full h-48 overflow-hidden">
                    <img src={image} alt="" />
                </figure>
                <div className="p-4">
                    <h1>Name: {name}</h1>
                    <p>Category: {category}</p>
                    <p>Type: {type}</p>
                    <p>Origin: {origin}</p>
                    <p>Rating: {rating}</p>
                    <p>Popular: {popularity}</p>
                </div>
            </Link>

            {
                pathname === "/dashboard" &&
                <div onClick={()=> handleRemove(id)} className="absolute p-3 bg-warning rounded-full cursor-pointer -top-5 -right-5">
                    <FaTrashAlt size={20}></FaTrashAlt>
                </div>
            }

        </div>
    );
};

export default Card;