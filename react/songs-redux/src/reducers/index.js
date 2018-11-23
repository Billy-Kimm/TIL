import {combineReducers} from 'redux';

const songsReducer = (action) => {
  return [
      {title: 'yellow', artist: 'coldplay', duration: '3:50'},
      {title: 'wonderwall', artist: 'oasis', duration: '4:30'},
      {title: 'a day in the life', artist: 'beatles', duration: '3:00'},
      {title: 'somewhere only we know', artist: 'keane', duration: '4:00'},
  ]  
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    } else {
        return selectedSong;
    }
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});