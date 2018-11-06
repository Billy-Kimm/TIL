/* 1. 검색 */


/* 2. SoundCloud API  사용하기 */
const SoundCloudAPI = {
    init: () => {
        SC.initialize({
            client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
        });
    },
    getTrack: (inputValue) => {
        SC.get('/tracks', {
            q: inputValue
        }).then(function (tracks) {
            SoundCloudAPI.rendertracks(tracks);
        });
    },
};

SoundCloudAPI.init();
//SoundCloudAPI.getTrack('coffee');

/* 3. 카드 보여주기 */
SoundCloudAPI.rendertracks = (tracks) => {

    tracks.forEach((track) => {
        
        const card = document.createElement('div');
        card.classList.add("card");
    
        const imageDiv = document.createElement('div');
        imageDiv.classList.add("image");
    

        const imageImg = document.createElement('img');
        imageImg.classList.add("image_img");
        // lorem ipsum api 이용하기 (http://lorempixel.com/)
        imageImg.src = (track.artwork_url || "http://lorempixel.com/100/100/business");

        //content 
        const content = document.createElement('div');
        content.classList.add("content");
        
        // header
        const header = document.createElement('div');
        header.classList.add("header");
        
        // link
        const link = document.createElement('a');
        link.href = track.permalink_url;
        link.target = '_blank'
        link.innerHTML = track.title;
        
        // Button
        const button = document.createElement('div');
        button.classList.add("ui", "bottom", "attached", "button-js-button");
        
        const icon = document.createElement('i');
        icon.classList.add("add", "icon");
        
        const buttonText = document.createElement('span');
        buttonText.innerHTML = 'Add to playlist';
        
    
        // HTML 및 DIV 조정
        imageDiv.appendChild(imageImg);
        header.appendChild(link);
        content.appendChild(header);
        button.appendChild(icon);
        button.appendChild(buttonText);
        card.appendChild(imageDiv);
        card.appendChild(content);
        card.appendChild(button);
        
        const searchResults = document.querySelector('#js-search-results');
        searchResults.appendChild(card);
    });


};

SoundCloudAPI.getTrack('busker');

/* 4. Playlist 에 추가하고 실제로 재생하기 */
SC.oEmbed('http://soundcloud.com/forss/flickermood', {
  auto_play: true
}).then(function(embed){
  console.log('oEmbed response: ', embed);
});