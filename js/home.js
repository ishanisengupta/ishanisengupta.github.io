function getCurrentTrack() {
    body = fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer BQCLykRgm-FGAn4wrTcNaWKJ2VTtkYVyswcwcB5v19Z142yynZ8RZrUZtLUcyUA40o_Y9m9Fw6Wrai5dURzYKNv6oW0OpNPyiAn23_cph8zNKGtttfH_Yd0lo19-7MRv7jJW2lrTJ8Un7dwwneKPqStYzStahLkn8qTZEiYrN4fVOPDmr2ndrY24VeY9hgo5BEWbjd-a'
    }
    }).then((response) => response.json())
    .then((data) => console.log(data));
}