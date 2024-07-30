import HomeComponent from "../components/Home/HomeComponent"
import pizza1 from '../components/Home/Pizza1.jpg';
import pizza2 from '../components/Home/Pizza2.jpg';
import pizza3 from '../components/Home/Pizza3.jpg';

const HomePage = () => {
    return (
        <>
        <HomeComponent
            title="Bem vindo à Pizzaria!"
            descricao="Temos pizza em "
            imagemUrl={pizza1}
            imagemAlt="Pizza"
        />
        <HomeComponent
            title="Pizzao boa!"
            descricao="Com queijo"
            imagemUrl={pizza2}
            imagemAlt="Pizza" 
        />
        <HomeComponent
            title="Pizza barata!"
            descricao="Com tomate"
            imagemUrl={pizza3}
            imagemAlt="Pizza"
        />
        </>
    )
}
export default HomePage;