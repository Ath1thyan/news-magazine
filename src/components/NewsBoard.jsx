import { useEffect, useState } from "react"
import NewsItem from "./NewsItem"

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=a03b1f0241a842648bf9b441861fee1f`
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
            <NewsItem title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewsBoard
