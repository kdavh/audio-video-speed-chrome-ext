function getPlayBackRate(playBackRate) {
    return 'for (const el of document.querySelectorAll("audio,video")) { el.playbackRate = ' + playBackRate + '};';
}

document.addEventListener('DOMContentLoaded', function() {
    const interval = -0.2;
    const startSpeed = 3;
    const endSpeed = 0.8;
    const list = document.querySelector('ul');

    let speed = startSpeed;
    while (speed >= endSpeed) {
        let li = document.createElement('li');

        let a = document.createElement('a');
        a.innerHTML = speed + 'x';
        li.appendChild(a)

        list.appendChild(li);

        const mySpeed = speed;
        li.addEventListener('click', () => {
            console.log('clicked', mySpeed)
            chrome.tabs.executeScript({code: getPlayBackRate(mySpeed)});
        });

        speed = Math.round((speed + interval) * 10) / 10;
    }
});
