# Django 애플리케이션을 위한 Dockerfile
FROM python:3.10-slim

WORKDIR /app

# 의존성 설치
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 소스 코드 복사
COPY . .

# Django 서버 실행
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

# 포트 노출
EXPOSE 8000