module.exports = {
   disableEmoji: false,
   format: 'ype{t} : {subject}',
   list: ['test', 'feat', 'fix', 'chore', 'docs', 'refactor', 'style', 'ci', 'perf'],
   maxMessageLength: 64,
   minMessageLength: 3,
   questions: ['type', 'subject', 'body'],
   scopes: [],
   types: {
     chore: {
       description: '빌드 업무 수정, 패키지 매니저 수정',
       emoji: '🤖',
       value: 'chore'
     },
     ci: {
       description: 'CI related changes',
       emoji: '🎡',
       value: 'ci'
     },
     docs: {
       description: '문서 수정',
       emoji: '✏️',
       value: 'docs'
     },
     feat: {
       description: '새로운 기능 추가',
       emoji: '🎸',
       value: 'feat'
     },
     fix: {
       description: '버그 수정, 기능 변경',
       emoji: '🐛',
       value: 'fix'
     },
     perf: {
       description: 'A code change that improves performance',
       emoji: '⚡️',
       value: 'perf'
     },
     refactor: {
       description: '코드 리팩토링',
       emoji: '💡',
       value: 'refactor'
     },
     release: {
       description: 'Create a release commit',
       emoji: '🏹',
       value: 'release'
     },
     style: {
       description: '코드 formatting, 세미콜론(;) 누락, 코드 변경이 없는 경우',
       emoji: '💄',
       value: 'style'
     },
     test: {
       description: '테스트 코드, 리팽토링 테스트 코드 추가',
       emoji: '💍',
       value: 'test'
     }
   }
 };