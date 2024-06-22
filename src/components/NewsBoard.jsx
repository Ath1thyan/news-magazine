import { useEffect, useState } from "react"
import NewsItem from "./NewsItem"

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&max=10&apikey=b3a96545ec3364833b01ba7e4e8c3cf7`
    fetch(url)
      .then(res => res.json())
      .then(data => setArticles(data.articles))
  }, [category])

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      <div className="row">
        {articles.map((news, index) => (
          <div key={index} className="col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch">
            <NewsItem title={news.title} description={news.description} src={news.image} url={news.url} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewsBoard
