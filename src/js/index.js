import axios from 'axios';
console.log('loaded!');

/* Sample Code - Github Client */
const { SNOWPACK_PUBLIC_GITHUB_TOKEN: token } = import.meta.env;
const GithubClient = axios.create({
  baseurl: '',
  timeout: 1000,
  headers: {
    Accept: 'application/vnd.Github.v3+json',
  },
});
