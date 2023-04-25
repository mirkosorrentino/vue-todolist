const { createApp } = Vue;

createApp({
    data(){
        return {
            toDos: [
                {
                    text: "Fare i compiti",
                    done: false
                },
                {
                    text: "Fare la spesa" ,
                    done: false
                },
                {
                    text:"Fare il bucato",
                    done: false
                }
            ],
            newToDo: "",
            error: false,
        }
    },
    methods: {
        addToDo(){
            if(this.newToDo.length > 0) {
                this.error = false;
                this.newToDo = this.newToDo[0].toUpperCase() + this.newToDo.substring(1);

                this.toDos.unshift(this.newToDo);
                this.newToDo = "";
            } else {
                this.error = true;

                setTimeout(() => {
                    this.error = false;
                }, 3000)
            }
        },

        removeToDo(indexToRemove) {
            this.toDos.splice(indexToRemove, 1);
        }
    }
}).mount("#app")