function Card() {
    return (
        <div>
            <h1>Carro Ferrari</h1>
            <img width='500' src="data:image/jpeg;base64,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" alt="Carro Ferrari" />

        </div>


    )

}
export default Card;