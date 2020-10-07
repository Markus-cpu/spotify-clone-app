import React from "react";
import "./HeaderBody.css";
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from "@material-ui/core"
import {useDataLayerValue} from "../../../../DataLayer";
const HeaderBody = ({}) => {
    const [{user}, dispatch] = useDataLayerValue()
    return (
        <div className="headerBody">
            <div className="headerBody__left">
                <SearchIcon />
                <input
                    type="text"
                    placeholder="Search for albums, songs, artists..."
                />
            </div>
            <div className="headerBody__right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default HeaderBody