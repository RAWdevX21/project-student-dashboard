export function checkIMGdimensions(url) {
    const img = new Image();
    img.onload = function() {
        console.log(`Image dimensions for ${url}: ${this.width}x${this.height}`);
    }
    img.src = url;
}
