import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeCards = () => {

    // onclick button er jonno
    const navigate = useNavigate()

    const data = useLoaderData()
    // console.log(data);

    // useParams hook use kore home er children ke ana hoise
    const { category } = useParams()

    const [coffees, setCoffees] = useState([])
    useEffect(() => {
        if (category) {
            // akhane notun akta data array nite hobe tarpor filter korte hobe
            const filterByCategory = [...data].filter(coffee => coffee.category === category)
            setCoffees(filterByCategory)
        }
        else {
            setCoffees(data.slice(0, 6))
        }
    }, [data, category])




    // console.log(category);

    return (
        <>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">

                {
                    coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
                }

            </div>
            <button onClick={()=> navigate('/coffees')} className="my-6 btn btn-warning">View All</button>

        </>
    );
};

export default CoffeeCards;