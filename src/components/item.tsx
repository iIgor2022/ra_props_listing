import { IItem } from "../interface/IItem";

const Item: React.FC<IItemProps> = ({ item }) => {
  const title = 
    item.title 
      ? item.title?.length > 50
        ? `${item.title.slice(0, 50)}...`
        : item.title
      : undefined
  
  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage?.url_570xN}/>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title}</p>
        <p className="item-price">
          {
            item.currency_code === "USD" ? "$"
              : item.currency_code === "EUR" ? "€"
                : item.currency_code
          }
          {item.price}
        </p>
        <p className={`item-quantity level-${
          item.quantity
            ? item.quantity <= 10 
              ? "low"
              : item.quantity <= 20 ? "medium" : "high" 
            : undefined         
        }`}>{item.quantity} left</p>
      </div>
    </div>
  )
}

export default Item

interface IItemProps {
  item: IItem
}