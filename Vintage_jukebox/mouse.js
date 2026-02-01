// Configuration
    const ZOOM_SPEED = 0.005;
    const MAX_ZOOM = 5;

    class ZoomableImage {
        constructor(container) {
            this.container = container;
            this.content = container.querySelector('.zoom-content');
            this.img = container.querySelector('img');

            this.state = {
                scale: 1,
                minScale: 1,
                posX: 0,
                posY: 0,
                isPanning: false,
                isZooming: false,
                startX: 0,
                startY: 0,
                startScale: 1,
                zoomOrigin: { x: 0, y: 0 }
            };

            if (this.img.complete) this.init();
            else this.img.onload = () => this.init();
        }

        init() {
            this.calculateMinScale();
            this.state.scale = this.state.minScale;
            this.centerImage();
            this.update();
            this.addListeners();
        }

        calculateMinScale() {
            const vW = this.container.clientWidth;
            const vH = this.container.clientHeight;
            const sX = vW / this.img.naturalWidth;
            const sY = vH / this.img.naturalHeight;
            // "Fit" logic: choose the scale that covers the box
            this.state.minScale = Math.max(sX, sY);
        }

        centerImage() {
            this.state.posX = (this.container.clientWidth - this.img.naturalWidth * this.state.scale) / 2;
            this.state.posY = (this.container.clientHeight - this.img.naturalHeight * this.state.scale) / 2;
        }

        clamp() {
            const vW = this.container.clientWidth;
            const vH = this.container.clientHeight;
            const imgW = this.img.naturalWidth * this.state.scale;
            const imgH = this.img.naturalHeight * this.state.scale;

            if (imgW > vW) {
                this.state.posX = Math.min(0, Math.max(this.state.posX, vW - imgW));
            } else {
                this.state.posX = (vW - imgW) / 2;
            }

            if (imgH > vH) {
                this.state.posY = Math.min(0, Math.max(this.state.posY, vH - imgH));
            } else {
                this.state.posY = (vH - imgH) / 2;
            }
        }

        update() {
            this.content.style.transform = `translate(${this.state.posX}px, ${this.state.posY}px) scale(${this.state.scale})`;
        }

        addListeners() {
            this.container.addEventListener('mousedown', (e) => {
                const rect = this.container.getBoundingClientRect();
                this.state.zoomOrigin.x = e.clientX - rect.left;
                this.state.zoomOrigin.y = e.clientY - rect.top;

                if (e.button === 1) { // MMB
                    this.state.isPanning = true;
                    this.state.startX = e.clientX - this.state.posX;
                    this.state.startY = e.clientY - this.state.posY;
                    this.container.style.cursor = 'grabbing';
                    e.preventDefault();
                }
                if (e.button === 0) { // LMB
                    this.state.isZooming = true;
                    this.state.startY = e.clientY;
                    this.state.startScale = this.state.scale;
                    this.container.style.cursor = 'ns-resize';
                }
            });

            window.addEventListener('mousemove', (e) => {
                if (this.state.isPanning) {
                    this.state.posX = e.clientX - this.state.startX;
                    this.state.posY = e.clientY - this.state.startY;
                    this.clamp();
                    this.update();
                }

                if (this.state.isZooming) {
                    const delta = this.state.startY - e.clientY;
                    const newScale = Math.max(this.state.minScale, Math.min(this.state.startScale + delta * ZOOM_SPEED, MAX_ZOOM));

                    const wx = (this.state.zoomOrigin.x - this.state.posX) / this.state.scale;
                    const wy = (this.state.zoomOrigin.y - this.state.posY) / this.state.scale;

                    this.state.posX = this.state.zoomOrigin.x - wx * newScale;
                    this.state.posY = this.state.zoomOrigin.y - wy * newScale;
                    this.state.scale = newScale;

                    this.clamp();
                    this.update();
                }
            });

            window.addEventListener('mouseup', () => {
                this.state.isPanning = false;
                this.state.isZooming = false;
                this.container.style.cursor = 'default';
            });

            this.container.addEventListener('contextmenu', e => e.preventDefault());
        }
    }

    // Initialize all viewports
    document.querySelectorAll('.zoom-viewport').forEach(el => new ZoomableImage(el));