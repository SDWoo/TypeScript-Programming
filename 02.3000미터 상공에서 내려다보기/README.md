# 1. 컴파일러

### 대부분의 프로그래밍 언어의 컴파일 과정

1. 프로그램이 AST(추상 문법 트리)로 파싱된다.
2. AST가 바이트코드로 컴파일 된다.
3. 런타임이 바이트코드를 평가한다.

> 타입스크립트는 컴파일러가 코드를 바이트코드가 아닌 자바스크립트 코드로 변환한다

- 그 이후에는 자바스크립트 코드를 실행하듯이 브라우저, NodeJS, 종이와 연필(?)로 실행한다.
- 타입스크립트 컴파일러는 AST를 만들어 결과 코드를 내놓기 전에 타입 확인을 거친다!

> 타입 검사기: 코드의 타입 안정성을 검증한느 특별한 프로그램

```
전체과정!
- TS
1. 타입스크립트 소스 -> 타입스크립트 AST
2. 타입 검사기가 AST를 확인
3. 타입스크립트 AST -> 자바스크립트 코드

- JS
4. 자바스크립트 코드 -> 자바스크립트 AST
5. AST -> 바이트 코드
6. 런타임이 바이트코드를 평가
```

# 2. 타입 시스템

> 타입 시스템: 타입 검사기가 프로그램에 타입을 할당하는데 사용하는 규칙

- 명시적으로 알려주는 시스템과 자동으로 타입을 추론하는 시스템으로 구분됨
- 두가지 방식중에 선택할 수 있음!
- 어노테이션: 명시적으로 알려주는 방식

```tsx
// 어노테이션
let a: number = 1; // number
let b: string = 'hello'; // string
let c: boolean[] = [true, false]; // boolean 배열

// 자동 방식
let a = 1; // number
let b = 'hello'; // string
let c = [true, false]; //boolean 배열
```

### 자바스크립트 vs 타입스크립트

#### 1. 타입은 언제 결정되는가?

- 자바스크립트는 동적으로 타입을 결정하므로 프로그램을 실행하기 전에는 타입을 알 수 없다.
- 타입스크립트는 정적으로 검사하기 때문에, 컴파일 타임에 모든 코드의 타입을 지정하는것을 목표로 한다.

#### 2. 자동으로 타입이 변환되는가?

- 자바스크립튼느 자동으로 변환하는데 타입스크립트는 자동으로 변환하지 않고 에러를 반환한다.

#### 3. 언제 타입을 검사하는가?

- 자바스크립트는 주어진 상황에 대해서 개발자가 무엇을 의도하는지에 따라 맞춰 변화하려 노력만하고, 거의 모든 상황에서 타입을 따지지 않는다.
- 타입스크립트는 컴파일 타임에 코드의 타입을 검사하기 때문에 코드를 실행하지 않고도 이전 예제 코드에 에러를 검출하여 코드를 실행하기 전에 알려준다.

#### 4. 에러는 언제 검출되는가?

- 자바스크립트는 런타임에 예외를 던지거나 암묵적 형변환을 수행한다. ( => 프로그램을 실행해야만 어떤 문제가 있음을 확인할 수 있다.)
- 타입스크립트는 컴파일 타임에 문법 에러와 타입 관련 에러를 모두 검출한다.

# 3. 타입스크립트 시작하기

```
npm init
npm install -D typescript tslint @types/node
```

### tsconfig.json

```
🫵 명령어들 정리
- "compilerOptions"
    - include: TSC가 타입스크립트를 찾을 디렉터리
    - lib: TSC가 코드 실행 환경에서 이용할수 있다고 가정하는 API
    - module: TSC가 코드를 컴파일할 대상 모듈 시스템
    - outDir: 생성된 자바스크립트 코드를 출력할 디렉터리 (build 한 곳)
    - strict: 유효하지 않은 코드를 확인할 때 가능한 한 엄격하게 검사. 이 옵션을 이용하면 코드가 적절하게 타입을 갖추도록 강제할 수 있다.
    이 책에서는 모든 경우에 strict 옵션을 적용하므로 여러분의 타입스크립트 프로젝트에도 이 옵션을 사용하도록 권장한다.
    - target: TSC가 코드를 컴파일할 자바스크립트 버전
```

- 이 옵션들을 자주 바꿀일은 없지만 밑의 경우에는 옵션 설정을 바꿔야 한다.

  - 하지만, 새로운 번들러를 사용하는 경우
  - 브라우저용 타입스크립트를 작성하기 위해 'dom'을 lib에 추가하는 경우
  - 자바스크립트 코드를 타입스크립트로 마이그레이션 할 때 엄격함의 수준을 조절하는 상황

- tsconfig.json 파일을 이용해 간편하게 소스 버전 관리 시스템에 설정을 포함할 수 있다.
- 명령행을 이용해 TSC의 옵션 대부분을 제어하는 방법이 있다.
  - ./node_modules/.bin/tsc --help로 방법을 알 수 있다.

### tslint.json

- TSLint 설정을 정의하는 tslint.json 파일도 포함된다.
- TSLint 기본값을 만드는 명령어
  - ./node_modules/.bin/tslint --init
- React용 TSLint 처럼 미리 정해진 규칙을 추가로 설치할수도 있다.
  - tslint-react

### index.ts

- index.ts를 만들고 해당 파일을 컴파일하고 실행한다.
  - ./node_modules/.bin/tsc
  - node ./dist/index.js

## 🔥 더 빠르게 설정할 수 있는 방법

- ts-node를 설치한다. 이를 이용하면 명령 한번으로 타입스크립트를 컴파일하고 실행할 수 있다.
- typescript-node-starter 같은 뼈대(scafolding) 제공 도구를 이용해 프로젝트 디렉터리 구조를 빠르게 생성할 수 있다.
