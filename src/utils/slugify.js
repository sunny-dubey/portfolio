/**
 * Convert a string to a URL-friendly slug
 * @param {string} text - The text to convert to a slug
 * @returns {string} - URL-friendly slug
 */
export const slugify = text => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};
