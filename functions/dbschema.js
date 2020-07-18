let db = {
    user: [
        {
            userId: 'AFMPpDjLVvZqc7MMZNpCH9S0Te73',
            email: 'user@email.com',
            handle: 'user',
            createdAt: '2020-07-13TT11:59:35.634Z',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/happyproject-8e44b.appspot.com/o/no-img.png?alt=media',
            bio: 'Hello, this is my personal hobies chanel. Nice to see you here',
            website: 'http://user.com',
            location: 'Vilnius'
        }
    ],
    screams: [
        {
            userHandle: 'user',
            body: 'this is the scream body',
            createdAt: '2020-07-07T09:58:24.950Z',
            likeCount: 5,
            commentCount: 2
        }
    ],
    comments: [
        {
          userHandle: 'user',
          screamId: 'WA1fru61yRQFe0IubMEf',
          body: 'nice one mate!',
          createdAt: '2020-07-15T10:59:52.798Z'
        }
      ],
      notifications: [
        {
          recipient: 'user',
          sender: 'john',
          read: 'true | false',
          screamId: 'kdjsfgdksuufhgkdsufky',
          type: 'like | comment',
          createdAt: '2019-03-15T10:59:52.798Z'
        }
      ]
};
const userDetails = {
    // Redux data
    credentials: {
      userId: 'N43KJ5H43KJHREW4J5H3JWMERHB',
      email: 'user@email.com',
      handle: 'user',
      createdAt: '2019-03-15T10:59:52.798Z',
      imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh',
      bio: 'Hello, my name is user, nice to meet you',
      website: 'https://user.com',
      location: 'Lonodn, UK'
    },
    likes: [
      {
        userHandle: 'user',
        screamId: 'hh7O5oWfWucVzGbHH2pa'
      },
      {
        userHandle: 'user',
        screamId: '3IOnFoQexRcofs5OhBXO'
      }
    ]
  };
