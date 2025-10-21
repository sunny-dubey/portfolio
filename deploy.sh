#!/bin/bash

# Simple deployment script for GitHub Pages
echo "🚀 Deploying to GitHub Pages..."

# Build the project
echo "📦 Building React app..."
npm run build

# Copy build files to docs folder
echo "📁 Copying files to docs folder..."
rm -rf docs
mkdir docs
cp -r build/* docs/

# Add and commit changes
echo "💾 Committing changes..."
git add docs/
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"

# Push to GitHub
echo "🌐 Pushing to GitHub..."
git push origin main

echo "✅ Deployment complete!"
echo "🌍 Your site will be live at: https://sunny-dubey.github.io/portfolio/"
echo "⏱️  It may take 2-3 minutes to update."
