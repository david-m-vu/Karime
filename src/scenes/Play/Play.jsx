import NavBar from "../../components/Navbar/Navbar.jsx"
import Carousel from "../../components/Carousel/Carousel.jsx"

const Play = () => {
    return (

        <div className="w-full h-full">
            <NavBar currentScreen="play"/>
            <Carousel/>
            Content For Play
        </div>
    )
}

export default Play;