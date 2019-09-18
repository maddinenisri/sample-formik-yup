import { Subject } from 'rxjs';

const globalSubject = new Subject();
const publisher = ( topic, data) => {
    globalSubject.next({ topic, data});
}

export {
    globalSubject,
    publisher
}