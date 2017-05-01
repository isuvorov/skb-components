import { config } from 'storybox';
config({
  options: {
    name: 'Project0',
    url: 'https://github.com/Sinoptik21',
  },
  backgrounds: [
    { name: 'default', value: '#fff', default: true },
    { name: 'gray', value: '#ccc' },
    { name: 'black', value: '#000' },
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' },
  ],
  knob: true,
  modules: require('glob!./glob.txt'),
});
