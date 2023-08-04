import Navbar from "../features/Navbar/Navbar";
import ProductList from "../features/ProductList/ProductList";

function Home() {
    return (  
        <Navbar>
            <ProductList></ProductList>
        </Navbar>
    );
}

export default Home;