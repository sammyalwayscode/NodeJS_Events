import events from "events";
import displayMessage from "./recap";

const EventsEmitter = new events();

EventsEmitter.on("welcomeDisturbance", (msg) => displayMessage(msg));

setInterval(() => {
  EventsEmitter.emit("welcomeDisturbance", "Welcome to CodeLab");
}, 5000);
