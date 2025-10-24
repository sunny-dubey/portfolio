#!/bin/bash

# Format and Lint Script for Portfolio
# This script handles all code formatting and linting operations

set -e  # Exit on any error

echo "🎨 Portfolio Code Quality Script"
echo "================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    print_warning "node_modules not found. Installing dependencies..."
    npm install
fi

echo ""
print_status "Starting code quality checks..."

# Step 1: Format Check
echo ""
print_status "Step 1: Checking code formatting..."
if npm run format:check; then
    print_success "Code is properly formatted! ✅"
else
    print_warning "Code formatting issues found. Running formatter..."
    npm run format
    print_success "Code has been formatted! ✅"
fi

# Step 2: Lint Check
echo ""
print_status "Step 2: Running ESLint checks..."
if npm run lint; then
    print_success "No linting issues found! ✅"
else
    print_warning "Linting issues found. Attempting to auto-fix..."
    if npm run lint:fix; then
        print_success "Linting issues auto-fixed! ✅"
    else
        print_error "Some linting issues could not be auto-fixed. Please review manually."
        echo ""
        print_status "Running lint again to show remaining issues:"
        npm run lint
        exit 1
    fi
fi

# Step 3: Final verification
echo ""
print_status "Step 3: Final verification..."
echo "Running format check again..."
npm run format:check
echo "Running lint check again..."
npm run lint

echo ""
print_success "🎉 All code quality checks passed!"
print_success "Your code is now properly formatted and linted."
echo ""
print_status "Summary:"
echo "  ✅ Code formatting: Complete"
echo "  ✅ ESLint checks: Complete"
echo "  ✅ Auto-fixes: Applied where possible"
echo ""
print_status "You can now commit your changes with confidence!"
echo ""
