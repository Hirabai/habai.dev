FROM node:18-bullseye  # Debian with broader library support
# Install system libs for GPU (optional)
RUN apt-get update && apt-get install -y \ 
libgl1-mesa-glx \ 
&& rm -rf /var/lib/apt/lists/*

# Install system tools (for canvas, SVG rendering)
RUN apt-get update && apt-get install -y \
    python3 \  # Some Node.js libs need Python build-essential \
    && rm -rf /var/lib/apt/lists/*

# Install npm dependencies (D3.js, Three.js, etc.)
WORKDIR /app
COPY package*.json ./
RUN npm install --production  # Skip dev dependencies in prodRUN 