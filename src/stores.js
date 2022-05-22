import { writable } from "svelte/store";

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id sapiente enim vitae voluptatibus, eum nisi dolorum nostrum. At modi et sunt eos sit, molestias, vel blanditiis, suscipit voluptatum beatae eligendi?'
    },

    {
        id: 2,
        rating: 8,
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id sapiente enim vitae voluptatibus, eum nisi dolorum nostrum. At modi et sunt eos sit, molestias, vel blanditiis, suscipit voluptatum beatae eligendi?'
    },

    {
        id: 3,
        rating: 9,
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id sapiente enim vitae voluptatibus, eum nisi dolorum nostrum. At modi et sunt eos sit, molestias, vel blanditiis, suscipit voluptatum beatae eligendi?'
    }
])