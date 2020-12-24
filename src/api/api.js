import * as axios from "axios";

const instance=axios.create({
    "withCredentials": true,
    baseURL: 'https://chat-server-project.herokuapp.com/api/'
})

export const UsersAPI={
    getMeInterests: ()=>instance.get(`interests`), //Получение своих интересов
    createInterests: (interests)=>instance.post(`interests`,{interests}), //Создание своих интересов
    changeInterests: (interests)=>instance.put(`interests`,{interests}), //Смена интересов
    getMessages: (userID)=>instance.get(`messages?user_getting=${userID}`), //Получение сообщений пользователя по id через параметр user_getting
    sendMessage: (userID, message)=>instance.post(`messages`, {"user_getting": userID, "message_text": message}), //Отправка сообщения пользователю
    setRating: (rating, userID)=>instance.post(`rating`, {"rating": rating, "user": userID}), //Добавление рейтинга для пользователя
    userForConversation: (interests)=>instance.get(`user-for-conversation/`), // ДОРАБОТАТЬ подбор пользователя исходя из интересов
    getUsers: ()=>instance.get(`users`) //Получение всех юзеров кому можно отправить сообщение
}

export const AuthAPI ={
    login: (login, password)=>axios.post(`https://chat-server-project.herokuapp.com/accounts/login`, {login:login,password:password}, {withCredentials: true}),
    registration: (username,password1,password2)=>axios.post(`https://chat-server-project.herokuapp.com/accounts/signup/ `,{username, email: "new_email@mail.com", public_key: "asddfg", password1, password2}, {withCredentials: true}),
}
