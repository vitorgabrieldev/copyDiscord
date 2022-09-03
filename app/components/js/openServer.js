let openCanais1 = document.querySelector('#openServidor').addEventListener('click', () =>
{this.openServer.openServidor();});

let openFront = document.querySelector('#openFront').addEventListener('click', () =>
{this.openServer.openFrontEnd();});

let openBack = document.querySelector('#openBack').addEventListener('click', () =>
{this.openServer.openBackEnd();});

let openLing = document.querySelector('#openLing').addEventListener('click', () =>
{this.openServer.openLing();});

var openServer = {

    openServidor: function()
    {
        let channelsServidor = document.querySelector('#channelsServidor');
        let iconServidor = document.querySelector('#iconServidor');

         if(channelsServidor.style.display === 'none')
         {

            iconServidor.className = "bx bx-chevron-right rotateIcons";

            channelsServidor.style.display = 'block';
            
         } else {
            channelsServidor.style.display = 'none';

            iconServidor.className = "bx bx-chevron-right";
         };
    },

    openFrontEnd: function()
    {
        let channelsFront = document.querySelector('#channelsFront');
        let iconFront = document.querySelector('#iconFront');


        if(channelsFront.style.display === 'none')
        {

           channelsFront.style.display = 'block';

           iconFront.className = "bx bx-chevron-right rotateIcons";

        } else {

           iconFront.className = "bx bx-chevron-right";

           channelsFront.style.display = 'none';
        };
    },

    openBackEnd: function()
    {
        let channelsBack = document.querySelector('#channelsBack');
        let iconBack = document.querySelector('#iconBack');


        if(channelsBack.style.display === 'none')
        {

           iconBack.className = "bx bx-chevron-right rotateIcons";

           channelsBack.style.display = 'block';
        } else {

           iconBack.className = "bx bx-chevron-right";

           channelsBack.style.display = 'none';
        };
    },

    openLing: function()
    {
        let channelsLing = document.querySelector('#channelsLing');
        let iconLing = document.querySelector('#iconLing');


        if(channelsLing.style.display === 'none')
        {

           iconLing.className = "bx bx-chevron-right rotateIcons";

           channelsLing.style.display = 'block';
        } else {

           iconLing.className = "bx bx-chevron-right";

           channelsLing.style.display = 'none';
        };
    },

};