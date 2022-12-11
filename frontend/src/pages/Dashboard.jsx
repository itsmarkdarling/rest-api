import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Paper } from "@mui/material";
import EntryForm from "../components/EntryForm";
import EntryItem from "../components/EntryItem";
import Spinner from "../components/Spinner";
import {getEntries, reset} from '../features/entries/entrySlice'

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.user);
  const user = useSelector((state) => state.auth);
  const { entries, isLoading, isError, message } = useSelector(
    (state) => state.entries
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!token) {
      navigate("/login");
    } else {
      dispatch(getEntries())
    }

    return () => {
      dispatch(reset())
    }
  }, [user, token, navigate, isError, message, dispatch]);

if (isLoading) {
  return <Spinner />
}

  return (
    <>
      <Paper elevation={10}>
        <Typography variant="h1" className="center" sx={{textAlign: 'center'}}>
          Welcome<br /> {user.user.name}
        </Typography>
        <Typography variant="body" className="center" gutterBottom>
          Entries Dashboard
        </Typography>
      </Paper>

      <EntryForm />
      {entries.length > 0 ? (<div><Paper elevation={10}>{entries.map((entry) => (<EntryItem key={entry._id} entry={entry} />))}</Paper></div>) : (<h3 className="center">You do not have any entries</h3>)}
    </>
  );
}

export default Dashboard;
