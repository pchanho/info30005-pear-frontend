/*TODO
*  1. Login feature
*  2. */

import { useState, useEffect } from "react";
import FormData from "form-data"
import axios from 'axios';

//Temporary base url before update heroku server
const BASE_URL = "http://localhost:3001";

/* retrieve conversation from backend 
*/
function getConversations() {
    const endpoint = BASE_URL + '/conversation/readAll';
    return fetch(endpoint).then(res => res.json());
}


async function readOneConversation(data){
    const endpoint = BASE_URL + '/conversation/readOne';
    const conversationId  = data.conversationId;
    console.log(conversationId)
    if (!conversationId) {
        alert("must include all fields");
        return;
    }
    
    
    var res = fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            conversationId
        })
    }).then(res => res.json());
    
    
    return res
}

export function useReadOneConversation(data) {
    const [loading, setLoading] = useState(true);
    const [conversations, setConversations] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        readOneConversation(data)
            .then(conversations => {
                setConversations(conversations);
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
                setError(e);
                setLoading(false);
            });
    }, []);

    return {
        loading,
        conversations,
        error
    };
}

/* wrapper for get conversations 
*/
export function useConversations() {
    const [loading, setLoading] = useState(true);
    const [conversations, setConversations] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getConversations()
            .then(conversations => {
                setConversations(conversations);
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
                setError(e);
                setLoading(false);
            });
    }, []);

    return {
        loading,
        conversations,
        error
    };
}

/* add conversation to the database 
*/
export function addConversation(conversation) {
    const { topic, category, image } = conversation;
    if (!topic || !category) {
        alert("must include all required fields");
        return;
    }

    if (image == undefined){
        alert("no image detected, default image used in place")
    }

    const data = new FormData();
    data.append('topicImage', image);
    data.append('topic', topic);
    data.append('category', category);

    const endpoint = BASE_URL + `/conversation/create/`;
    console.log("addConversation");
    
    return fetch(endpoint, {
        method: "POST",
        body: data
    }).then(res => window.location.reload());
}


/*----------------
 Account API
----------------*/

/* add message to the database 
*/

export async function readOneAccount(data) {

    
    const accountId  = data.accountId;
    if (!accountId) {
        alert("must include all fields");
        return;
    }
    
    

    const endpoint = BASE_URL + '/account/readOne';
    
     var  res = await axios({
            method: 'post',
            url: endpoint,
            data: {
                accountId   
            }
        })
    return res.data
        
}

export function useOneAccount(data) {
    const [loading, setLoading] = useState(true);
    const [accounts, setAccounts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        readOneAccount(data) 
            .then(accounts => {
                setAccounts(accounts);
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
                setError(e);
                setLoading(false);
            });
    }, []);

    return {
        loading,
        accounts,
        error
    };
}





/* add account to the database 
*/ 
export function addAccount(account) {
    const { firstName, lastName, email, birthday, password, userImage } = account;
    if (!firstName || !lastName || !email || !birthday || !password) {
        alert("must include all fields");
        return null;
    }


    const endpoint = BASE_URL + `/account/create/`;

   

    const data = new FormData();
    data.append('firstName', firstName);
    data.append('lastName', lastName);
    data.append('email', email);
    data.append('birthday', birthday);
    data.append('password', password);
    data.append('userImage', userImage);

    if (userImage == undefined){
        alert("no image detected, default image used in place")
    }
    else{
        alert("account succesfully created!")
    }
    
    return fetch(endpoint, {
        method: "POST",
        body: data
    }).then(res => window.location.reload());

    
}

/* attempts to log into the account 
*/
export async function accountLogin(login) {
    const { email, password } = login;
    if (!email || !password) {
        alert("must include all fields");
        return null;
    }

    console.log({
        email,
        password
    });

    const endpoint = BASE_URL + `/account/login/`;
    console.log("login");

    //returns the status of the login (true, false)
   return new Promise( function(resolve) {
        axios({
            method: 'post',
            url: endpoint,
            data: {
                email,
                password
            }
        }).then(function(json) {
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
    const {conversationId, senderId, text, image, video } = message;
    if (!conversationId || !senderId || !text) {
        alert("must include all fields");
        return;
    }

    console.log("made it")

    const endpoint = BASE_URL + `/message/create/`;
    return fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            conversationId,
            senderId,
            text,
            image,
            video
        })
    }).then(res => window.location.reload());
}

/* gets messages based on conversation id 
*/
function getSpecific(data) {
    const endpoint = BASE_URL + '/message/readSpecific';
    const conversationId  = data.conversationId;
    if (!conversationId) {
        alert("must include all fields");
        return;
    }

    
    var res = fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            conversationId
        })
    }).then(res => res.json());

 

    return res
}

/* gets all messages from database 
*/
function getMessages() {
    const endpoint = BASE_URL + '/message/readAll';
    console.log("getMessages");
    return fetch(endpoint).then(res => res.json());
}

/* wrapper for get messages 
*/
export function useMessages(data) {
    const [loading, setLoading] = useState(true);
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getSpecific(data) 
            .then(messages => {
                setMessages(messages);
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
                setError(e);
                setLoading(false);
            });
    }, []);

    return {
        loading,
        messages,
        error
    };
}

/*----------------
 Report API
----------------*/

/* add report to the database 
*/
export function addReport(report) {
    const {accountId, messageId, reason} = report;
    if (!accountId || !messageId || !reason) {
        alert("must include all fields");
        return;
    }


    const endpoint = BASE_URL + `/report/create/`;
    return fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            accountId,
            messageId,
            reason
        })
    }).then(res => window.location.reload());
}

export function reportLogin(reportLogin) {
    const { password } = reportLogin;
    if (!password) {
        alert("must include field");
        return null;
    }

    var storedPassword = "info30005";

    if(password === storedPassword) {
        console.log(process.env.ADMIN);
        return 'True';
    }
    else {
        return 'False';
    }
}

//Support API

function getSupports() {
    const endpoint = BASE_URL + '/support/readAll';
    console.log(getSupports);
    return fetch(endpoint).then(res => res.json());
}

/* wrapper for get supports
*/
export function useSupports() {
    const [loading, setLoading] = useState(true);
    const [supports, setSupports] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getSupports()
            .then(conversations => {
                setSupports(conversations);
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
                setError(e);
                setLoading(false);
            });
    }, []);

    return {
        loading,
        supports,
        error
    };
}
