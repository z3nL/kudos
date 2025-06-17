import '../CSS/BoardCard.css'

const BoardCard = ({ boardID, title, category, author, description }) => {
    return (
        <>

        <article className="BoardCard">
            <img src="/src/assets/react.svg" />
            <h3>{title}</h3>
            <p><b>{category}</b></p>
            <p><b>Author: </b>{author}</p>
            <p><b>Description: </b>{description}</p>
            <div className='boardCardButtons'>
                <button>View Board</button>
                <button>Delete Board</button>
            </div>
        </article>
        
        </>

    )
}

export default BoardCard;