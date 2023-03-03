# 토이프로젝트 모모

- 낡은 cra나 webpack, redux 등등 이제 지겨우니 버리자.
- recoil과 vite를 최우선 사용하는 걸로 목표.
- 최신버전의 react-router, ~~-mui v6~~ tailwind, react-query까지 사용하여 토이프로젝트 시작

# vscode 설정

1. vscode용 Eslint 설치.
2. prettier extension은 사용안함(작업영역)
3. 모든 패키지가 설치되어 있는지 확인
4. 아래와 같이 .vscode/settings.json 설정

```JS
{
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.workingDirectories": [
        {"mode": "auto"}
    ],
    "eslint.validate": [
        "javascript",
        "typescript"
    ]
}

```
