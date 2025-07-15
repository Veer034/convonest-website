#!/bin/bash

# Set your GitHub username and repository
USERNAME="veer034"
REGISTRY="ghcr.io"
REPO_NAME="convonest-website"
VERSION="1.0.0"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

print_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
print_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
print_error() { echo -e "${RED}[ERROR]${NC} $1"; }

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    print_error "Docker is not running. Please start Docker and try again."
    exit 1
fi

# Prompt for GitHub PAT
echo -e "${BLUE}Enter your GitHub Personal Access Token (PAT):${NC}"
echo -e "Note: Token should have 'write:packages' and 'read:packages' permissions"
read -sp "PAT: " PAT
echo ""

if [[ -z "$PAT" ]]; then
    print_error "Personal Access Token is required. Exiting."
    exit 1
fi

# Login to GitHub Container Registry
print_info "Logging into GitHub Container Registry..."
if ! echo "$PAT" | docker login $REGISTRY -u "$USERNAME" --password-stdin; then
    print_error "Login failed. Please check your Personal Access Token."
    exit 1
fi
print_success "Successfully logged into GitHub Container Registry!"

# Build Docker image
print_info "Building Docker image: $REPO_NAME:$VERSION..."
if ! docker build -t "$REPO_NAME:$VERSION" .; then
    print_error "Failed to build Docker image. Please check the Dockerfile."
    exit 1
fi
print_success "Docker image built successfully!"

# Tag and push image
TARGET="$REGISTRY/$USERNAME/$REPO_NAME:$VERSION"
print_info "Tagging and pushing image..."
docker tag "$REPO_NAME:$VERSION" "$TARGET"

if ! docker push "$TARGET"; then
    print_error "Failed to push $TARGET."
    exit 1
fi

print_success "Successfully pushed to GitHub Container Registry!"
echo ""
echo -e "${GREEN}Image URL: ${TARGET}${NC}"
echo -e "${BLUE}To run: docker run -p 80:80 ${TARGET}${NC}"