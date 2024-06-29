# Mood Tracker

[A diary that records daily life, tracks emotional states, and provides feedback]

## Tech Stack

- Frontend : Vue3, TypeScript, Tailwindcss
- Backend :
- Database :
- DevOps :

## Code Convention

### Commit Rules

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)를 따릅니다.

**예시)** `<타입>: 설명`

- **타입 설명**
  - `fix` : 버그 수정 (Patch)
  - `feat` : 새로운 기능 (Minor)
  - `build` : 빌드 파일 수정
  - `chore` : 분류하기 어려운 자잘한 수정
  - `ci` : CI 수정
  - `docs` : Documentation 수정
  - `style` : 코드 스타일 수정 (비기능적)
  - `refactor` : 코드 리팩토링
  - `test` : 테스트 코드 수정

### Code Rules

- **주석**

  - 코드를 설명하거나 의도를 명확히 하기 위해 사용
  - 다른 구성원이 이해하기 쉽게 주석을 아낌없이 사용
  - 주석은 최신 상태 유지

- **네이밍 규칙**

  - **함수와 변수**: [camelCase](https://ko.wikipedia.org/wiki/카멜_표기법)
    - **예시)** `func getDB()`, `var getUserName string`
  - **불리언 변수**: `is` 접두사 사용
    - **예시)** `var isUser bool`
  - **상수**: [UPPER_CASE](https://en.wikipedia.org/wiki/Snake_case)
    - **예시)** `const MAX_RETRIES = 5`
  - **클래스와 구조체**: [PascalCase](https://en.wikipedia.org/wiki/PascalCase)
    - **예시)** `type UserProfile struct {}`

- **형식**

  - 프로젝트 코드 형식 가이드 준수
  - 적절한 들여쓰기와 공백 사용
  - 한 줄 길이 80-100자 유지

- **버전 관리**

  - 의미 있는 커밋 메시지와 함께 자주 커밋
  - 기능 개발과 버그 수정을 위해 브랜치 사용
  - 코드 리뷰로 품질 보장 및 지식 공유

- **문서화**
  - 최신의 포괄적인 문서 유지
  - 명확하고 간결한 언어 사용
  - 예제와 사용 사례 포함

## Contribution Guide

### Develop Branch Push

1. feature branch 생성
   ```bash
   git checkout -b feature/feature-name
   ```
2. PR을 생성하고 코드 리뷰를 받은 후 merge합니다.
3. 이때, merge는 default 또는 squash로 진행합니다.

### Main Branch push

1. main branch로 push할 때는 PR을 생성합니다.
2. PR을 생성하고 코드 리뷰를 받은 후 merge합니다.
3. 이때, merge는 default로 진행합니다.
