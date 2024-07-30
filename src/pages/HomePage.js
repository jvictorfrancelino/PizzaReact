import HomeComponent from '../components/home/HomeComponent';
import pizza1 from '../components/home/Pizza1.jpg';
import pizza2 from '../components/home/Pizza2.jpg';
import pizza3 from '../components/home/Pizza3.jpg';

const HomePage = () => {
    return (
        <>
        <HomeComponent
            title="Welcome"
            description="Welcome to our pizzeria! Enjoy a cozy atmosphere and delicious pizzas made with love. Join us for a memorable dining experience."
            imageUrl={pizza1}
            imageAlt="Pizza"
        />
        <HomeComponent
            title="Quality of Our Pizzas"
            description="Our pizzas are crafted with the finest ingredients, ensuring every bite is a burst of flavor. From classic recipes to unique creations, we guarantee satisfaction."
            imageUrl={pizza2}
            imageAlt="Pizza" 
        />
        <HomeComponent
            title="Fast Delivery & Customer Service"
            description="We prioritize speedy delivery and exceptional customer service. Your satisfaction is our top priority, ensuring you receive hot, fresh pizzas right to your door."
            imageUrl={pizza3}
            imageAlt="Pizza"
        />
        </>
    )
}
export default HomePage;