const TOWER_NAMES = ['А', 'Б'];
const MIN_FLOOR = 3;
const MAX_FLOOR = 27;
const MIN_MEETING_ROOM = 1;
const MAX_MEETING_ROOM = 10;
const INTERVAL_MINUTES = 15;
const MAX_DURATION_MEETING_MINUTES = 120;

const listTowers = document.querySelector('select[name="tower"]');
const listFloors = document.querySelector('select[name="floor"]');
const listMeetingRooms = document.querySelector('select[name="meeting-room"]');
const durationMeeting = document.querySelector('select[name="duration"]');

const createOption = (content, element) => {
    const newOption = document.createElement('option');
    newOption.value = content;
    newOption.textContent = content;
    element.append(newOption);
};

const renderOptions = (min, max, element) => {
    for (let i = min; i <= max; i++) {
        createOption(i, element);
    }
};

const renderForm = () => {
    for (let i = 0; i < TOWER_NAMES.length; i++) {
        createOption(TOWER_NAMES[i], listTowers);
    }

    renderOptions(MIN_FLOOR, MAX_FLOOR, listFloors);
    renderOptions(MIN_MEETING_ROOM, MAX_MEETING_ROOM, listMeetingRooms);

    for (let i = INTERVAL_MINUTES; i <= MAX_DURATION_MEETING_MINUTES; i += INTERVAL_MINUTES) {
        let hours = Math.floor(i / 60);
        let minutes = (i % 60);
        let time = `${hours}`.padStart(2, '0') + ':' + `${minutes}`.padStart(2, '0');
        createOption(time, durationMeeting);
    }
}

export { renderForm };