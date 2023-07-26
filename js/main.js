const app = Vue.createApp({
  data() {
    return {
      search: "",
      activeContactIndex: 0,
      messages: {
        date: new Date().toLocaleString(),
        message: "",
        status: "sent",
      },
      contatti: [
        {
          name: "Michele",
          avatar: "_1",
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di dargli da mangiare",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "_2",
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "received",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "_3",
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Luisa",
          avatar: "_4",
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
      ],
    };
  },
  methods: {
    onContactClick(contactIndex) {
      console.log(contactIndex);
      this.activeContactIndex = contactIndex;
    },
    addNewMessage(activeContactIndex) {
      const messageClone = { ...this.messages };
      this.contatti[activeContactIndex].messages.push(messageClone);
      this.messages.message = "";
      const answer = { date: new Date().toLocaleString(), message: "ok", status: "received" };
      this.interval = setInterval(() => {
        this.contatti[activeContactIndex].messages.push(answer);
        clearInterval(this.interval);
      }, 1000);
    },
  },
  computed: {
    filteredContacts() {
      return this.contatti.filter(contatti => {
        return contatti.name.toLowerCase().indexOf(this.search.toLowerCase()) != -1;
      });
    },
  },
});

app.mount("#app");
