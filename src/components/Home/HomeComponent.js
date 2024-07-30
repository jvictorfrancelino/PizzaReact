import './HomeComponent.css';


function HomeComponent({title, description, imageUrl, imageAlt}) {
    return (
      <>
       <div className="home-component">
        <div className="text-side">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="image-side">
          <img src={imageUrl} alt={imageAlt} />
        </div>
      </div>
      </>
    );
  }
  
  export default HomeComponent;