import events from "events";
import welcomeEvent from "./eventsClass";

const EventEmitter = new events();

EventEmitter.on("welcome", (msg) => welcomeEvent(msg));

EventEmitter.emit("welcome", "You are in Codelab Today");
