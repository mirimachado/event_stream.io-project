function retryFailedEvents(dispatcher) {
    const stored = localStorage.getItem("failedEvents");
    if (!stored) return;

    let failedEvents;
    try {
        failedEvents = JSON.parse(stored);
    } catch (e) {
        console.error("Erro ao ler eventos salvos:", e);
        return;
    }

    if (!Array.isArray(failedEvents)) return;

    const stillFailed = [];

    failedEvents.forEach(({ event, details }) => {
        try {
            dispatcher.dispatch(event, details);
            console.log(`Evento '${event}' reprocessado com sucesso.`);
        } catch (e) {
            console.warn(`Falha ao reprocessar o evento '${event}':`, e);
            stillFailed.push({ event, details }); 
        }
    });

   
    if (stillFailed.length > 0) {
        localStorage.setItem("failedEvents", JSON.stringify(stillFailed));
    } else {
        localStorage.removeItem("failedEvents");
    }
}
