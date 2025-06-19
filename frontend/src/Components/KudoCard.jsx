import '../CSS/KudoCard.css'
import '../CSS/GIFs.css'

// Some mild drilling :|
const KudoCard = ({ kudoID, activeBoardID, title, description, gifSource, owner, voteCount, handleDelete, handleIncrement }) => {
    return (
        <article className='KudoCard'>
            <h3>{title}</h3>
            { gifSource &&
                <video className='gifEmbedCard' src={gifSource} autoPlay loop></video>
            }
            <p>{description}</p>
            <p>{owner}</p>
            <div className='kudoCardButtons'>
                <button onClick={() => handleIncrement(activeBoardID, kudoID)}>{`Upvote: ${voteCount}`}</button>
                <button onClick={() => handleDelete(activeBoardID, kudoID)}>Delete</button>
            </div>
        </article>
    )
}

export default KudoCard;