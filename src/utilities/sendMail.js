import axios from 'axios';

const sendEmail = async (fullname, email, subject, message) => {
  return axios({
    method: 'post',
    url: '/api/send-mail',
    data: {
        name: fullname,
        email: email,
        subject: subject,
        message: message,
    },
  });
};

export default sendEmail;