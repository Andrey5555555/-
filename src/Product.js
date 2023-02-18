import { useParams } from "react-router-dom";
import { data } from "./CardList/CardList"

const Product = () => {
    const { id } = useParams();
    const product = data.find (function(item){return item.key==id}); 
    console.log (product)
    return (<div>{product.model}</div>)
    
}

export default Product;