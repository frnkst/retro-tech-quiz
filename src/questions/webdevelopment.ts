import { Topic } from '../components/SelectTopics'

export const webdevelopment: Topic = {
  name: 'Web',
  questions: [
    {
      level: 1,
      question: 'Find the oddly matched HTTP status code',
      options: [
        {
          text: '304 Not Found',
          correct: true,
        },
        { text: '301 Moved permanently' },
        { text: '400 Bad Request' },
        { text: '200 OK' },
      ],
    },
    {
      level: 3,
      question:
        'Which two urls have the same origin according to the same-origin policy?',
      options: [
        {
          text: 'http://a.com/page.html and http://a.com/other/page.html',
          correct: true,
        },
        { text: 'http://a.com/page.html and https://a.com/page2.html' },
        { text: 'http://a.com:80/page.html and https://a.com:81/page2.html' },
        {
          text: 'http://news.a.com/page.html and https://images.com/page2.html',
        },
      ],
    },
  ],
}
