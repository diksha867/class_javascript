import react from 'react';

function Article(props) {
    const [count, setCount] = react.useState(0);

    const handleIncreamnet = () => {
        setCount(count + 1);
    }   
    return (
        <div>
            <h1>Article</h1>
            <h3>{props.title}</h3>
            <p>lorem ipsum dolor sit amet</p>
            <h2>{count}</h2>
            <button onClick={handleIncreamnet}>Increment</button>
            {/* <button onClick={handleDecrement}>Decrement</button> */}
        </div>
        
    )

}

export default Article;




