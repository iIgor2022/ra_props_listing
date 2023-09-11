import PropTypes from "prop-types";

export default function ListingItem(props) {
  const { items } = props;

  if (items.state !== "active") return null;

  const maxTitle = (title) => title.length > 50 ? `${title.slice(0, 50)}...` : title;

  const currency = (code, price) => {
    switch (code) {
      case "USD":
        return `$${price}`;
      case "EUR":
        return `€${price}`;
      default:
        return `${price} ${code}`;
    }
  }

  const quantity = (quantity) => {
    if (quantity < 10) return "level-low";
    if (quantity > 20) return "level-high";
    return "level-medium";
  }

  return (
    <div className="item">
      <div className="item-image">
        <a href={items.url}>
          <img src={items.MainImage.url_570xN}/>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{maxTitle(items.title)}</p>
        <p className="item-price">{currency(items.currency_code, items.price)}</p>
        <p className={`item-quantity ${quantity(items.quantity)}`}>{items.quantity} left</p>
      </div>
    </div>
  );
}

ListingItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string,
    MainImage: PropTypes.object,
    title: PropTypes.string,
    currency_code: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
  })
}