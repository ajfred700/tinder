import firebase from "../firebase";

const db = firebase.collection("/people");

class TutorialDataService {
  getAll() {
    return db;
  }

  create(people) {
    return db.add(people);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

export default new TutorialDataService();