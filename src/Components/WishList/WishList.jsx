import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import Loading from "../Loading/Loading";

export default function Wishlist() {
    const { addToWishList, loading, wishlist } = useContext(CartContext);

    useEffect(() => {
    }, []); 

    const handleWishlistClick = (productId) => {
        addToWishList(productId);
    };

    return (
        <>
            {loading ? 
                <Loading />
             : 
                <div>
                    {wishlist.length > 0 ? (
                        <table className="min-w-full divide-y divide-gray-200">
                            <tbody>
                                {wishlist.map((product) => (
                                    <tr key={product._id} className="hover:bg-gray-100">
                                        <td className="p-4">
                                            <img
                                                src={product.imageCover}
                                                className="w-16 md:w-32 max-w-full max-h-full"
                                                alt={product.title}
                                            />
                                        </td>
                                        <td className="p-4">
                                            <Link to={`/productdetails/${product._id}`} className="text-blue-500 hover:underline">
                                                {product.title}
                                            </Link>
                                        </td>
                                        <td className="p-4">
                                            <i
                                                className={`fas fa-heart cursor-pointer ${wishlist.some((item) => item._id === product._id) ? 'text-red-500' : 'text-gray-400'}`}
                                                onClick={() => handleWishlistClick(product._id)}
                                            ></i>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No items in your wishlist.</p> 
                    )}
                </div>
            }
        </>
    );
}
