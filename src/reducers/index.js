import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Forgot About Dre", artist: "Dr. Dre", duration: "3:42" },
    { title: "No Diggity", artist: "Blackstreet", duration: "5:03" },
    { title: "All Star", artist: "Smash Mouth", duration: "3:21" },
    {
      title: "I Want It That Way",
      artist: "Backstreet Boys",
      duration: "3:33"
    },
    { title: "No Roots", artist: "Alice Merton", duration: "3:57" },
    { title: "It Was a Good Day", artist: "Ice Cube", duration: "5:12" },
    { title: "Juicy", artist: "Notorious B.I.G.", duration: "4:15" },
    { title: "Busta Rhymes", artist: "Qveen Herby", duration: "3:01" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
