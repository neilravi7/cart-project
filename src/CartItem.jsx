import { IoAddCircle, IoRemoveCircle, IoCloseCircle } from "react-icons/io5";

const CartItem = (props) => {
    const {
        item,
        onIncreaseQty,
        onDecreaseQty,
        onItemRemove,
        itemColor
    } = props;

    return (
        <>
            <div className={` card p-0 m-0 mb-1 rounded border-0 ${itemColor}`}>
                <div className="row no-gutters">
                    <div  className="col-md-4">
                        <img src={item.img} className="rounded mt-2"  alt="product" height={170} />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">
                                <b className="text-muted">Price: ${item.price}</b>
                            </p>
                            <p className="card-text">
                                <b className="text-muted">Quantity: {item.qty}</b>
                            </p>
                            <p className="">
                                <span className="px-2">
                                    <IoRemoveCircle
                                        size={25}
                                        color="red"
                                        onClick={() => onDecreaseQty(item)}
                                    />
                                </span>
                                <span className="px-2">
                                    <IoAddCircle 
                                        size={25} 
                                        color="green" 
                                        onClick={() => onIncreaseQty(item)}
                                    /> 
                                </span>
                                <span className="px-2">
                                    <IoCloseCircle 
                                    size={25} 
                                    color="red" 
                                    onClick={() => onItemRemove(item)}
                                />
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );

};



export default CartItem;