import db, { auth, provider, storage } from "../firebase";
const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};
const setLoading = (load) => {
  return {
    type: "LOADING_STATUS",
    payload: load,
  };
};
export const getArticles = (articles) => {
  return {
    type: "GET_ARTICLES",
    payload: articles,
  };
};
export const signInApi = () => {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        dispatch(setUser(payload.user));
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};
export const validateUser = () => {
  return (dispatch) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
      }
    });
  };
};
export const signOutApi = () => {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((err) => console.log(err.message));
  };
};

export const postArticleApi = (payload) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    if (payload.image !== "") {
      const upload = storage
        .ref(`images/${payload.image.name}`)
        .put(payload.image);
      upload.on(
        "state_changed",
        (snapshot) => {},
        (error) => console.log(error.code),
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL();
          db.collection("articles").add({
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL,
            },
            video: payload.video,
            sharedImg: downloadURL,
            comments: 0,
            description: payload.description,
          });
          dispatch(setLoading(false));
        }
      );
    } else if (payload.video) {
      db.collection("articles").add({
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        video: payload.video,
        sharedImg: "",
        comments: 0,
        description: payload.description,
      });

      dispatch(setLoading(false));
    }
    else if (payload.description !=='' && payload.video ==='' && payload.image==='') {
      db.collection("articles").add({
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        video: "",
        sharedImg: "",
        comments: 0,
        description: payload.description,
      });

      dispatch(setLoading(false));
    }
  };
};
export const getArticleApi = () => {
  return (dispatch) => {
    let payload;
    db.collection("articles")
      .orderBy("actor.date", "desc")
      .onSnapshot((snapshot) => {
        payload = snapshot.docs.map((doc) => doc.data());

        dispatch(getArticles(payload));
      });
  };
};
