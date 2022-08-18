import { useParams } from "react-router-dom"

function FoodtruckDetail() {
    const { foodtruckId } = useParams()
    console.log(foodtruckId)
    return(
        <>
        <form >
            <div className="name">
                <label>Nom de la societe</label>
                <br />
                <input type="text" />
            </div>
        </form>
        </>
    )
}
export default FoodtruckDetail