import React from "react";
import meetups from "../page/meetups";

const Posts = () => {
    const meetPosts = [
        {
            title: "Taco Tuesday at Taqueria La Cruzuelas",
            body: `If you want the best tacos of your life come join 
            us at Taqueria La Cruz at 10360 E Colonial Dr Ste 118, Orlando 
            on Tuesday April 5th.  We are going to be meeting up at 12:00 so we can get 
            there before the tacos run out!  This taqueria also has the best horchata and 
            elote (everything here is highly recommended) but taco tuesday is 
            not to be missed!`,
            author: "Liz Rodriguez",
            imgUrl:
                "https://s23209.pcdn.co/wp-content/uploads/2019/04/Mexican-Street-TacosIMG_9091.jpg",
        },
        {
            title: "Kimchi Group Lunch",
            body: `Group eat at Kimchi Korean Restaurant located at
            7 Alafaya Woods Blvd #1000, Oviedo.  We're planning on getting there at 
            2:30 after the lunch rush on Thursday April 7th.  Hope to see you then!`,
            author: "Mina Harker",
            imgUrl:
                "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmiami.eater.com%2Fmaps%2Fbest-korean-restaurants-miami&psig=AOvVaw2Yq6vXUqV9pVjfREqNfLI_&ust=1648234377036000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOj_9Na13_YCFQAAAAAdAAAAABAD",
        },
        {
            title: "Caribbean Night",
            body: `Join us for dinner at Island Thyme Caribbean Grille for LITERALLY the 
            best jerk chicken you will ever have.  The restaurant is located at 457 Avalon Park S Blvd #600, Orlando. 
            We will be meeting at 7:00 on the 15th of April.`,
            author: "Alexis Rose",
            imgUrl:
                "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftheculturetrip.com%2Fcaribbean%2Farticles%2F14-mouth-watering-caribbean-dishes-you-need-to-try%2F&psig=AOvVaw2ve5ck6b2FezrXbX35pwTw&ust=1648235113945000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMju2Lm43_YCFQAAAAAdAAAAABAD",
        },
        {
            title: "High Tea Downtown",
            body: `An afternoon of finger sandwiches, exotic teas, and delicious pastries. 
            Join us at The Tea Room Experience Saturday at 11:30 on April 16th.  Dress up in your favorite sun dress
            or dress shirt and enjoy an afternoon straight out of a Jane Austen novel!`,
            author: "Eleanor Smith",
            imgUrl:
                "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.salty-savory-sweet.com%2Fblog%2Fafternoon-tea-vs-high-tea-vs-cream-tea-a-brief-tutorial%2F&psig=AOvVaw0E5idqjxaffOxQY4Sfuk31&ust=1648234409194000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMCs9eW13_YCFQAAAAAdAAAAABAS",
        },
    ];

    return (
        <div className="posts-container">
            {meetPosts.map((post, index) => (
                <Post key={index} index={index} post={post} />
            ))}
        </div>
    );
};

export default Posts;
