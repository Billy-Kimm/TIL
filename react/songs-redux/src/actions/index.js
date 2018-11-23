// Action Creator :  function
// Action : object

export const selectSong = (song) => {
    return {    // returns action
        type: 'SONG_SELECTED',
        payload: song
    }
};



