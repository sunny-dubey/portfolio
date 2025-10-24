#!/bin/bash

# Quick Format and Lint Script
# Usage: ./quick-format.sh [format|format-check|lint|lint-fix|all]

set -e

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found. Please run from project root."
    exit 1
fi

case "${1:-all}" in
    "format")
        print_status "Running Prettier formatter..."
        npm run format
        print_success "Code formatted! ✅"
        ;;
    "format-check")
        print_status "Checking code formatting..."
        npm run format:check
        print_success "Code formatting check complete! ✅"
        ;;
    "lint")
        print_status "Running ESLint..."
        npm run lint
        print_success "Linting complete! ✅"
        ;;
    "lint-fix")
        print_status "Running ESLint with auto-fix..."
        npm run lint:fix
        print_success "Linting with auto-fix complete! ✅"
        ;;
    "all")
        print_status "Running all checks..."
        echo ""
        echo "1️⃣ Formatting code..."
        npm run format
        echo ""
        echo "2️⃣ Checking formatting..."
        npm run format:check
        echo ""
        echo "3️⃣ Running linter..."
        npm run lint
        echo ""
        print_success "All operations complete! ✅"
        ;;
    *)
        echo "Usage: $0 [format|format-check|lint|lint-fix|all]"
        echo ""
        echo "Commands:"
        echo "  format       - Format all code with Prettier"
        echo "  format-check - Check if code is properly formatted"
        echo "  lint         - Run ESLint checks"
        echo "  lint-fix     - Run ESLint with auto-fix"
        echo "  all          - Run all operations (default)"
        exit 1
        ;;
esac
