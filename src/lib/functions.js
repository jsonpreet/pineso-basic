export function determineNewHeight(originalHeight, originalWidth, newWidth) {
    let height = Math.round((originalHeight / originalWidth) * newWidth);
    return height;
}