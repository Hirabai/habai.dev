FROM debian:bullseye-slim
RUN apt-get update && apt-get install -y --no-install-recommends \
curl gnupg && \
curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
apt-get install -y nodejs && \
apt-get clean

RUN npm install three \
npm install vite --save-dev

CMD ["bash"]
