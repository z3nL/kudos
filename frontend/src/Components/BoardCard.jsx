import '../CSS/BoardCard.css'

const BoardCard = () => {
    return (
        <>

        <article className="BoardCard">
            <img src="/src/assets/react.svg" />
            <h3>Title</h3>
            <p><b>Category</b></p>
            <div className='boardCardButtons'>
                <button>View Board</button>
                <button>Delete Board</button>
            </div>
        </article>
        
        </>

    )
}

export default BoardCard;