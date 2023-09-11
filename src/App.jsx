
import './App.css';
import Listing from './components/listing';
import items from "./data/etsy.json";

export default function App() {
  return (
    <Listing items={items}/>
  );
}
