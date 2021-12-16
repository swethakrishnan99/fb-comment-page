import React, { useEffect, useState } from 'react';

export default function GifSearch(props) {
    const { addGif } = props;
    const GIPHY_API = "https://api.giphy.com/v1/gifs/search?api_key=3UQdx3yGmQyKk7dwcbGFHizAxYmlH79y&limit=10&offset=0&q=";
    let [search, setSearch] = useState("");
    let [gifs, setGifs] = useState([])
    let searchGif = () => {
        if (search.length >= 0) {
            fetch(GIPHY_API + search).then((res) => {
                return res.json();
            }).then((result) => {
                setGifs(result.data.map((gif) => { return gif.images.fixed_height.url; }))
            }).catch(() => { alert("something went wrong") })
        }
    }

    useEffect(() => {
        searchGif()
    }, [search])

    return (
        <div className='gif-container'>

            <div className="header-gif">
                <input type="text" placeholder='Search GIF' value={search} onChange={e => { setSearch(e.target.value); }} />
            </div>
            <div className="result">
                <div className="list">
                    {
                        gifs.map((gif, index) => {
                            return (<div className='item' key={index} onClick={addGif}>
                                <img src={gif} alt="" />
                            </div>)
                        })
                    }
                </div>
            </div>

        </div>
    )
}
// 3UQdx3yGmQyKk7dwcbGFHizAxYmlH79y
