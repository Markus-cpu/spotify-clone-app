import React from "react";
import "./Body.css";
import HeaderBody from "./HeaderBody/HeaderBody";
import {useDataLayerValue} from "../../../DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Body = ({ spotify }) => {
    const [{discover_weekly}, dispatch] = useDataLayerValue()
    return (
        <div className="body">
            <HeaderBody spotify={spotify} />
            <div className="body__info">
                {/*https://community.spotify.com/t5/image/serverpage/image-id/29759iD05594E4310C41C8?v=1.0*/}
                <img src={discover_weekly?.images[0].url} alt=""/>
                <div className="body__infoText">
                    <strong>PLAYLISTS</strong>
                    <h2>Discover weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon  className="body__shuffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                {/* List of songs */}
            </div>
        </div>
    )
}

export default Body