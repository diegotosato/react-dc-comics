export default function Card(props) {
    const { thumb, title, series } = props
    return (
        <>
            <div className="col">
                <div className="card rounded-0 border-0 bg-transparent">
                    <img className="card-img-top" src={thumb} alt={title} />
                    <div className="card-body p-0 pt-2">
                        <div className="card-title m-0">{series}</div>
                    </div>
                </div>
            </div>
        </>
    )
}