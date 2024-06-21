const NewsItem = ({ title, description, src, url }) => {
    return (
      <div className="card bg-dark text-light mb-3 w-100">
        <img src={src ? src : "https://www.sag.at/wp-content/uploads/2020/05/news.jpg"} className="card-img-top" alt="News Image" />
        <div className="card-body">
          <h5 className="card-title">{title.length > 50 ? `${title.slice(0, 50)}...` : title}</h5>
          <p className="card-text">{description ? description.length > 50 ? `${description.slice(0, 50)}...` : description : "Description not available"}</p>
          <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More...</a>
        </div>
      </div>
    )
  }
  
  export default NewsItem
  