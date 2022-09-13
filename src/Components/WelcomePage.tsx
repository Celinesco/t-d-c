const WelcomePage: React.FC = () => {
    const handleClick = () => {

    }
    return (
        <div>
            <h2>Welcome to the to do list</h2>
            <p>please sign in </p>
            <button onClick={handleClick}>SignIn</button>
        </div>
    )
}

export default WelcomePage;