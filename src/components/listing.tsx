import Item from "./item";
import data from "../data/etsy.json";
import { IItem } from "../interface/IItem";

const Listing = () => {
  const items: IItem[] = data.filter(item => item.state === "active");

  return (
    <div className="item-list">
      {
        items.map(item => <Item item={item} key={item.listing_id}/>)
      }
    </div>
  )
}

export default Listing