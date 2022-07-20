import classes from './Cart.css';
const Cart = props => {
    const cartItems = (
        <ul className={classes['cart-items']}>
            {[{ id: 'c1', name: 'Pizza', price: 10, amount: 1 }].map(item => <li>{item.name}</li>)}
        </ul>
    );

    return <div>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']}>Close</button>
            <button className={classes.button}></button>
        </div>
    </div>
}
export default Cart;