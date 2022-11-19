import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [    {
      "post_id": 1,
      "author_name": "Alex",
      "date": "Oct 22, 2022",
      "body": "Anyone knows in which room is the lab today?", 
      "num_likes": 10
    },
    {
      "post_id": 2,
      "author_name": "Marina",
      "date": "Oct 24, 2022",
      "body": "Have you ever opened the timetable?", 
      "num_likes": 1
    },
    {
      "post_id": 3,
      "author_name": "Alex",
      "date": "Oct 24, 2022",
      "body": "No, I haven't by the way check out the photo I have taken",
      "photo": "./res/images/tartu2024.png",
      "num_likes": 12
    },
    {
      "post_id": 4,
      "author_name": "Marina",
      "date": "Oct 25, 2022",
      "body": "Well that's nice! By the way I have a picture of my favourite building - Delta",
      "photo": "./res/images/delta.png", 
      "num_likes": 0
    },
    {
      "post_id": 5,
      "author_name": "Oliver",
      "date": "Dec 12, 2022",
      "body": "Hey, I am new here what is going on?",
      "num_likes": 29
    },
    {
      "post_id": 6,
      "author_name": "Evelyn",
      "date": "Dec 15, 2022",
      "body": "You are in the best chat group ever!", 
      "num_likes": 2
    },
    {
      "post_id": 7,
      "author_name": "Clay",
      "date": "Dec 16, 2022",
      "body": "Welcome bro! Hope you will enjoy Tartu and have a pleasent semester!",
      "photo": "./res/images/winter.png", 
      "num_likes": 16
    },
    {
      "post_id": 8,
      "author_name": "Marina",
      "date": "Dec 16, 2022",
      "body": "This picture is better :)",
      "photo": "./res/images/science.png", 
      "num_likes": 8
    },
    {
      "post_id": 9,
      "author_name": "Lina",
      "date": "Dec 17, 2022",
      "body": "Aahahahaha the photos are fire! Wish I was in Tartu now", 
      "num_likes": 13
    },
    {
      "post_id": 10,
      "author_name": "Alex",
      "date": "January 21, 2022",
      "body": "Has anybody found the timetable for a new semester?", 
      "num_likes": 55
    }]
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
