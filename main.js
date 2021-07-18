// Promise example

var users = [
    {
        id: 1,
        name: 'Songoku'
    },
    {
        id: 2,
        name: 'Naruto'
    },
    {
        id: 3,
        name: 'Conan'
    },
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'I like it.'
    },
    {
        id: 2,
        user_id: 3,
        content: 'Yeah.'
    },
];

function getUserByIds(userId) {
    return new Promise(function (resolve) {
        var result = users.filter(function (user) {
            return userId.includes(user.id)
        });
        setTimeout(function () {
            resolve(result);
        }, 1000);
    })
}


function getComments() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(comments);
        })
    })
}

getComments()
    .then((comments) => {
        var userId = comments.map((comment) => {
            return comment.user_id
        })
        return getUserByIds(userId)
            .then((users) => {
                return {
                    users: users,
                    comments: comments
                }
            })
    })
    .then((data) => {
        console.log(data);
        var commentsBlock = document.getElementById('comment-block');
        var html = '';
        data.comments.forEach((comments) => {
            var user = data.users.find((user) => {
                return user.id === comments.user_id
            });
            html += `<li>${user.name}: ${comments.content}</li>`;
        });
        commentsBlock.innerHTML = html;
    })

getUserByIds([1, 2])
    .then((user) => {
        console.log(user);
    })

