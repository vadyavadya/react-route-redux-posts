import React, { useState } from "react";

export default function BlogFilter({ searchParams, latestParams, setSearchParams }) {

    const [search, setStateSearch] = useState(searchParams);
    const [latest, setStateLatest] = useState(latestParams);

    function handelSubmit(event) {
        event.preventDefault();
        const query = event.target.search.value;
        const checked = event.target.latest.checked;
        let params = {};
        if (query.length) params.search = query;
        if (checked) params.latest = checked;
        setSearchParams(params);
    }

    return (
        <form onSubmit={handelSubmit} >
            <input type="text" name="search" value={search} onChange={e => setStateSearch(e.target.value)} />
            <label style={{ padding: '0 10px' }}>
                <input type="checkbox" name="latest" checked={latest} onChange={e => setStateLatest(e.target.checked)} />
                "New post"
            </label>
            <input type="submit" value='Поиск' />
        </form>
    )
}