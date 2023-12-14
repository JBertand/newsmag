import img from '../assets/news.jpg'
export const NewsItem = ({title, description, src, url}) => {
    return (
        <div className="card bg-dark text-light mb-1 my-2 mx-2 px-2 py-2" style={{ maxWidth:'32%' }}>
            <img src={src?src:img} style={{height: "200px", width: "100%"}} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0,50)}</h5>
                    <p className="card-text">{description ? description.slice(0,90) : "News is a report of a current event. It is information about something that has just happened."}</p>
                    <a href={url} className="btn btn-primary">Read more</a>
                </div>
        </div>
    )
}
