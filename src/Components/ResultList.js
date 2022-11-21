import SearchModal from "./Search";
import { useState } from "react";
import { db } from "../firebase";

export default function ResultList() {
    const [state, setstate] = useState({
        query: '',
        list: db
    })
    return (
        <div className='ResultList'>
            <ul>
          {(state.query === '' ? "" : state.list.map(db => {
            return <li key={db.title}>{db.title}</li>
          }))}
        </ul>
        </div>
    );
};