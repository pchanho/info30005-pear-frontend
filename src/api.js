import { useState, useEffect } from "react";
import FormData from "form-data";
import axios from "axios";
import { useHistory } from "react-router-dom";

//Temporary base url before update heroku server
// const BASE_URL = "http://localhost:3001";

const BASE_URL = "https://info30005-pear.herokuapp.com";

/*----------------
 Conversation API
----------------*/

/* add message to the database
 */

/* retrieve conversation from backend
 */
function getConversations() {
  const endpoint = BASE_URL + "/conversation/readAll";
  return fetch(endpoint).then((res) => res.json());
}

/* retrieve conversation from the backend that are not full
 */
function getNewConversations() {
  const endpoint = BASE_URL + "/conversation/readNew";
  return fetch(endpoint).then((res) => res.json());
}

/* retrieve conversation from backend based on id
 */
async function readOneConversation(data) {
  const endpoint = BASE_URL + "/conversation/readOne";
  const conversationId = data.conversationId;
  console.log(conversationId);
  if (!conversationId) {
    alert("must include all fields");
    return;
  }

  var res = fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      conversationId,
    }),
  }).then((res) => res.json());

  return res;
}

/*wrapper for read one conversation
 */
export function useReadOneConversation(data) {
  const [loading, setLoading] = useState(true);
  const [conversations, setConversations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    readOneConversation(data)
      .then((conversations) => {
        setConversations(conversations);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setError(e);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    conversations,
    error,
  };
}

/* wrapper for get conversations
 */
export function useConversations() {
  const [loading, setLoading] = useState(true);
  const [conversations, setConversations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getNewConversations()
      .then((conversations) => {
        setConversations(conversations);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setError(e);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    conversations,
    error,
  };
}

/* add conversation to the database
 */
export async function addConversation(conversation) {
  const { topic, category, image } = conversation;
  if (!topic || !category) {
    alert("must include all required fields");
    return;
  }

  if (image == undefined) {
    alert("no image detected, default image used in place");
  }

  const data = new FormData();
  data.append("topicImage", image);
  data.append("topic", topic);
  data.append("category", category);

  const endpoint = BASE_URL + `/conversation/create/`;
  console.log("addConversation");

  var res = axios({
    method: "post",
    url: endpoint,
    data: data,
    headers: { "Content-Type": "multipart/form-data" },
  }).then((res) => {
    console.log(res.data._id);
    sessionStorage.setItem("conversationId", res.data._id);
  });
  console.log(res);
  return res;
}

//records participants who enter a chat

export async function addParticipantsInConversation(data) {
  const { conversationId, participantsId } = data;
  if (!conversationId || !participantsId) {
    alert("must include all required fields");
    return;
  }

  const formData = new FormData();
  formData.append("conversationId", conversationId);
  formData.append("participantsId", participantsId);

  console.log(formData);

  const endpoint = BASE_URL + `/conversation/addParticipants/`;

  var res = axios({
    method: "put",
    url: endpoint,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  }).then((res) => {
    console.log(res.data);
  });
  console.log(res);
  return res;
}

//records participants who leave a chat
export async function removeParticipantsInConversation(data) {
  const { conversationId, participantsId } = data;
  if (!conversationId || !participantsId) {
    alert("must include all required fields");
    return;
  }

  alert("You have now left this conversation!");
  const formData = new FormData();
  formData.append("conversationId", conversationId);
  formData.append("participantsId", participantsId);

  console.log(formData);

  const endpoint = BASE_URL + `/conversation/removeParticipants/`;

  var res = axios({
    method: "put",
    url: endpoint,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  }).then((res) => {
    console.log(res.data);
  });
  console.log(res);
  return res;
}

/*----------------
 Account API
----------------*/

/* reads a user account from the database based on id
 */

export async function readOneAccount(data) {
  const accountId = data.accountId;

  const endpoint = BASE_URL + "/account/readOne";

  var res = await axios({
    method: "post",
    url: endpoint,
    data: {
      accountId,
    },
  });
  return res.data;
}

/* wrapper for reading participants*/
export function useReadParticipants(data) {
  const [loading, setLoading] = useState(true);
  const [accounts, setAccounts] = useState([]);
  const [error, setError] = useState(null);
  console.log("ACALLED");
  useEffect(() => {
    readOneAccount(data)
      .then((accounts) => {
        setAccounts(accounts);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setError(e);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    accounts,
    error,
  };
}
/* wrapper for reading one account*/
export function useOneAccount(data) {
  const [loading, setLoading] = useState(true);
  const [accounts, setAccounts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    readOneAccount(data)
      .then((accounts) => {
        setAccounts(accounts);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setError(e);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    accounts,
    error,
  };
}

/* function adds an account to the database with the specified key value pairs 
    inputted by the user 
*/

export function addAccount(account) {
  const { firstName, lastName, email, birthday, password, userImage } = account;

  //alerts the user if one of the input fields is blank
  if (!firstName || !lastName || !email || !birthday || !password) {
    alert("must include all fields");
    return null;
  }

  //accesses the create function from backend
  const endpoint = BASE_URL + `/account/create/`;

  const data = new FormData();
  data.append("firstName", firstName);
  data.append("lastName", lastName);
  data.append("email", email);
  data.append("birthday", birthday);
  data.append("password", password);
  data.append("userImage", userImage);

  if (userImage == undefined) {
    alert("no image detected, default image used in place");
  }

  //returns the status of the login (accountId, false)
  return fetch(endpoint, {
    method: "POST",
    body: data,
  }).then((res) => {
    window.location.reload();
    alert("account succesfully created! You can now log in!");
  });
}

/* function compares if login credentials match those stored in the 
    database, if succesful, the accountId is returned
*/
export async function accountLogin(login) {
  const { email, password } = login;

  //alerts the user if one of the input fields is blank
  if (!email || !password) {
    alert("must include all fields");
    return null;
  }

  console.log({
    email,
    password,
  });

  //accesses the login function from backend
  const endpoint = BASE_URL + `/account/login/`;
  console.log("login");

  //returns the status of the login (true, false)
  return new Promise(function (resolve) {
    axios({
      method: "post",
      url: endpoint,
      data: {
        email,
        password,
      },
    }).then(function (json) {
      resolve(json);
    });
  });
}

/*----------------
 Message API
----------------*/

/* add message to the database
 */
export function addMessage(message) {
  const { conversationId, senderId, text, image, video } = message;
  if (!conversationId || !senderId || !text) {
    alert("must include all fields");
    return;
  }

  console.log("made it");

  const endpoint = BASE_URL + `/message/create/`;
  return fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      conversationId,
      senderId,
      text,
      image,
      video,
    }),
  }).then((res) => window.location.reload());
}

/* gets messages based on conversation id
 */
function getSpecific(data) {
  const endpoint = BASE_URL + "/message/readSpecific";
  const conversationId = data.conversationId;
  if (!conversationId) {
    alert("must include all fields");
    return;
  }

  var res = fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      conversationId,
    }),
  }).then((res) => res.json());

  return res;
}

/* gets all messages from database
 */
function getMessages() {
  const endpoint = BASE_URL + "/message/readAll";
  console.log("getMessages");
  return fetch(endpoint).then((res) => res.json());
}

/* wrapper for get messages
 */
export function useMessages(data) {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSpecific(data)
      .then((messages) => {
        setMessages(messages);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setError(e);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    messages,
    error,
  };
}

/*----------------
 Report API
----------------*/

/* add report to the database
 */
export function addReport(report) {
  const { accountId, messageId, reason } = report;
  if (!accountId || !messageId || !reason) {
    alert("must include all fields");
    return;
  }

  const data = new FormData();
  data.append("accountId", accountId);
  data.append("messageId", messageId);
  data.append("reason", reason);

  const endpoint = BASE_URL + `/report/create/`;
  var res = axios({
    method: "post",
    url: endpoint,
    data: data,
    headers: { "Content-Type": "multipart/form-data" },
  }).then((res) => {
    alert("report succesfully submitted!");
    console.log(res.data._id);
  });
  console.log(res);
  return res;
}

//allows the admin to log in and view reports
export function reportLogin(reportLogin) {
  const { password } = reportLogin;
  if (!password) {
    alert("must include field");
    return null;
  }

  var storedPassword = "info30005";

  if (password === storedPassword) {
    console.log(process.env.ADMIN);
    return "True";
  } else {
    return "False";
  }
}

/* gets all messages from reports
 */
function getReports() {
  const endpoint = BASE_URL + "/report/readAll";
  return fetch(endpoint).then((res) => res.json());
}

/* wrapper for get reports
 */
export function useReports() {
  const [loading, setLoading] = useState(true);
  const [reports, setReports] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getReports()
      .then((reports) => {
        setReports(reports);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setError(e);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    reports,
    error,
  };
}

/*----------------
 Support API
----------------*/

/* add report to the database
 */

function getSupports() {
  const endpoint = BASE_URL + "/support/readAll";
  console.log(getSupports);
  return fetch(endpoint).then((res) => res.json());
}

/* wrapper for get supports
 */
export function useSupports() {
  const [loading, setLoading] = useState(true);
  const [supports, setSupports] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSupports()
      .then((conversations) => {
        setSupports(conversations);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setError(e);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    supports,
    error,
  };
}
