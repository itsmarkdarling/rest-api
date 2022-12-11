import { useDispatch } from "react-redux";
import { deleteEntry } from "../features/entries/entrySlice";

function EntryItem({ entry }) {
  const dispatch = useDispatch();

  return (
    <div className="entry">
      <div className="center">
        {new Date(entry.createdAt).toLocaleString("en-US")}
      </div>
      <button className="delete-button" onClick={() => dispatch(deleteEntry(entry._id))}>X</button>
      <h2 className="center">{entry.text}</h2>
    </div>
  );
}

export default EntryItem;
