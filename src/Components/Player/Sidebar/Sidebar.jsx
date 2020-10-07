import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions/SidebarOptions";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import {useDataLayerValue} from "../../../DataLayer";

const Sidebar = () => {
    const [{ playlists }] = useDataLayerValue()
    return (
        <div className="sidebar">
            <img className="sidebar__logo"
                 src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                 alt="#"
            />
            <SidebarOptions Icon={HomeOutlinedIcon} option="Home" />
            <SidebarOptions Icon={SearchOutlinedIcon} option="Search" />
            <SidebarOptions Icon={LibraryMusicIcon} option="Your library" />

            <br/>
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr/>
            {playlists?.items?.map((playlist) => (
                <SidebarOptions option={ playlist.name } />
            ))}
        </div>
    )
}

export default Sidebar