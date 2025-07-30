export class Dispatcher {
    constructor() {
        this.events = {};
    }

    addListener(event, callback) {
        if (typeof callback !== "function") {
            console.error(`O callback precisa ser uma função. Tipo recebido: ${typeof callback}`);
            return false;
        }

        if (typeof event !== "string") {
            console.error(`O nome do evento precisa ser uma string. Tipo recebido: ${typeof event}`);
            return false;
        }

        if (!this.events[event]) {
            this.events[event] = {
                listeners: []
            };
        }

        this.events[event].listeners.push(callback);
    }

    removeListener(event, callback) {
        if (!this.events[event]) {
            console.error(`O evento '${event}' não existe`);
            return false;
        }

        this.events[event].listeners = this.events[event].listeners.filter(
            listener => listener.toString() !== callback.toString()
        );
    }

    dispatch(event, details) {
        if (!this.events[event]) {
            console.error(`O evento '${event}' não existe`);
            return false;
        }

        this.events[event].listeners.forEach(listener => {
            try {
                listener(details);
            } catch (error) {
                console.warn(`Erro ao executar listener do evento '${event}':`, error);

                // Salvar a falha no localStorage
                const failed = localStorage.getItem("failedEvents");
                const failedArray = failed ? JSON.parse(failed) : [];

                failedArray.push({ event, details });
                localStorage.setItem("failedEvents", JSON.stringify(failedArray));
            }
        });
    }
}
