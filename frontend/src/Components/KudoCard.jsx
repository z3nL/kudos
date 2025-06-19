import '../CSS/KudoCard.css'

const KudoCard = () => {
    return (
        <article className='KudoCard'>
            <h3>Title</h3>
            <p>Image here</p>
            <p>Description</p>
            <p>Owner</p>
            <div className='kudoCardButtons'>
                <button>Upvote</button>
                <button>Delete</button>
            </div>
        </article>
    )
}

export default KudoCard;