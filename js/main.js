const app = new Vue ({

    el:'#root',
    data:{
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Diego',
                avatar: '_3',
                visible: true,
                messages:  
                    [{
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: 
                    [{
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],

        currentContact: 0,

        newMessage: '',

        answers: [
            'L’inverno sta arrivando.',
            'Ci vediamo in un’altra vita, fratello',
            'Soldi o piombo?',
            'Si sentiranno molto stupidi quando lo scopriranno… Hanno fatto incazzare le persone sbagliate.',
            'Sfida accettata.',
            'Dai ad un uomo una pistola e rapinerà una banca. Dai una banca ad un uomo e rapinerà il mondo.',
            'Tu non sai niente, Jon Snow.',
            'Le persone non cambiano.',
            'Ce ripigliamm’ tutt’ chell che è ‘o nuost.',
            'Sta’ senza pensier.',
            'Un Lannister paga sempre i suoi debiti.',
            '4 8 15 16 23 42',
            'Dobbiamo spostare l’isola',
            'Noi esorcizziamo i demoni. Abitanti di tutto il mondo, siamo qui per aiutarvi. Se avete interesse a svegliarvi dal vostro torpore di recuperare la memoria persa, danneggiata o rubata, noi siamo qui per voi, vi copriamo le spalle, siamo la FSociety.',
            'Credo che la coscienza umana sia un tragico passo falso dell’evoluzione. Siamo troppo consapevoli di noi stessi. La natura ha creato un aspetto della natura separato da sé stessa. Siamo creature che non dovrebbero esistere… per le leggi della natura.',
            'Siamo tutti nello stesso ghetto, una fogna gigante nello spazio.',
            'La teoria dell’oliva si basa sui miei amici Marshall e Lily: lui odia le olive, lei le adora, sarà per questo che sono la coppia perfetta, col giusto equilibrio',
            'By order of the Peaky fucking Blinders!',
            'Dobbiamo aumentare i prezzi. Accaparrati il mercato e aumenta i prezzi: è la base dell economia',
            'Tu sei un cane, non vedi i colori, quindi non puoi vedere i colori della bandiera americana, comunista',
        ],

        search: '',
    },

    methods: {

        randomNum() {
            return Math.floor(Math.random() * (this.answers.length - 0 + 1) ) + 0;
            // return Math.floor(Math.random() * this.answers.length ) + 1;
     
        },  

        date: function() {
            return dayjs().format('DD/MM/YYYY HH:mm:ss');
        },

        chooseContact: function(index){
            this.currentContact = index;
        },

        pushNewMessage: function(){
            if(this.newMessage != ''){
                let transferObj = {date: this.date(), message: this.newMessage, status: 'sent'};
                this.contacts[this.currentContact].messages.push(transferObj);
                this.newMessage = '';
                
            }
            setTimeout(() =>{
                let reply = {date: this.date(), message: this.answers[this.randomNum()], status: 'received'};
                this.contacts[this.currentContact].messages.push(reply);
                console.log(this.randomNum())
            }, 1000)

        },

        searchContact: function(){
            this.contacts.forEach((contact) => {
            let lower = contact.name.toLowerCase();
            let upper = contact.name.toUpperCase(); 
            (lower.includes(this.search) || upper.includes(this.search)) ? contact.visible = true : contact.visible = false;
                
            });

        }
        
    }
   
})


