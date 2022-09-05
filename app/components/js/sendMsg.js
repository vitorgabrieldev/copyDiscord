// containerMsg

window.addEventListener('keypress', (e) => 
{
    if(e.key === 'Enter')
    {
        let chat = document.querySelector('#chat').value;

        if(chat)
        {
            this.chat.main();
        };
    };
});

var chat = {

    main: function()
    {
        this.createMsg();
    },

    createMsg: function()
    {

        let containerMsg = document.querySelector('#containerMsg');
        let chat = document.querySelector('#chat').value;

        var listMsg = document.createElement("li");
        listMsg.textContent = "VitorK > " + chat;
        containerMsg.appendChild(listMsg);

    },

};