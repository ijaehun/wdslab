# Next.js 애플리케이션을 위한 Dockerfile
FROM node:18-alpine

WORKDIR /app

# 의존성 파일 복사 및 설치
COPY package.json package-lock.json* ./
RUN npm install

# 소스 코드 복사
COPY . .

# Next.js 애플리케이션 빌드
RUN npm run build

# 개발 서버 실행
CMD ["npm", "run", "dev"]

# 포트 노출
EXPOSE 3000