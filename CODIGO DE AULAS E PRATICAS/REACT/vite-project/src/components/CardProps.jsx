function CardProps(props){
    return (
    <div>
    <h1>{props.titulo}</h1>
    <img width={props.w} src={props.img} alt="" />
    </div>
    )
   }
   export default CardProps;