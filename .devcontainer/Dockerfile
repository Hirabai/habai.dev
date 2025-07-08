FROM debian:bullseye-slim

# Stops shell prompts from interupting processes
ENV DEBIAN_FRONTEND=noninteractive

# Installing base tools for my build, "--no-install-recommends" helps to keep the build from installing things I didn't ask for 
RUN apt-get update && apt-get install -y --no-install-recommends \
&& curl git unzip gnupg build-essential ripgrep fd-find \
&& curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
&& apt-get clean

RUN apt-get install -y nodejs \
&& npm install three \
&& npm install vite --save-dev

RUN apt-get clean \
&& rm -rf /var/lib/apt/lists/*

CMD ["bash"]
