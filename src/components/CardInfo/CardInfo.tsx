
interface CardInfoProps {
    text: string;
    imgUrl: string;
    altText: string;
}

const CardInfo = ({text, imgUrl, altText}: CardInfoProps) => {
  return (
    <div>
        <p>{text}</p>
        <img src={imgUrl} alt={altText} />
    </div>
  )
}

export default CardInfo;
