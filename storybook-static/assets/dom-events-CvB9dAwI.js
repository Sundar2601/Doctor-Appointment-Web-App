const control = (e) => e.target;
const eventValue = (e) => control(e).value;
const eventNumber = (e) => e.target.valueAsNumber;
const eventFiles = (e) => e.target.files;

export { eventFiles as a, eventNumber as b, eventValue as e };
