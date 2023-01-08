import { firebase } from "./firebase";
import { getDatabase, ref, set, push } from "firebase/database";

//Olusturdugumuz Form kismindan bize yollanan mesajlari DataBase'e yükleme ve ...
export const AddMessages = (formData) => {
  const db = getDatabase(firebase);
  const messagesRef = ref(db, "messages/");
  const newMessagesRef = push(messagesRef);

  set(newMessagesRef, formData);
};
