import React from 'react'

const NewsItem = (props) => {
    const { source, urlToImage, title, description, url, author, publishedAt } = props
    return (
        <div className="card mt-3 mb-3" style={{ height: "32rem" }}>
            <div className="card-header text-center">{source}</div>
            <img style={{ height: '172px' }} src={urlToImage ? urlToImage : "https://media.istockphoto.com/id/1181778359/vector/breaking-news-vector-background.jpg?s=612x612&w=0&k=20&c=jPg0fAK-Itq51pmv_sRp7UspRhQNY-H_3h8OSB85KgE="} className="card-img-top" alt="Profile" />
            <div className="card-body p-3 pb-0">
                <h5 className="card-title">{title ? title.slice(0, 45) : ""}...</h5>
                <p className="card-text  pb-0">{description ? description.slice(0, 75) : ""}...</p>
                <a href={url} target="_blank" rel="noreferrer" className="btn-link text-danger text-decoration-none">Read more...</a>
            </div>
            <div className="card-footer text-muted text-center">
                <div>Author: <span className='small'>{author ? author.slice(0, 25) : "N/A"}..</span></div>
                <div>Dated: <span className='small'>{new Date(publishedAt).toGMTString()}</span></div>
            </div>
        </div>
    )
}

export default NewsItem
