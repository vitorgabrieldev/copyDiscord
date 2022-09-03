let openCanais1 = document.querySelector('#openServidor').addEventListener('click', () =>
{this.openServer.openServidor();});

let openFront = document.querySelector('#openFront').addEventListener('click', () =>
{this.openServer.openFrontEnd();});

var openServer = {

    openServidor: function()
    {
        let channelsServidor = document.querySelector('#channelsServidor');
         if(channelsServidor.style.display === 'none')
         {
            channelsServidor.style.display = 'block';
         } else {
            channelsServidor.style.display = 'none';
         };
    },

    openFrontEnd: function()
    {
        let channelsFront = document.querySelector('#channelsFront');

        if(channelsFront.style.display === 'none')
        {
           channelsFront.style.display = 'block';
        } else {
           channelsFront.style.display = 'none';
        };
    },
};