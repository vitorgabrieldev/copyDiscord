let openCanais1 = document.querySelector('#openServidor').addEventListener('click', () =>
{
    this.openServer.openServidor();
});

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
};