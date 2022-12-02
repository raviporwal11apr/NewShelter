import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


const NewsComp = (props) => {
    const { setProgress, category } = props;
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(false);
    let pageSize = 8;

    const loadData = async () => {
        setLoading(true)
        setProgress(30)
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&category=business&page=${page}&pageSize=${pageSize}&apiKey=3c7b1f9216e24fb4b0f9ce7eabc74c5d`
        setProgress(50)
        let response = await fetch(url);
        let parsedData = await response.json()
        setProgress(70)
        setArticles(parsedData.articles)
        setLoading(false)
        setProgress(100)
        setTotalResults(parsedData.totalResults)
    }

    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.substr(1, string.length)
    }

    useEffect(() => {
        loadData();
        document.title = `NewsShelter- ${capitalize(category)}`
        // eslint-disable-next-line
    }, [])


    const fetchMoreData = async () => {
        setPage(page + 1)
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&category=business&page=${page + 1}&pageSize=${pageSize}&page&apiKey=3c7b1f9216e24fb4b0f9ce7eabc74c5d`
        setLoading(true)
        let response = await fetch(url);
        let parsedData = await response.json()
        setArticles(articles.concat(parsedData.articles))
        setLoading(false)
        setTotalResults(parsedData.totalResults)
    }

    return (
        <>
            <h3 className="text-center fs-1 fw-bold mt-5 pt-4">Top Headlines- {capitalize(category)}</h3>
            {loading ? < Spinner /> : null}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={< Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-3" key={element.url}>
                                <NewsItem source={element.source.name} urlToImage={element.urlToImage} title={element.title} description={element.description} url={element.url} author={element.author} publishedAt={element.publishedAt} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

export default NewsComp
