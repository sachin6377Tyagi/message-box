(function(){
    const form=document.querySelector("#message-form");

    form.addEventListener('submit',function(e){
        e.preventDefault();

        const message=document.querySelector('#message');
        const feedback=document.querySelector('.feedback');
        const messageCont=document.querySelector('.message-content');
        const delivered=document.querySelector('.delivered');

        if(message.value===''){
            feedback.classList.add('show');
            messageCont.classList.add('feedback');
            delivered.classList.add('feedback');
            setTimeout(function(){
                feedback.classList.remove('show');
                messageCont.classList.remove('feedback');
                delivered.classList.remove('feedback');
            },4000)
            
        }else{
            messageCont.textContent=message.value;
            message.value='';
        }
    })
})();