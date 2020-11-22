# 매커니즘
## 입력 제한 시간부터 setTimeout()을 통한 tick() 재귀 호출
- 0보다 큰 경우 game.methods.tick(second - 1)
- 그 외에는 다음 단계로 이동 game.methods.goNext()
# local 실행 방법
## node ./public/server.js
# test module: jest