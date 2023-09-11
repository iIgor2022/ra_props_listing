import PropTypes from "prop-types";
import ListingItem from "./listingItem";

export default function Listing(props) {
  const { items = [] } = props;

  return (
    <div className="item-list">
      {items.map(item => <ListingItem key={item.listing_id} items={item}/>)}
    </div>
  )
}

Listing.propTypes = {
  item: PropTypes.shape({
    listing_id: PropTypes.number,
    url: PropTypes.string,
    MainImage: PropTypes.object,
    title: PropTypes.string,
    currency_code: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
  })
}